 "use client";

 import React, { useMemo, useState } from "react";

 type Shape = "square" | "rounded" | "pill";

 const NeumorphismGenerator: React.FC = () => {
   const [color, setColor] = useState("#e0e0e0");
   const [size, setSize] = useState(140);
   const [radius, setRadius] = useState(30);
   const [distance, setDistance] = useState(18);
   const [blur, setBlur] = useState(35);
   const [intensity, setIntensity] = useState(0.25);
   const [shape, setShape] = useState<Shape>("rounded");

   const backgroundColor = color;

   const previewStyle = useMemo<React.CSSProperties>(() => {
     const darkShadowOpacity = 0.35 * intensity;
     const lightShadowOpacity = 0.9 * intensity;

     const boxShadow = [
       `${distance}px ${distance}px ${blur}px rgba(0, 0, 0, ${darkShadowOpacity.toFixed(
         2,
       )})`,
       `-${distance}px -${distance}px ${blur}px rgba(255, 255, 255, ${lightShadowOpacity.toFixed(
         2,
       )})`,
     ].join(", ");

     const borderRadius =
       shape === "square" ? 12 : shape === "pill" ? size / 2 : radius;

     return {
       background: backgroundColor,
       borderRadius,
       boxShadow,
       width: size,
       height: size,
     };
   }, [backgroundColor, blur, distance, intensity, radius, shape, size]);

   const cssCode = useMemo(() => {
     const darkShadowOpacity = (0.35 * intensity).toFixed(2);
     const lightShadowOpacity = (0.9 * intensity).toFixed(2);
     const borderRadiusValue =
       shape === "square" ? "12px" : shape === "pill" ? "9999px" : `${radius}px`;

     return [
       `background: ${backgroundColor};`,
       `border-radius: ${borderRadiusValue};`,
       `box-shadow: ${distance}px ${distance}px ${blur}px rgba(0, 0, 0, ${darkShadowOpacity}),`,
       `            -${distance}px -${distance}px ${blur}px rgba(255, 255, 255, ${lightShadowOpacity});`,
     ].join("\n");
   }, [backgroundColor, blur, distance, intensity, radius, shape]);

   const handleCopy = async () => {
     try {
       await navigator.clipboard.writeText(cssCode);
     } catch {
       // Clipboard might not be available; ignore error silently.
     }
   };

   return (
     <section className="mt-16">
       <h2 className="text-xl md:text-3xl font-bold text-black dark:text-white text-left mb-4">
         Neumorphism Box Generator
       </h2>
       <p className="text-sm md:text-base text-left text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
         Customize the card visually and copy the generated CSS for your own
         components. Adjust color, size, radius, and shadow to get the exact
         soft UI effect you want.
       </p>

       <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
         {/* Preview */}
         <div className="flex flex-col gap-6">
           <div
             className="rounded-3xl p-10 flex items-center justify-center border border-gray-200 dark:border-gray-700"
             style={{ background: backgroundColor }}
           >
             <div
               className="transition-all duration-300"
               style={previewStyle}
             />
           </div>

           <div className="text-xs text-gray-500 dark:text-gray-400">
             Tip: Place this CSS on any element and make sure the page
             background matches the chosen color for the best neumorphic effect.
           </div>
         </div>

         {/* Controls + CSS output */}
         <div className="space-y-6">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <label className="flex flex-col gap-2 text-sm">
               <span className="font-medium text-gray-800 dark:text-gray-200">
                 Color
               </span>
               <div className="flex items-center gap-3">
                 <input
                   type="color"
                   value={color}
                   onChange={(e) => setColor(e.target.value)}
                   className="h-10 w-10 rounded-md border border-gray-300 bg-transparent cursor-pointer"
                 />
                 <input
                   type="text"
                   value={color}
                   onChange={(e) => setColor(e.target.value)}
                   className="flex-1 rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#1F8C9C]"
                 />
               </div>
             </label>

             <label className="flex flex-col gap-2 text-sm">
               <span className="font-medium text-gray-800 dark:text-gray-200">
                 Size
                 <span className="ml-1 text-[11px] text-gray-500">
                   {size}px
                 </span>
               </span>
               <input
                 type="range"
                 min={80}
                 max={220}
                 value={size}
                 onChange={(e) => setSize(Number(e.target.value))}
                 className="w-full"
               />
             </label>

             <label className="flex flex-col gap-2 text-sm">
               <span className="font-medium text-gray-800 dark:text-gray-200">
                 Radius
                 <span className="ml-1 text-[11px] text-gray-500">
                   {shape === "pill" ? "auto (pill)" : `${radius}px`}
                 </span>
               </span>
               <input
                 type="range"
                 min={0}
                 max={60}
                 value={radius}
                 onChange={(e) => setRadius(Number(e.target.value))}
                 disabled={shape === "pill"}
                 className="w-full disabled:opacity-40"
               />
             </label>

             <label className="flex flex-col gap-2 text-sm">
               <span className="font-medium text-gray-800 dark:text-gray-200">
                 Distance
                 <span className="ml-1 text-[11px] text-gray-500">
                   {distance}px
                 </span>
               </span>
               <input
                 type="range"
                 min={4}
                 max={40}
                 value={distance}
                 onChange={(e) => setDistance(Number(e.target.value))}
                 className="w-full"
               />
             </label>

             <label className="flex flex-col gap-2 text-sm">
               <span className="font-medium text-gray-800 dark:text-gray-200">
                 Blur
                 <span className="ml-1 text-[11px] text-gray-500">
                   {blur}px
                 </span>
               </span>
               <input
                 type="range"
                 min={10}
                 max={80}
                 value={blur}
                 onChange={(e) => setBlur(Number(e.target.value))}
                 className="w-full"
               />
             </label>

             <label className="flex flex-col gap-2 text-sm">
               <span className="font-medium text-gray-800 dark:text-gray-200">
                 Intensity
                 <span className="ml-1 text-[11px] text-gray-500">
                   {intensity.toFixed(2)}
                 </span>
               </span>
               <input
                 type="range"
                 min={0.1}
                 max={0.6}
                 step={0.02}
                 value={intensity}
                 onChange={(e) => setIntensity(Number(e.target.value))}
                 className="w-full"
               />
             </label>
           </div>

           <div className="flex gap-2 text-sm">
             <button
               type="button"
               onClick={() => setShape("square")}
               className={`rounded-full border px-3 py-1 text-xs ${
                 shape === "square"
                   ? "border-[#1F8C9C] bg-[#1F8C9C] text-white"
                   : "border-gray-300 text-gray-700 dark:text-gray-200"
               }`}
             >
               Square
             </button>
             <button
               type="button"
               onClick={() => setShape("rounded")}
               className={`rounded-full border px-3 py-1 text-xs ${
                 shape === "rounded"
                   ? "border-[#1F8C9C] bg-[#1F8C9C] text-white"
                   : "border-gray-300 text-gray-700 dark:text-gray-200"
               }`}
             >
               Rounded
             </button>
             <button
               type="button"
               onClick={() => setShape("pill")}
               className={`rounded-full border px-3 py-1 text-xs ${
                 shape === "pill"
                   ? "border-[#1F8C9C] bg-[#1F8C9C] text-white"
                   : "border-gray-300 text-gray-700 dark:text-gray-200"
               }`}
             >
               Pill
             </button>
           </div>

           <div className="space-y-2">
             <div className="flex items-center justify-between">
               <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                 Generated CSS
               </span>
               <button
                 type="button"
                 onClick={handleCopy}
                 className="rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
               >
                 Copy
               </button>
             </div>
             <pre className="max-h-48 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
               <code>{cssCode}</code>
             </pre>
           </div>
         </div>
       </div>
     </section>
   );
 };

 export default NeumorphismGenerator;

