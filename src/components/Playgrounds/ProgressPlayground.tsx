"use client";

import React, { useMemo, useState } from "react";

type Color = "primary" | "success" | "warning";

const ProgressPlayground: React.FC = () => {
  const [value, setValue] = useState(60);
  const [color, setColor] = useState<Color>("primary");
  const [showLabel, setShowLabel] = useState(true);

  const { barClass, codeSnippet } = useMemo(() => {
    const colorClass =
      color === "primary"
        ? "bg-primary"
        : color === "success"
        ? "bg-[#34D399]"
        : "bg-warning";

    const barClass = `h-2 rounded-full ${colorClass}`;

    const code = `<div className="w-full rounded-full bg-gray-200 dark:bg-gray-800">
  <div
    className="${barClass}"
    style={{ width: "${value}%" }}
  ></div>
</div>
${showLabel ? `<p className="mt-2 text-xs text-gray-600 dark:text-gray-300">${value}% complete</p>` : ""}`;

    return { barClass, codeSnippet: code };
  }, [color, showLabel, value]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
    } catch {
      // ignore
    }
  };

  return (
    <section className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Progress Bar Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex flex-col justify-center gap-3">
          <div className="w-full max-w-lg rounded-full bg-gray-200 dark:bg-gray-800">
            <div
              className={barClass}
              style={{ width: `${value}%` }}
            ></div>
          </div>
          {showLabel && (
            <p className="text-xs text-gray-600 dark:text-gray-300">{value}% complete</p>
          )}
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Value</span>
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <span className="text-[11px] text-gray-500 dark:text-gray-400">{value}%</span>
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Color</span>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value as Color)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
              </select>
            </label>

            <label className="mt-2 flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={showLabel}
                onChange={(e) => setShowLabel(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
              />
              <span className="text-gray-800 dark:text-gray-200">Show percentage label</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                JSX Snippet
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
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressPlayground;

