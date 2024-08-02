import React from "react";
import Link from "next/link";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (currentItem: any) => {
    if (currentItem.route === pathname) return true;
    if (currentItem.children) {
      return currentItem.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <li>
      <Link
        href={item.route}
        onClick={handleClick}
        className={`${isItemActive ? "bg-graydark dark:bg-meta-4" : ""
          } group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
      >
        {item.icon}
        {item.label}
        {item.children && (
          <MdKeyboardArrowDown
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-[20px] transition-transform duration-300 ease-in-out ${pageName === item.label.toLowerCase() && "rotate-180"
              }`}
          />
        )}
      </Link>

      {item.children && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${pageName === item.label.toLowerCase() ? "max-h-screen" : "max-h-0"
            }`}
          style={{ maxHeight: pageName === item.label.toLowerCase() ? '1000px' : '0' }} // Adjust maxHeight for visibility
        >
          <SidebarDropdown item={item.children} />
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
