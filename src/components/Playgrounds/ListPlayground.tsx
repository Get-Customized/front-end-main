"use client";

import React, { useMemo, useState } from "react";

type ListType = "unordered" | "ordered";
type GeneratorMode = "tailwind" | "css" | "bootstrap";

interface ListPlaygroundProps {
  mode?: GeneratorMode;
}

const ListPlayground: React.FC<ListPlaygroundProps> = ({ mode = "tailwind" }) => {
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
      await navigator.clipboard.writeText(activeSnippet);
    } catch {
      // ignore
    }
  };

  const DynamicList = ListTag as keyof JSX.IntrinsicElements;

  const cssSnippet = `.custom-list {
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: #1f2937;
}

.custom-list li + li {
  margin-top: 0.25rem;
}`;

  const htmlSnippet = `<${ListTag} class="custom-list">
${items.map((i) => `  <li>${i}</li>`).join("\n")}
</${ListTag}>`;

  const bootstrapSnippet = `<${ListTag} class="list-group list-group-numbered">
${items.map((i) => `  <li class="list-group-item">${i}</li>`).join("\n")}
</${ListTag}>`;

  const activeSnippet =
    mode === "tailwind" ? codeSnippet : mode === "css" ? `${cssSnippet}\n\n${htmlSnippet}` : bootstrapSnippet;
  const snippetTitle =
    mode === "tailwind" ? "JSX Snippet" : mode === "css" ? "Plain CSS + HTML" : "Bootstrap Markup";
  const copyLabel =
    mode === "tailwind" ? "Copy JSX" : mode === "css" ? "Copy HTML & CSS" : "Copy Bootstrap";

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

export default ListPlayground;

