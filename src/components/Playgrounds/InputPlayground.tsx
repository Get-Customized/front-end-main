"use client";

import React, { useMemo, useState } from "react";

type Variant = "outline" | "filled";
type Size = "sm" | "md" | "lg";
type Radius = "none" | "md" | "full";

const InputPlayground: React.FC = () => {
  const [label, setLabel] = useState("Label");
  const [placeholder, setPlaceholder] = useState("Type here...");
  const [variant, setVariant] = useState<Variant>("outline");
  const [size, setSize] = useState<Size>("md");
  const [radius, setRadius] = useState<Radius>("md");
  const [fullWidth, setFullWidth] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const {
    wrapperClass,
    inputClass,
    jsxSnippet,
    cssSnippet,
    htmlSnippet,
    bootstrapSnippet,
  } = useMemo(() => {
    const sizeClass =
      size === "sm"
        ? "px-3 py-2 text-xs"
        : size === "lg"
        ? "px-5 py-3 text-base"
        : "px-4 py-2.5 text-sm";

    const radiusClass =
      radius === "none" ? "rounded-none" : radius === "md" ? "rounded-lg" : "rounded-full";

    const variantClass =
      variant === "filled"
        ? "border-transparent bg-gray-100 focus:border-primary focus:bg-white dark:bg-form-input"
        : "border-[1.5px] border-stroke bg-transparent focus:border-primary dark:border-form-strokedark dark:bg-form-input";

    const widthClass = fullWidth ? "w-full" : "w-72";

    const inputClass = [
      widthClass,
      radiusClass,
      variantClass,
      sizeClass,
      "text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:text-white dark:focus:border-primary",
    ]
      .filter(Boolean)
      .join(" ");

    const wrapperClass = "flex flex-col gap-2";

    const jsxSnippet = `<label className="mb-1 block text-sm font-medium text-black dark:text-white">
  ${label}
</label>
<input
  type="text"
  placeholder="${placeholder}"
  className="${inputClass}"
  ${disabled ? "disabled" : ""}
/>`;

    const basePadding =
      size === "sm" ? "0.5rem 0.75rem" : size === "lg" ? "0.875rem 1.125rem" : "0.75rem 1rem";
    const borderRadiusCss =
      radius === "none" ? "0px" : radius === "md" ? "0.5rem" : "9999px";

    const cssSnippet = `.neu-input-label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.neu-input {
  width: ${fullWidth ? "100%" : "18rem"};
  padding: ${basePadding};
  border-radius: ${borderRadiusCss};
  border: 1.5px solid ${variant === "filled" ? "transparent" : "#E5E7EB"};
  background: ${variant === "filled" ? "#F3F4F6" : "transparent"};
  color: #111827;
  box-shadow: 4px 4px 8px rgba(15, 23, 42, 0.15),
              -4px -4px 8px rgba(255, 255, 255, 0.9);
}

.neu-input:focus {
  outline: none;
  border-color: #1D4ED8;
}`;

    const htmlSnippet = `<label class="neu-input-label">
  ${label}
</label>
<input
  type="text"
  class="neu-input"
  placeholder="${placeholder}"${disabled ? "\n  disabled" : ""}
/>`;

    const bootstrapSnippet = `<div class="mb-3">
  <label class="form-label">${label}</label>
  <input
    type="text"
    class="form-control"
    placeholder="${placeholder}"${disabled ? "\n    disabled" : ""}
  />
</div>`;

    return {
      wrapperClass,
      inputClass,
      jsxSnippet,
      cssSnippet,
      htmlSnippet,
      bootstrapSnippet,
    };
  }, [disabled, fullWidth, label, placeholder, radius, size, variant]);

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
        <h3 className="font-medium text-black dark:text-white">Input Generator</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Configure label, size, and style, then copy JSX, plain HTML + CSS, or
          Bootstrap markup.
        </p>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-900">
            <div className={wrapperClass}>
              <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                {label}
              </label>
              <input
                type="text"
                placeholder={placeholder}
                disabled={disabled}
                className={inputClass}
              />
            </div>
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

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">Radius</span>
              <select
                value={radius}
                onChange={(e) => setRadius(e.target.value as Radius)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="none">None</option>
                <option value="md">Rounded</option>
                <option value="full">Pill</option>
              </select>
            </label>

            <label className="mt-2 flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={fullWidth}
                onChange={(e) => setFullWidth(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
              />
              <span className="text-gray-800 dark:text-gray-200">Full width</span>
            </label>

            <label className="mt-2 flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
              />
              <span className="text-gray-800 dark:text-gray-200">Disabled</span>
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

export default InputPlayground;

