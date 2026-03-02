"use client";

import React, { useMemo, useState } from "react";

type ListType = "unordered" | "ordered";

const ListPlayground: React.FC = () => {
  const [type, setType] = useState<ListType>("unordered");
  const [itemsText, setItemsText] = useState("First item, Second item, Third item");

  const { ListTag, listClass, items, codeSnippet } = useMemo(() => {
    const ListTag = type === "unordered" ? "ul" : "ol";
    const listClass =
      "list-inside space-y-1 text-sm text-gray-800 dark:text-gray-100 " +
      (type === "unordered" ? "list-disc" : "list-decimal");

    const items = itemsText
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    const itemsMarkup = items.map((i) => `  <li>${i}</li>`).join("\n");

    const code = `<${ListTag} className="${listClass}">
${itemsMarkup}
</${ListTag}>`;

    return { ListTag, listClass, items, codeSnippet: code };
  }, [itemsText, type]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
    } catch {
      // ignore
    }
  };

  const DynamicList = ListTag as keyof JSX.IntrinsicElements;

  return (
    <section className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">List Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-900">
          <DynamicList className={listClass}>
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </DynamicList>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Type</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ListType)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="unordered">Unordered</option>
                <option value="ordered">Ordered</option>
              </select>
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
                HTML Snippet
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

export default ListPlayground;

