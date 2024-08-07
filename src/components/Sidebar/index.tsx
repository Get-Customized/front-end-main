// Sidebar.tsx
"use client";
import React from "react";
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

const menuGroups: any[] = [
  {
    name: "GENERATORS",
    menuItems: [
      {
        icon: <FaCss3Alt className="text-[20px]" />,
        label: "CSS",
        route: "/",
        children: [
          {
            label: "ANIMATION", route: "#", children: [
              { label: "Keyframe Animation", route: "#" },
              { label: "Background Animation", route: "#" },
            ]
          },
          {
            label: "BOX", route: "#", children: [
              { label: "Border", route: "#" },
              { label: "Box Shadow", route: "#" },
            ]
          },
          {
            label: "FILTER", route: "#", children: [
              { label: "Blur", route: "#" },
              { label: "Brightness", route: "#" },
            ]
          },
          {
            label: "TEXT", route: "#", children: [
              { label: "Letter Spacing", route: "#" },
              { label: "Text Transform", route: "#" },
            ]
          },
          {
            label: "LIST", route: "#", children: [
              { label: "List Style", route: "#" },
            ]
          },
          {
            label: "LAYOUT", route: "#", children: [
              { label: "Columns", route: "#" },
              { label: "Display", route: "#" },
            ]
          },
          {
            label: "COLOR", route: "#", children: [
              { label: "Text Color", route: "#" },
            ]
          },
          {
            label: "TRANSFORM", route: "#", children: [
              { label: "Perspective", route: "#" },
              { label: "Rotate", route: "#" },
            ]
          },
          {
            label: "TRANSITION", route: "#", children: [
              { label: "Transition", route: "#" },
            ]
          },
          {
            label: "MISCELLANEOUS", route: "#", children: [
              { label: "Cursor", route: "#" },
            ]
          },
        ],
      },
      {
        icon: <FaHtml5 className="text-[20px]" />,
        label: "HTML",
        route: "#",
        children: [
          {
            label: "INPUT", route: "#", children: [
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
              { label: "Search Input", route: "#" },
              { label: "Submit Input", route: "#" },
              { label: "Telephone Input", route: "#" },
              { label: "Text Input", route: "#" },
              { label: "Textarea", route: "#" },
              { label: "URL Input", route: "#" }
            ]
          },
          {
            label: "MEDIA", route: "#", children: [
              { label: "Audio Player", route: "#" },
              { label: "Image", route: "#" },
              { label: "Video Player", route: "#" }
            ]
          },
          {
            label: "TEXT", route: "#", children: [
              { label: "Bi-Directional Override", route: "#" },
              { label: "Bold", route: "#" },
              { label: "Cite", route: "#" },
              { label: "Code", route: "#" },
              { label: "Italic", route: "#" },
              { label: "Highlight (Mark)", route: "#" },
              { label: "Quote & Blockquote", route: "#" },
              { label: "Strikethrough", route: "#" },
              { label: "Superscript & Subscript", route: "#" },
              { label: "Underline", route: "#" }
            ]
          },
          {
            label: "OTHERS", route: "#", children: [
              { label: "Details", route: "#" },
              { label: "Dialog", route: "#" },
              { label: "Hyperlink", route: "#" },
              { label: "iframe", route: "#" },
              { label: "Meter", route: "#" },
              { label: "Progress", route: "#" }
            ]
          }
        ],
      },
      {
        icon: <BsBootstrap className="text-[20px]" />,
        label: "Bootstrap CSS",
        route: "#",
        children: [
          { label: "Form Elements", route: "#" },
          { label: "Form Layout", route: "#" },
        ],
      },
      {
        icon: <RiTailwindCssFill className="text-[20px]" />,
        label: "Tailwind CSS",
        route: "#",
        children: [
          { label: "Form Elements", route: "#" },
          { label: "Form Layout", route: "#" },
        ],
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: <AiOutlinePieChart className="text-[24px]" />,
        label: "Chart",
        route: "#",
      },
      {
        icon: <BsBoxes className="text-[20px]" />,
        label: "UI Elements",
        route: "#",
        children: [
          { label: "Buttons", route: "/ui/buttons" },
          { label: "Alerts", route: "/ui/alerts" },
          { label: "Heading", route: "#" },
          { label: "Input", route: "#" },
          { label: "List", route: "#" },
          { label: "Container", route: "#" },
          { label: "Dialog", route: "#" },
          { label: "Textarea", route: "#" },
          { label: "Select", route: "#" },
          { label: "Dropdown", route: "#" },
          { label: "Progress", route: "#" }
        ],
      },
      {
        icon: <BiLogOutCircle className="text-[24px]" />,
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
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const [openMainMenu, setOpenMainMenu] = React.useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center text-2xl font-bold text-white text-nowrap justify-between gap-2 px-2 py-5.5 lg:py-6.5">
          <Link href="/" className="flex flex-row">
            <Image
              width={200}
              height={200}
              src={"/images/logo/codecutsomizer-white.png"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <IoClose className="text-[24px]" />
          </button>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem: any, menuIndex: React.Key | null | undefined) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                      openMainMenu={openMainMenu}
                      setOpenMainMenu={setOpenMainMenu}
                      openSubMenu={openSubMenu}
                      setOpenSubMenu={setOpenSubMenu}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
