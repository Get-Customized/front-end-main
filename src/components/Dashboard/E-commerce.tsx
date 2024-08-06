"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

const ECommerce: React.FC = () => {
  return (
    <>
      <h1 className="text-xl md:text-4xl lg:text-4xl font-bold text-black dark:text-white text-center">The best code generators for developers</h1>
      <p className="text-md md:text-xl lg:text-xl text-center py-4">Code generators for front-end development.</p><div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <CardDataStats title="CSS Generators" description="Generate highly customizable CSS properties. Preview the results before copying them to your website." link="Try now">
          <FaCss3Alt className="text-[26px] text-[#2755E9]" />
        </CardDataStats>
        <CardDataStats title="HTML Generator" description="Generate highly customizable HTML elements. Preview the results before copying them to your website." link="Try now">
          <FaHtml5 className="text-[26px] text-[#E34F26]" />
        </CardDataStats>
        <CardDataStats title="Tailwind CSS Generator" description="Generate highly customizable Tailwind CSS properties. Preview the results before copying them to your website." link="Try now">
          <DiBootstrap className="text-[26px] text-[#8512FA]" />
        </CardDataStats>
        <CardDataStats title="Tailwind CSS Generator" description="Generate highly customizable Bootstrap CSS properties. Preview the results before copying them to your website." link="Try now">
          <RiTailwindCssFill className="text-[26px] text-[#38BDF8]" />
        </CardDataStats>
      </div>
    </>
  );
};

export default ECommerce;
