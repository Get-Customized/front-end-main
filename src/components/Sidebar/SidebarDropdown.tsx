import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item, pageName, setPageName, openDropdown, setOpenDropdown }: any) => {
  const pathname = usePathname();

  const handleSubItemClick = (label: string) => {
    const updatedPageName =
      pageName !== label.toLowerCase() ? label.toLowerCase() : "";
    setPageName(updatedPageName);
    if (item.children) {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  return (
    <ul className="mt-2 flex flex-col gap-2.5 pl-6 transition-all duration-300 ease-in-out">
      {item.map((subItem: any, index: number) => (
        <li key={index}>
          <Link
            href={subItem.route}
            onClick={() => handleSubItemClick(subItem.label)}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === subItem.route ? "text-white" : ""}`}
          >
            {subItem.label}
            {subItem.children && (
              <MdKeyboardArrowDown
                className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current text-[20px] transition-transform duration-300 ease-in-out ${openDropdown === subItem.label && "rotate-180"}`}
              />
            )}
          </Link>

          {subItem.children && (
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === subItem.label ? "max-h-screen" : "max-h-0"}`}
              style={{ maxHeight: openDropdown === subItem.label ? '500px' : '0' }}
            >
              <SidebarDropdown item={subItem.children} pageName={pageName} setPageName={setPageName} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;
