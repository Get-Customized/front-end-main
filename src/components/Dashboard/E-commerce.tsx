"use client";
import dynamic from "next/dynamic";
import React from "react";
// import ChartOne from "../Charts/ChartOne";
// import ChartTwo from "../Charts/ChartTwo";
// import ChatCard from "../Chat/ChatCard";
// import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

// const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
//   ssr: false,
// });

// const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
//   ssr: false,
// });

const ECommerce: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-black dark:text-white text-center">The best code generators for developers</h1>
      <p className="text-xl text-center py-4">Code generators for front-end development.</p>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <CardDataStats title="CSS Generators" description="Generate highly customizable CSS properties. Preview the results before copying them to your website." link="Read the docs">
          <FaCss3Alt className="text-[26px] text-[#2755E9]" />
        </CardDataStats>
        <CardDataStats title="HTML Generator" description="Generate highly customizable HTML elements. Preview the results before copying them to your website." link="Read the docs">
          <FaHtml5 className="text-[26px] text-[#E34F26]" />
        </CardDataStats>
        <CardDataStats title="Tailwind CSS Generator" description="Generate highly customizable Tailwind CSS properties. Preview the results before copying them to your website." link="Read the docs">
          <DiBootstrap className="text-[26px] text-[#8512FA]" />
        </CardDataStats>
        <CardDataStats title="Tailwind CSS Generator" description="Generate highly customizable Tailwind CSS properties. Preview the results before copying them to your website." link="Read the docs">
          <RiTailwindCssFill className="text-[26px] text-[#38BDF8]" />
        </CardDataStats>
      </div>

      {/* <div className="relative flex flex-col bg-gray-50 py-6 sm:py-12">
        <div
          className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="absolute z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <FaCss3Alt className="text-[26px] text-white" />
            </span>
            <div
              className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                online.</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                  &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </>
  );
};

export default ECommerce;
