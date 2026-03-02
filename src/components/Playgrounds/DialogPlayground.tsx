"use client";

import React, { useMemo, useState } from "react";

type Width = "sm" | "md" | "lg";

const DialogPlayground: React.FC = () => {
  const [title, setTitle] = useState("Dialog title");
  const [body, setBody] = useState("Explain the action or show any content inside this dialog.");
  const [width, setWidth] = useState<Width>("md");

  const { dialogClass, codeSnippet } = useMemo(() => {
    const widthClass =
      width === "sm" ? "max-w-sm" : width === "lg" ? "max-w-2xl" : "max-w-xl";

    const dialogClass = `${widthClass} w-full rounded-xl border border-stroke bg-white p-6 shadow-2xl dark:border-strokedark dark:bg-boxdark`;

    const code = `<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
  <div className="${dialogClass}">
    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
      ${title}
    </h3>
    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
      ${body}
    </p>
    <div className="flex justify-end gap-2">
      <button className="rounded-md border border-stroke px-3 py-1.5 text-xs text-gray-700 dark:border-gray-600 dark:text-gray-100">
        Cancel
      </button>
      <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-opacity-90">
        Confirm
      </button>
    </div>
  </div>
</div>`;

    return { dialogClass, codeSnippet: code };
  }, [body, title, width]);

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
        <h3 className="font-medium text-black dark:text-white">Dialog Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="relative flex h-72 items-center justify-center rounded-lg bg-gray-900/60">
          <div className={dialogClass}>
            <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">{title}</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{body}</p>
            <div className="flex justify-end gap-2">
              <button className="rounded-md border border-stroke px-3 py-1.5 text-xs text-gray-700 dark:border-gray-600 dark:text-gray-100">
                Cancel
              </button>
              <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-opacity-90">
                Confirm
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs sm:col-span-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs sm:col-span-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">Body</span>
              <textarea
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Width</span>
              <select
                value={width}
                onChange={(e) => setWidth(e.target.value as Width)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
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

export default DialogPlayground;

