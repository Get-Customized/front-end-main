"use client";

import React, { useMemo, useState } from "react";

type Variant = "solid" | "outline";
type Color = "primary" | "meta-3" | "black";
type Radius = "none" | "md" | "full";
type Size = "sm" | "md" | "lg";

const ButtonPlayground: React.FC = () => {
  const [label, setLabel] = useState("Button");
  const [variant, setVariant] = useState<Variant>("solid");
  const [color, setColor] = useState<Color>("primary");
  const [radius, setRadius] = useState<Radius>("md");
  const [size, setSize] = useState<Size>("md");
  const [fullWidth, setFullWidth] = useState(false);

  const {
    className,
    jsxSnippet,
    cssSnippet,
    htmlSnippet,
    bootstrapSnippet,
  } = useMemo(() => {
    const base =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const sizeClass =
      size === "sm"
        ? "px-4 py-2 text-xs"
        : size === "lg"
        ? "px-10 py-4 text-base"
        : "px-6 py-3 text-sm";

    const radiusClass =
      radius === "none" ? "rounded-none" : radius === "md" ? "rounded-md" : "rounded-full";

    const palette =
      color === "primary"
        ? { bg: "bg-primary", text: "text-white", border: "border-primary" }
        : color === "meta-3"
        ? { bg: "bg-meta-3", text: "text-white", border: "border-meta-3" }
        : { bg: "bg-black", text: "text-white", border: "border-black" };

    const variantClass =
      variant === "solid"
        ? `${palette.bg} ${palette.text} hover:bg-opacity-90`
        : `border ${palette.border} text-${color} bg-transparent hover:bg-opacity-5`;

    const widthClass = fullWidth ? "w-full" : "";

    const className = [base, sizeClass, radiusClass, variantClass, widthClass]
      .filter(Boolean)
      .join(" ");

    const jsxSnippet = `<button className="${className}">
  ${label}
</button>`;

    // Very simple CSS approximation (not Tailwind-powered),
    // giving users a starting point for plain CSS.
    const basePadding =
      size === "sm" ? "0.5rem 1rem" : size === "lg" ? "1rem 2.5rem" : "0.75rem 1.75rem";
    const borderRadiusCss =
      radius === "none" ? "0px" : radius === "md" ? "0.375rem" : "9999px";

    const colorHex =
      color === "primary" ? "#1D4ED8" : color === "meta-3" ? "#10B981" : "#111827";

    const isOutline = variant === "outline";

    const cssSnippet = `.neu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${basePadding};
  border-radius: ${borderRadiusCss};
  font-weight: 500;
  border: ${isOutline ? "1px solid " + colorHex : "none"};
  background: ${isOutline ? "transparent" : colorHex};
  color: ${isOutline ? colorHex : "#ffffff"};
  box-shadow: 8px 8px 16px rgba(15, 23, 42, 0.35),
              -8px -8px 16px rgba(255, 255, 255, 0.9);
}`;

    const htmlSnippet = `<button class="neu-button">
  ${label}
</button>`;

    const bootstrapVariant =
      color === "primary" ? "primary" : color === "meta-3" ? "success" : "dark";

    const bootstrapSnippet = `<button class="btn btn-${bootstrapVariant}">
  ${label}
</button>`;

    return { className, jsxSnippet, cssSnippet, htmlSnippet, bootstrapSnippet };
  }, [color, fullWidth, label, radius, size, variant]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <section className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Button Generator</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Tweak the button visually and copy JSX, plain CSS / HTML, or Bootstrap
          code.
        </p>
      </div>

      <div className="grid gap-8 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-6 xl:p-9">
        {/* Preview */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-900">
            <button type="button" className={className}>
              {label}
            </button>
          </div>

          <div className="space-y-3 text-xs text-gray-500 dark:text-gray-400">
            <p>
              Use this button snippet directly in your JSX. Make sure Tailwind
              is configured with the same color tokens (`primary`, `meta-3`,
              etc).
            </p>
          </div>
        </div>

        {/* Controls + code */}
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Label
              </span>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              />
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Variant
              </span>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as Variant)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Color
              </span>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value as Color)}
                className="rounded-md border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:text-gray-100"
              >
                <option value="primary">Primary</option>
                <option value="meta-3">Success (meta-3)</option>
                <option value="black">Black</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Radius
              </span>
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

            <label className="flex flex-col gap-1 text-xs">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Size
              </span>
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

            <label className="mt-2 flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={fullWidth}
                onChange={(e) => setFullWidth(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
              />
              <span className="text-gray-800 dark:text-gray-200">
                Full width
              </span>
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

export default ButtonPlayground;

