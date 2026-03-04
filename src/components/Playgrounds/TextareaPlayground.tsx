"use client";

import React, { useMemo, useState } from "react";

type Size = "sm" | "md" | "lg";
type GeneratorMode = "tailwind" | "css" | "bootstrap";

interface TextareaPlaygroundProps {
  mode?: GeneratorMode;
}

const TextareaPlayground: React.FC<TextareaPlaygroundProps> = ({ mode = "tailwind" }) => {
  const [label, setLabel] = useState("Message");
  const [placeholder, setPlaceholder] = useState("Write your thoughts...");
  const [rows, setRows] = useState(4);
  const [size, setSize] = useState<Size>("md");

  const { textareaClass, codeSnippet } = useMemo(() => {
    const sizeClass =
      size === "sm"
        ? "px-3 py-2 text-xs"
        : size === "lg"
        ? "px-5 py-3 text-base"
        : "px-4 py-2.5 text-sm";

    const textareaClass = [
      "w-full rounded-lg border-[1.5px] border-stroke bg-transparent text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
      sizeClass,
    ].join(" ");

    const code = `<label className="mb-1 block text-sm font-medium text-black dark:text-white">
  ${label}
</label>
<textarea
  rows={${rows}}
  placeholder="${placeholder}"
  className="${textareaClass}"
></textarea>`;

    return { textareaClass, codeSnippet: code };
  }, [label, placeholder, rows, size]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet);
    } catch {
      // ignore
    }
  };

  const paddingCss =
    size === "sm" ? "0.5rem 0.75rem" : size === "lg" ? "0.75rem 1.25rem" : "0.625rem 1rem";

  const cssSnippet = `.custom-textarea {
  width: 100%;
  padding: ${paddingCss};
  border-radius: 0.5rem;
  border: 1.5px solid #d1d5db;
}`;

  const htmlSnippet = `<label>${label}</label>
<textarea rows="${rows}" class="custom-textarea" placeholder="${placeholder}"></textarea>`;

  const bootstrapSnippet = `<div class="mb-3">
  <label class="form-label">${label}</label>
  <textarea class="form-control" rows="${rows}" placeholder="${placeholder}"></textarea>
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
        <h3 className="font-medium text-black dark:text-white">Textarea Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-900">
          <div className="w-full max-w-xl">
            <label className="mb-1 block text-sm font-medium text-black dark:text-white">
              {label}
            </label>
            <textarea
              rows={rows}
              placeholder={placeholder}
              className={textareaClass}
            ></textarea>
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
              <span className="font-medium text-gray-800 dark:text-gray-200">Placeholder</span>
              <input
                type="text"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Rows</span>
              <input
                type="number"
                min={2}
                max={10}
                value={rows}
                onChange={(e) => setRows(Number(e.target.value) || 2)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Size</span>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as Size)}
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

export default TextareaPlayground;

