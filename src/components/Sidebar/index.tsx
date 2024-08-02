"use client";

import React, { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BsBootstrap, BsBoxes } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "GENERATORS",
    menuItems: [
      {
        icon: (
          <FaCss3Alt className="text-[20px]" />
        ),
        label: "CSS",
        route: "/",
        children: [
          { label: "ANIMATION", route: "#" },
          { label: "Keyframe Animation", route: "#" },
          { label: "BACKGROUND", route: "#" },
          { label: "Background Color", route: "#" },
          { label: "Background Gradient", route: "#" },
          { label: "Background Image", route: "#" },
          { label: "BOX", route: "#" },
          { label: "Border", route: "#" },
          { label: "Border Image", route: "#" },
          { label: "Border Radius", route: "#" },
          { label: "Box Resize", route: "#" },
          { label: "Box Shadow", route: "#" },
          { label: "Opacity", route: "#" },
          { label: "Outline", route: "#" },
          { label: "Overflow", route: "#" },
          { label: "COLOR", route: "#" },
          { label: "Text Color", route: "#" },
          { label: "FILTER", route: "#" },
          { label: "Blur", route: "#" },
          { label: "Brightness", route: "#" },
          { label: "Contrast", route: "#" },
          { label: "Drop Shadow", route: "#" },
          { label: "Grayscale", route: "#" },
          { label: "Hue Rotate", route: "#" },
          { label: "Invert", route: "#" },
          { label: "Saturate", route: "#" },
          { label: "Sepia", route: "#" },
          { label: "LAYOUT", route: "#" },
          { label: "Columns", route: "#" },
          { label: "Display", route: "#" },
          { label: "Visibility", route: "#" },
          { label: "LIST", route: "#" },
          { label: "List Style", route: "#" },
          { label: "MISCELLANEOUS", route: "#" },
          { label: "Cursor", route: "#" },
          { label: "TEXT", route: "#" },
          { label: "Letter Spacing", route: "#" },
          { label: "Line Height", route: "#" },
          { label: "Overflow Wrap", route: "#" },
          { label: "Tab Size", route: "#" },
          { label: "Text Align", route: "#" },
          { label: "Text Decoration", route: "#" },
          { label: "Text Indent", route: "#" },
          { label: "Text Shadow", route: "#" },
          { label: "Text Transform", route: "#" },
          { label: "White Space", route: "#" },
          { label: "Word Break", route: "#" },
          { label: "Word Spacing", route: "#" },
          { label: "TRANSFORM", route: "#" },
          { label: "Perspective", route: "#" },
          { label: "Rotate", route: "#" },
          { label: "Scale", route: "#" },
          { label: "Skew", route: "#" },
          { label: "Translate", route: "#" },
          { label: "TRANSITION", route: "#" },
          { label: "Transition", route: "#" }
        ],
      },
      {
        icon: (
          <FaHtml5 className="text-[20px]" />
        ),
        label: "HTML",
        route: "#",
        children: [
          { label: "INPUT", route: "#" },
          { label: "Input Button", route: "#" },
          { label: "Checkbox & Radio", route: "#" },
          { label: "Color Input", route: "#" },
          { label: "Date & Time Input", route: "#" },
          { label: "Email Input", route: "#" },
          { label: "File Input", route: "#" },
          { label: "Image Input", route: "#" },
          { label: "Number Input", route: "#" },
          { label: "Password Input", route: "#" },
          { label: "Range Input", route: "#" },
          { label: "Submit Input", route: "#" },
          { label: "Telephone Input", route: "#" },
          { label: "Text Input", route: "#" },
          { label: "Textarea", route: "#" },
          { label: "URL Input", route: "#" }
        ],
      },
      {
        icon: (
          <BsBootstrap className="text-[20px]" />
        ),
        label: "Bootstrap CSS",
        route: "#",
        children: [
          { label: "Form Elements", route: "#", },
          { label: "Form Layout", route: "#", },
        ],
      },
      {
        icon: (
          <RiTailwindCssFill className="text-[20px]" />
        ),
        label: "Tailwind CSS",
        route: "#",
        children: [
          { label: "Form Elements", route: "#", },
          { label: "Form Layout", route: "#", },
        ],
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
        <div className="flex items-center text-2xl font-bold text-white text-nowrap justify-between gap-2 px-2 py-5.5 lg:py-6.5">
          <Link href="/" className="flex flex-row">
            <Image
              width={200}
              height={200}
              src={"/images/logo/full-logo.png"}
              alt="Logo"
              priority
            />
            {/* <p>Code Customizer</p> */}
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
