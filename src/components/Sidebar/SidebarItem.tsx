// SidebarItem.tsx
import React from "react";
import Link from "next/link";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";

interface SidebarItemProps {
  item: any;
  pageName: string;
  setPageName: (pageName: string) => void;
  openMainMenu: string | null;
  setOpenMainMenu: (openMainMenu: string | null) => void;
  openSubMenu: string | null;
  setOpenSubMenu: (openSubMenu: string | null) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, pageName, setPageName, openMainMenu, setOpenMainMenu, openSubMenu, setOpenSubMenu }) => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const updatedPageName = pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    setPageName(updatedPageName);
    if (item.children) {
      setOpenMainMenu(openMainMenu === item.label ? null : item.label);
      setOpenSubMenu(null); // Close any open submenu when a main menu item is clicked
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
  const isHighlighted = ["TRANSITION", "TRANSFORM", "TEXT", "MISCELLANEOUS", "LIST", "LAYOUT", "FILTER", "COLOR", "BOX", "ANIMATION"].includes(item.label.toUpperCase());

  return (
    <li>
      <Link
        href={item.route}
        onClick={handleClick}
        className={`${isItemActive ? "bg-graydark dark:bg-meta-4" : ""}
          ${isHighlighted ? "bg-yellow-500 text-black" : ""}
          group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
      >
        {item.icon}
        {item.label}
        {item.children && (
          <MdKeyboardArrowDown
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-[20px] transition-transform duration-300 ease-in-out ${openMainMenu === item.label && "rotate-180"}`}
          />
        )}
      </Link>

      {item.children && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${openMainMenu === item.label ? "max-h-screen" : "max-h-0"}`}
          style={{ maxHeight: openMainMenu === item.label ? '1000px' : '0' }}
        >
          <SidebarDropdown item={item.children} pageName={pageName} setPageName={setPageName} openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} />
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
