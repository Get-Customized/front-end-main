// SidebarDropdown.tsx
import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";

interface SidebarDropdownProps {
  item: any;
  pageName: string;
  setPageName: (pageName: string) => void;
  openDropdowns: string[];
  setOpenDropdowns: (openDropdowns: string[]) => void;
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
  item,
  pageName,
  setPageName,
  openDropdowns,
  setOpenDropdowns,
}) => {
  const pathname = usePathname();

  const handleSubItemClick = (e: React.MouseEvent, subItem: any) => {
    e.preventDefault();

    const updatedPageName =
      pageName !== subItem.label.toLowerCase() ? subItem.label.toLowerCase() : "";
    setPageName(updatedPageName);
    if (subItem.children) {
      setOpenDropdowns(openDropdowns.includes(subItem.label)
        ? openDropdowns.filter(label => label !== subItem.label)
        : [...openDropdowns, subItem.label]);
    }
  };

  const isActive = (currentItem: any) => {
    if (currentItem.route === pathname) return true;
    if (currentItem.children) {
      return currentItem.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <ul className="mt-2 flex flex-col gap-2.5 pl-6 transition-all duration-300 ease-in-out">
      {item.map((subItem: any, index: number) => (
        <li key={index}>
          <Link
            href={subItem.route}
            onClick={(e) => handleSubItemClick(e, subItem)}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${isItemActive ? "text-white" : ""}`}
          >
            {subItem.label}
            {subItem.children && (
              <MdKeyboardArrowDown
                className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-[20px] transition-transform duration-300 ease-in-out ${openDropdowns.includes(subItem.label) && "rotate-180"}`}
              />
            )}
          </Link>

          {subItem.children && (
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns.includes(subItem.label) ? "max-h-screen" : "max-h-0"}`}
              style={{ maxHeight: openDropdowns.includes(subItem.label) ? '500px' : '0' }}
            >
              <SidebarDropdown item={subItem.children} pageName={pageName} setPageName={setPageName} openDropdowns={openDropdowns} setOpenDropdowns={setOpenDropdowns} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;
