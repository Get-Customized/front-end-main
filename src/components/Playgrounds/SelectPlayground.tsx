"use client";

import React, { useMemo, useState } from "react";

type Variant = "outline" | "filled";

const SelectPlayground: React.FC = () => {
  const [label, setLabel] = useState("Select option");
  const [variant, setVariant] = useState<Variant>("outline");
  const [options, setOptions] = useState("Option 1, Option 2, Option 3");

  const { selectClass, parsedOptions, codeSnippet } = useMemo(() => {
    const base =
      "w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-black outline-none transition focus:border-primary dark:bg-form-input dark:text-white";

    const variantClass =
      variant === "filled"
        ? "border-transparent bg-gray-100 focus:border-primary focus:bg-white dark:bg-form-input"
        : "border-stroke focus:border-primary dark:border-form-strokedark";

    const selectClass = `${base} ${variantClass}`;

    const parsedOptions = options
      .split(",")
      .map((o) => o.trim())
      .filter(Boolean);

    const optionsMarkup = parsedOptions
      .map((o) => `  <option value="${o}">${o}</option>`)
      .join("\n");

    const code = `<label className="mb-1 block text-sm font-medium text-black dark:text-white">
  ${label}
</label>
<select className="${selectClass}">
${optionsMarkup}
</select>`;

    return { selectClass, parsedOptions, codeSnippet: code };
  }, [label, options, variant]);

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
        <h3 className="font-medium text-black dark:text-white">Select Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-900">
          <div className="w-full max-w-xs">
            <label className="mb-1 block text-sm font-medium text-black dark:text-white">
              {label}
            </label>
            <select className={selectClass}>
              {parsedOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Label</span>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Variant</span>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as Variant)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="outline">Outline</option>
                <option value="filled">Filled</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-xs sm:col-span-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Options (comma separated)
              </span>
              <input
                type="text"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
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

export default SelectPlayground;

