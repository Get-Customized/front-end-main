"use client";

import React, { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
// import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { VscTable } from "react-icons/vsc";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    menuItems: [
      {
        icon: (
          <RxDashboard className="text-[20px]" />
        ),
        label: "Dashboard",
        route: "/",
        children: [{ label: "eCommerce", route: "/" }],
      },
      {
        icon: (
          <SlCalender className="text-[20px]" />
        ),
        label: "Calendar",
        route: "#",
      },
      {
        icon: (
          <FaWpforms className="text-[20px]" />
        ),
        label: "Forms",
        route: "#",
        children: [
          {
            label: "Form Elements", route: "#",
          },
          { label: "Form Layout", route: "#", },
        ],
      },
      {
        icon: (
          <VscTable className="text-[22px]" />
        ),
        label: "Tables",
        route: "#",
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: (
          <AiOutlinePieChart className="text-[24px]" />
        ),
        label: "Chart",
        route: "#",
      },
      {
        icon: (
          <BsBoxes className="text-[20px]" />
        ),
        label: "UI Elements",
        route: "#",
        children: [
          { label: "Buttons", route: "#" },
          { label: "Heading", route: "#" },
          { label: "Input", route: "#" },
          { label: "List", route: "#" },
          { label: "Container", route: "#" },
          { label: "Dialog", route: "#" },
          { label: "Textarea", route: "#" },
          { label: "Select", route: "#" },
          { label: "Dropdown", route: "#" },
          { label: "Progress", route: "#" },
          { label: "Alerts", route: "#" },
        ],
      },
      {
        icon: (
          <BiLogOutCircle className="text-[24px]" />
        ),
        label: "Authentication",
        route: "#",
        children: [
          { label: "Sign In", route: "/auth/signin" },
          { label: "Sign Up", route: "/auth/signup" },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  // const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center text-2xl font-bold text-white text-nowrap justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            {/* <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
            /> */}
            Code Customizer
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <IoClose className="text-[24px]" />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
