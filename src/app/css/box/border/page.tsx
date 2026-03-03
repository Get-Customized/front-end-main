"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useMemo, useState } from "react";

export const metadata: Metadata = {
  title: "Code Customizer",
  description: "Simple CSS border generator. Adjust the box and copy the CSS.",
};

const BorderGenerator: React.FC = () => {
  const [width, setWidth] = useState(2);
  const [radius, setRadius] = useState(12);
  const [color, setColor] = useState("#1F2937");
  const [style, setStyle] = useState<"solid" | "dashed" | "dotted">("solid");

  const { previewStyle, cssSnippet } = useMemo(() => {
    const previewStyle: React.CSSProperties = {
      width: 160,
      height: 100,
      borderWidth: width,
      borderRadius: radius,
      borderStyle: style,
      borderColor: color,
      background: "#F3F4F6",
    };

    const cssSnippet = `.border-box {
  border: ${width}px ${style} ${color};
  border-radius: ${radius}px;
  background: #F3F4F6;
}`;

    return { previewStyle, cssSnippet };
  }, [color, radius, style, width]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssSnippet);
    } catch {
      // ignore
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="CSS / Border" />

      <section className="mt-6 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Border Generator</h3>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Adjust border width, radius, color, and style, then copy the CSS.
          </p>
        </div>

        <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
          <div className="flex items-center justify-center rounded-lg bg-gray-50 py-10 dark:bg-gray-900">
            <div className="flex items-center justify-center rounded-xl bg-gray-100 p-6 dark:bg-gray-800">
              <div style={previewStyle} />
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Border width
                </span>
                <input
                  type="range"
                  min={0}
                  max={12}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                />
                <span className="text-[11px] text-gray-500 dark:text-gray-400">
                  {width}px
                </span>
              </label>

              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Border radius
                </span>
                <input
                  type="range"
                  min={0}
                  max={32}
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                />
                <span className="text-[11px] text-gray-500 dark:text-gray-400">
                  {radius}px
                </span>
              </label>

              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium text-gray-800 dark:text-gray-200">Color</span>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-8 w-8 cursor-pointer rounded-md border border-gray-300 bg-transparent"
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="flex-1 rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium text-gray-800 dark:text-gray-200">Style</span>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value as "solid" | "dashed" | "dotted")}
                  className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                </select>
              </label>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  CSS Snippet
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                >
                  Copy
                </button>
              </div>
              <pre className="max-h-52 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <code>{cssSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default BorderGenerator;

