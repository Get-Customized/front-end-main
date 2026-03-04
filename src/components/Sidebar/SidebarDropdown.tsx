// SidebarDropdown.tsx
import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";

interface SidebarDropdownProps {
  item: any;
  pageName: string;
  setPageName: (pageName: string) => void;
  openSubMenu: string | null;
  setOpenSubMenu: (openSubMenu: string | null) => void;
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
  item,
  pageName,
  setPageName,
  openSubMenu,
  setOpenSubMenu,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const shouldCarryMode = (route: string) => route.startsWith("/ui/");

  const getHref = (route: string) => {
    if (!mode || !shouldCarryMode(route)) {
      return route;
    }
    return `${route}?mode=${mode}`;
  };

  const handleSubItemClick = (e: React.MouseEvent, subItem: any) => {
    const updatedPageName =
      pageName !== subItem.label.toLowerCase() ? subItem.label.toLowerCase() : "";
    setPageName(updatedPageName);

    // For menu containers or placeholder routes, prevent navigation and just toggle submenu
    if (subItem.children || subItem.route === "#") {
      e.preventDefault();
      setOpenSubMenu(openSubMenu === subItem.label ? null : subItem.label);
    }
  };

  const isActive = (currentItem: any): boolean => {
    if (currentItem.route === pathname) return true;
    if (currentItem.children) {
      return currentItem.children.some((child: any) => isActive(child));
    }
    return false;
  };
  return (
    <ul className="mt-2 flex flex-col gap-2.5 pl-6 transition-all duration-300 ease-in-out">
      {item.map((subItem: any, index: number) => {
        const isSubItemActive = isActive(subItem);

        return (
          <li key={index}>
            <Link
              href={getHref(subItem.route)}
              onClick={(e) => handleSubItemClick(e, subItem)}
              className={`group relative flex items-center gap-2.5 rounded-md px-4 py-1.5 font-medium duration-300 ease-in-out ${
                isSubItemActive
                  ? "bg-primary/20 text-primary"
                  : "text-body hover:text-black dark:text-bodydark2 dark:hover:text-white"
              }`}
            >
              {subItem.label}
              {subItem.children && (
                <MdKeyboardArrowDown
                  className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-[20px] transition-transform duration-300 ease-in-out ${
                    openSubMenu === subItem.label && "rotate-180"
                  }`}
                />
              )}
            </Link>

            {subItem.children && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSubMenu === subItem.label ? "max-h-screen" : "max-h-0"
                }`}
                style={{
                  maxHeight: openSubMenu === subItem.label ? "500px" : "0",
                }}
              >
                <SidebarDropdown
                  item={subItem.children}
                  pageName={pageName}
                  setPageName={setPageName}
                  openSubMenu={openSubMenu}
                  setOpenSubMenu={setOpenSubMenu}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarDropdown;

