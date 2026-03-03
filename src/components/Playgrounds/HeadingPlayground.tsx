"use client";

import React, { useMemo, useState } from "react";

type Level = "h1" | "h2" | "h3" | "h4";
type Align = "left" | "center" | "right";

const HeadingPlayground: React.FC = () => {
  const [text, setText] = useState("Design beautiful headings");
  const [level, setLevel] = useState<Level>("h1");
  const [align, setAlign] = useState<Align>("left");
  const [accent, setAccent] = useState(false);

  const { HeadingTag, className, codeSnippet } = useMemo(() => {
    const HeadingTag = level;
    const base =
      level === "h1"
        ? "text-3xl md:text-4xl font-bold"
        : level === "h2"
        ? "text-2xl md:text-3xl font-semibold"
        : level === "h3"
        ? "text-xl md:text-2xl font-semibold"
        : "text-lg md:text-xl font-medium";

    const alignClass =
      align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

    const accentClass = accent ? "text-primary" : "text-black dark:text-white";

    const className = [base, alignClass, accentClass].join(" ");

    const code = `<${HeadingTag} className="${className}">
  ${text}
</${HeadingTag}>`;

    return { HeadingTag, className, codeSnippet: code };
  }, [accent, align, level, text]);

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
        <h3 className="font-medium text-black dark:text-white">Heading Generator</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Choose level, alignment, and accent color, then copy the JSX.
        </p>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-900">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <HeadingTag className={className as any}>{text}</HeadingTag>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Text</span>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Level</span>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as Level)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="h1">h1</option>
                <option value="h2">h2</option>
                <option value="h3">h3</option>
                <option value="h4">h4</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Align</span>
              <select
                value={align}
                onChange={(e) => setAlign(e.target.value as Align)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </label>

            <label className="mt-2 flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={accent}
                onChange={(e) => setAccent(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
              />
              <span className="text-gray-800 dark:text-gray-200">Use primary accent color</span>
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

export default HeadingPlayground;

