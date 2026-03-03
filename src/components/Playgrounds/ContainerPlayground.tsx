"use client";

import React, { useMemo, useState } from "react";

type Shadow = "none" | "sm" | "lg";

const ContainerPlayground: React.FC = () => {
  const [padding, setPadding] = useState(24);
  const [shadow, setShadow] = useState<Shadow>("lg");
  const [rounded, setRounded] = useState(true);

  const {
    containerClass,
    jsxSnippet,
    cssSnippet,
    htmlSnippet,
    bootstrapSnippet,
  } = useMemo(() => {
    const paddingClass =
      padding <= 12 ? "p-3" : padding <= 24 ? "p-6" : padding <= 32 ? "p-8" : "p-10";

    const shadowClass =
      shadow === "none"
        ? "shadow-none"
        : shadow === "sm"
        ? "shadow-sm"
        : "shadow-default";

    const radiusClass = rounded ? "rounded-xl" : "rounded-none";

    const containerClass = `${paddingClass} ${radiusClass} ${shadowClass} border border-stroke bg-white dark:border-strokedark dark:bg-boxdark`;

    const jsxSnippet = `<div className="${containerClass}">
  <h4 className="mb-2 text-sm font-semibold text-black dark:text-white">
    Container title
  </h4>
  <p className="text-xs text-gray-600 dark:text-gray-300">
    Use this pattern for cards, panels, or sections in your layout.
  </p>
</div>`;

    const px = padding <= 12 ? "0.75rem" : padding <= 24 ? "1.5rem" : padding <= 32 ? "2rem" : "2.5rem";
    const py = px;

    const radiusCss = rounded ? "0.75rem" : "0px";

    const boxShadowCss =
      shadow === "none"
        ? "none"
        : shadow === "sm"
        ? "4px 4px 8px rgba(15, 23, 42, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.9)"
        : "10px 10px 24px rgba(15, 23, 42, 0.35), -10px -10px 24px rgba(255, 255, 255, 0.95)";

    const cssSnippet = `.neu-card {
  padding: ${py} ${px};
  border-radius: ${radiusCss};
  border: 1px solid #E5E7EB;
  background: #F9FAFB;
  box-shadow: ${boxShadowCss};
}

.neu-card-title {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
}

.neu-card-body {
  font-size: 0.75rem;
  color: #4B5563;
}`;

    const htmlSnippet = `<div class="neu-card">
  <h4 class="neu-card-title">Container title</h4>
  <p class="neu-card-body">
    Use this pattern for cards, panels, or sections in your layout.
  </p>
</div>`;

    const bootstrapShadow =
      shadow === "none" ? "" : shadow === "sm" ? " shadow-sm" : " shadow-lg";

    const bootstrapSnippet = `<div class="card${bootstrapShadow}">
  <div class="card-body">
    <h5 class="card-title">Container title</h5>
    <p class="card-text">
      Use this pattern for cards, panels, or sections in your layout.
    </p>
  </div>
</div>`;

    return { containerClass, jsxSnippet, cssSnippet, htmlSnippet, bootstrapSnippet };
  }, [padding, rounded, shadow]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  return (
    <section className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Container/Card Generator</h3>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex items-center justify-center bg-gray-50 py-10 dark:bg-gray-900">
          <div className={containerClass}>
            <h4 className="mb-2 text-sm font-semibold text-black dark:text-white">
              Container title
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Use this pattern for cards, panels, or sections in your layout.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Padding (approx.)
              </span>
              <input
                type="range"
                min={8}
                max={40}
                step={4}
                value={padding}
                onChange={(e) => setPadding(Number(e.target.value))}
              />
              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                ~{padding}px
              </span>
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Shadow</span>
              <select
                value={shadow}
                onChange={(e) => setShadow(e.target.value as Shadow)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="lg">Large</option>
              </select>
            </label>

            <label className="mt-2 flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={rounded}
                onChange={(e) => setRounded(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
              />
              <span className="text-gray-800 dark:text-gray-200">Rounded corners</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                JSX Snippet
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(jsxSnippet)}
                className="rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                Copy JSX
              </button>
            </div>
            <pre className="max-h-40 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
              <code>{jsxSnippet}</code>
            </pre>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Plain CSS + HTML
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(`${cssSnippet}\n\n${htmlSnippet}`)}
                className="rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                Copy HTML &amp; CSS
              </button>
            </div>
            <pre className="max-h-40 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
              <code>{cssSnippet}</code>
            </pre>
            <pre className="max-h-32 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
              <code>{htmlSnippet}</code>
            </pre>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Bootstrap Markup
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(bootstrapSnippet)}
                className="rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                Copy Bootstrap
              </button>
            </div>
            <pre className="max-h-32 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
              <code>{bootstrapSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerPlayground;

