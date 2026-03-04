"use client";

import React, { useMemo, useState } from "react";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

interface DropdownPlaygroundProps {
  mode?: GeneratorMode;
}

const DropdownPlayground: React.FC<DropdownPlaygroundProps> = ({ mode = "tailwind" }) => {
  const [label, setLabel] = useState("Actions");
  const [itemsText, setItemsText] = useState("Edit, Duplicate, Archive");

  const { items, codeSnippet } = useMemo(() => {
    const items = itemsText
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    const itemsMarkup = items
      .map(
        (i) =>
          `        <button className="block w-full px-3 py-1.5 text-left text-xs hover:bg-gray-100 dark:hover:bg-gray-700">${i}</button>`,
      )
      .join("\n");

    const code = `<div className="relative inline-block text-left">
  <button className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-opacity-90">
    ${label}
    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  <div className="absolute right-0 z-10 mt-1 w-40 rounded-md border border-stroke bg-white py-1 shadow-lg dark:border-strokedark dark:bg-boxdark">
${itemsMarkup}
  </div>
</div>`;

    return { items, codeSnippet: code };
  }, [itemsText, label]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet);
    } catch {
      // ignore
    }
  };

  const htmlItems = items.map((i) => `    <button class="dropdown-item" type="button">${i}</button>`).join("\n");

  const cssSnippet = `.dropdown-custom {
  position: relative;
  display: inline-block;
}

.dropdown-menu-custom {
  position: absolute;
  right: 0;
  margin-top: 0.25rem;
  min-width: 10rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #ffffff;
}`;

  const htmlSnippet = `<div class="dropdown-custom">
  <button>${label}</button>
  <div class="dropdown-menu-custom">
${items.map((i) => `    <button type="button">${i}</button>`).join("\n")}
  </div>
</div>`;

  const bootstrapSnippet = `<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    ${label}
  </button>
  <div class="dropdown-menu show">
${htmlItems}
  </div>
</div>`;

  const activeSnippet =
    mode === "tailwind" ? codeSnippet : mode === "css" ? `${cssSnippet}\n\n${htmlSnippet}` : bootstrapSnippet;
  const snippetTitle =
    mode === "tailwind" ? "JSX Snippet" : mode === "css" ? "Plain CSS + HTML" : "Bootstrap Markup";
  const copyLabel =
    mode === "tailwind" ? "Copy JSX" : mode === "css" ? "Copy HTML & CSS" : "Copy Bootstrap";

  return (
    <section className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Dropdown Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex items-center justify-center rounded-lg bg-gray-50 py-10 dark:bg-gray-900">
          <div className="relative inline-block text-left">
            <button className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-opacity-90">
              {label}
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute right-0 z-10 mt-1 w-40 rounded-md border border-stroke bg-white py-1 shadow-lg dark:border-strokedark dark:bg-boxdark">
              {items.map((i) => (
                <button
                  key={i}
                  className="block w-full px-3 py-1.5 text-left text-xs hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Button label</span>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs sm:col-span-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Items (comma separated)
              </span>
              <input
                type="text"
                value={itemsText}
                onChange={(e) => setItemsText(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {snippetTitle}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                {copyLabel}
              </button>
            </div>
            <pre className="max-h-52 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
              <code>{activeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropdownPlayground;

