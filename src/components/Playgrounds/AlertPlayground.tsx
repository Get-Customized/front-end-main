"use client";

import React, { useMemo, useState } from "react";

type Tone = "warning" | "success" | "error" | "info";

const toneStyles: Record<Tone, { border: string; bg: string; title: string }> = {
  warning: {
    border: "border-warning",
    bg: "bg-warning",
    title: "Attention needed",
  },
  success: {
    border: "border-[#34D399]",
    bg: "bg-[#34D399]",
    title: "Action completed",
  },
  error: {
    border: "border-[#F87171]",
    bg: "bg-[#F87171]",
    title: "Something went wrong",
  },
  info: {
    border: "border-primary",
    bg: "bg-primary",
    title: "Heads up",
  },
};

const AlertPlayground: React.FC = () => {
  const [tone, setTone] = useState<Tone>("warning");
  const [title, setTitle] = useState("Attention needed");
  const [body, setBody] = useState(
    "This is a customizable alert. Use it to highlight important information.",
  );

  const { containerClass, codeSnippet } = useMemo(() => {
    const style = toneStyles[tone];
    const containerClass = `flex w-full border-l-6 ${style.border} ${style.bg} bg-opacity-[15%] px-7 py-6 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30`;

    const code = `<div className="${containerClass}">
  <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-lg ${style.bg} bg-opacity-30">
    {/* icon here */}
  </div>
  <div className="w-full">
    <h5 className="mb-2 text-base font-semibold text-black dark:text-white">
      ${title}
    </h5>
    <p className="text-sm leading-relaxed text-body">
      ${body}
    </p>
  </div>
</div>`;

    return { containerClass, codeSnippet: code };
  }, [body, title, tone]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
    } catch {
      // ignore
    }
  };

  const style = toneStyles[tone];

  return (
    <section className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Alert Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className={containerClass}>
          <div
            className={`mr-4 flex h-9 w-9 items-center justify-center rounded-lg ${style.bg} bg-opacity-30`}
          >
            <span className="text-xs font-bold text-white">!</span>
          </div>
          <div className="w-full">
            <h5 className="mb-2 text-base font-semibold text-black dark:text-white">
              {title}
            </h5>
            <p className="text-sm leading-relaxed text-body text-gray-700 dark:text-gray-300">
              {body}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Tone</span>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as Tone)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="warning">Warning</option>
                <option value="success">Success</option>
                <option value="error">Error</option>
                <option value="info">Info</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-xs">
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

export default AlertPlayground;

