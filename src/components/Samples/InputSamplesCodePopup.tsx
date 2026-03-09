"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedInput = {
  title: string;
  inputClassName: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  prefix: string;
  suffix: string;
  leading: string;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const toneFromClass = (className: string) => {
  if (className.includes("success")) return "success";
  if (className.includes("danger")) return "danger";
  if (className.includes("primary")) return "primary";
  return "secondary";
};

const buildSnippets = (item: SelectedInput): Record<CodeTab, string> => {
  const content = item.value || item.placeholder || "Enter value";
  const disabledAttr = item.disabled ? " disabled" : "";
  const valueAttr = item.value ? ` value="${item.value}"` : "";
  const placeholderAttr = !item.value ? ` placeholder="${item.placeholder || "Enter value"}"` : "";

  const inputTag = `<input type="text"${placeholderAttr}${valueAttr}${disabledAttr} class="${item.inputClassName}" />`;

  const tailwind =
    item.prefix || item.suffix
      ? `<div class="flex overflow-hidden rounded-md border border-stroke">
  ${item.prefix ? `<span class="bg-gray px-3 py-2.5 text-sm text-body">${item.prefix}</span>\n  ` : ""}${inputTag}
  ${item.suffix ? `<span class="bg-gray px-3 py-2.5 text-sm text-body">${item.suffix}</span>` : ""}
</div>`
      : item.leading
      ? `<div class="relative">
  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-body">${item.leading}</span>
  ${inputTag.replace('class="', 'class="pl-9 ')}
</div>`
      : inputTag;

  const html =
    item.prefix || item.suffix
      ? `<div class="custom-input-group">
  ${item.prefix ? `<span class="custom-addon">${item.prefix}</span>\n  ` : ""}<input class="custom-input"${placeholderAttr}${valueAttr}${disabledAttr} />
  ${item.suffix ? `<span class="custom-addon">${item.suffix}</span>` : ""}
</div>`
      : `<input class="custom-input"${placeholderAttr}${valueAttr}${disabledAttr} />`;

  const css = `.custom-input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  outline: none;
}

.custom-input-group {
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  overflow: hidden;
}

.custom-addon {
  background: #f3f4f6;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
}`;

  const tone = toneFromClass(item.inputClassName);
  const bootstrap =
    item.prefix || item.suffix
      ? `<div class="input-group">
  ${item.prefix ? `<span class="input-group-text">${item.prefix}</span>\n  ` : ""}<input type="text" class="form-control border-${tone}"${placeholderAttr}${valueAttr}${disabledAttr} />
  ${item.suffix ? `<span class="input-group-text">${item.suffix}</span>` : ""}
</div>`
      : `<input type="text" class="form-control border-${tone}"${placeholderAttr}${valueAttr}${disabledAttr} />`;

  return { tailwind, html, css, bootstrap };
};

const InputSamplesCodePopup = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<SelectedInput | null>(null);
  const [activeTab, setActiveTab] = useState<CodeTab>("tailwind");
  const [copiedTab, setCopiedTab] = useState<CodeTab | null>(null);

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  const snippets = useMemo(() => {
    if (!selected) return null;
    return buildSnippets(selected);
  }, [selected]);

  const copyCode = async () => {
    if (!snippets) return;
    try {
      await navigator.clipboard.writeText(snippets[activeTab]);
      setCopiedTab(activeTab);
      setTimeout(() => setCopiedTab(null), 1600);
    } catch {
      setCopiedTab(null);
    }
  };

  return (
    <div
      onClickCapture={(event) => {
        const target = event.target as HTMLElement;
        const sample = target.closest(".input-sample-item") as HTMLElement | null;
        if (!sample) return;

        const input = sample.querySelector("input");
        if (!input) return;

        event.preventDefault();
        const label =
          sample.querySelector("label")?.textContent?.trim() ||
          sample.querySelector("p")?.textContent?.trim() ||
          "Input";
        const spans = Array.from(sample.querySelectorAll("span"))
          .map((s) => s.textContent?.trim() || "")
          .filter(Boolean);

        setActiveTab("tailwind");
        setSelected({
          title: label,
          inputClassName: input.className,
          placeholder: input.getAttribute("placeholder") || "",
          value: (input as HTMLInputElement).value || "",
          disabled: input.hasAttribute("disabled"),
          prefix: spans[0] || "",
          suffix: spans[1] || "",
          leading: spans.length === 1 && spans[0] && input.className.includes("pl-9") ? spans[0] : "",
        });
      }}
    >
      {children}

      {selected && snippets && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-3xl rounded-lg bg-white shadow-xl dark:bg-boxdark"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stroke px-5 py-4 dark:border-strokedark">
              <h4 className="text-base font-semibold text-black dark:text-white">
                {selected.title} Code
              </h4>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded px-2 py-1 text-sm text-body hover:bg-gray dark:hover:bg-meta-4"
              >
                Close
              </button>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-stroke px-5 py-3 dark:border-strokedark">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-gray text-black dark:bg-meta-4 dark:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-3 p-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={copyCode}
                  className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-opacity-90"
                >
                  {copiedTab === activeTab
                    ? "Copied"
                    : `Copy ${tabs.find((tab) => tab.id === activeTab)?.label}`}
                </button>
              </div>
              <pre className="max-h-[420px] overflow-auto rounded-md border border-stroke bg-gray p-4 text-xs text-black dark:border-strokedark dark:bg-meta-4 dark:text-white">
                <code>{snippets[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputSamplesCodePopup;
