import React, { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface CardDataStatsProps {
  title: string;
  description: string;
  link: string;
  children: ReactNode;
  onTryNowClick: (title: string) => void;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, description, link, children, onTryNowClick }) => {
  const handleTryNowClick = () => {
    onTryNowClick(title);
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {title}
          </h4>
          <span className="text-sm font-medium">{description}</span>
          <div className="pt-4 text-base font-semibold leading-7 group">
            <p onClick={handleTryNowClick} className="flex flex-row cursor-pointer text-sky-500 hover:underline transition-all duration-300">
              {link}
              <FaArrowRight className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-2 transition-transform duration-300 group-hover:translate-x-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
