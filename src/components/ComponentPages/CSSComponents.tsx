import { title } from 'process';
import React from 'react';
import { IoChevronForward } from 'react-icons/io5';

const CSSComponents = () => {
  const aniamtionsPropertiesList = [
    { title: 'Keyframe Animation' }
  ]

  const backgroundPropertiesList = [
    { title: 'Background Color' },
    { title: 'Background Gradient' },
    { title: 'Background Image' }
  ]

  const boxPropertiesList = [
    { title: 'Border' },
    { title: 'Border Image' },
    { title: 'Border Radius' },
    { title: 'Box Resize' },
    { title: 'Box Shadow' },
    { title: 'Opacity' },
    { title: 'Outline' },
    { title: 'Overflow' }
  ];

  return (
    <>
      <hr />
      <h1 className="text-xl md:text-4xl lg:text-4xl font-bold text-black pt-3 dark:text-white text-left">CSS Generators</h1>
      <p className="text-md md:text-xl lg:text-xl text-left py-4">Generate highly customizable CSS properties. Preview the results before copying them to your website.</p>
      <hr />

      <div className='mt-12'>
        <h1 className="text-sm d:text-xl lg:text-xl py-2 font-bold text-[#1F8C9C] text-left">Aniamtions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aniamtionsPropertiesList.map((card, index) => (
            <div key={index} className="relative p-px flex flex-row hover:text-white justify-between items-center font-semibold leading-6 text-black no-underline border border-[#E5E7EB] cursor-pointer group rounded-xl shadow-zinc-900">
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[#1F8C9C] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10 flex flex-row justify-between items-center w-full px-4 py-3 space-x-2 rounded-xl bg-gray-950/50">
                <p className="text-md md:text-xl lg:text-xl font-normal text-gray-200 dark:text-white text-left">{card.title}</p>
                <IoChevronForward />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-12'>
        <h1 className="text-sm d:text-xl lg:text-xl py-2 font-bold text-[#1F8C9C] text-left">Background</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {backgroundPropertiesList.map((card, index) => (
            <div key={index} className="relative p-px flex flex-row hover:text-white justify-between items-center font-semibold leading-6 text-black no-underline border border-[#E5E7EB] cursor-pointer group rounded-xl shadow-zinc-900">
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[#1F8C9C] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10 flex flex-row justify-between items-center w-full px-4 py-3 space-x-2 rounded-xl bg-gray-950/50">
                <p className="text-md md:text-xl lg:text-xl font-normal text-gray-200 dark:text-white text-left">{card.title}</p>
                <IoChevronForward />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-12'>
        <h1 className="text-sm d:text-xl lg:text-xl py-2 font-bold text-[#1F8C9C] text-left">Box</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {boxPropertiesList.map((card, index) => (
            <div key={index} className="relative p-px flex flex-row hover:text-white justify-between items-center font-semibold leading-6 text-black no-underline border border-[#E5E7EB] cursor-pointer group rounded-xl shadow-zinc-900">
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-[#1F8C9C] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10 flex flex-row justify-between items-center w-full px-4 py-3 space-x-2 rounded-xl bg-gray-950/50">
                <p className="text-md md:text-xl lg:text-xl font-normal text-gray-200 dark:text-white text-left">{card.title}</p>
                <IoChevronForward />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CSSComponents;
