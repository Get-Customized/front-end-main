"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedSelect = {
  title: string;
  selectClass: string;
  options: string[];
  prefix: string;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const getTone = (className: string) => {
  if (className.includes("success")) return "success";
  if (className.includes("danger")) return "danger";
  if (className.includes("primary")) return "primary";
  return "secondary";
};

const buildSnippets = (sample: SelectedSelect): Record<CodeTab, string> => {
  const options = sample.options.length
    ? sample.options
    : ["Option 1", "Option 2", "Option 3"];
  const optionsMarkup = options.map((opt) => `  <option>${opt}</option>`).join("\n");

  const baseTailwind = `<select class="${sample.selectClass}">
${optionsMarkup}
</select>`;

  const tailwind = sample.prefix
    ? `<div class="flex overflow-hidden rounded-md border border-stroke">
  <span class="bg-gray px-3 py-2.5 text-sm text-body">${sample.prefix}</span>
  ${baseTailwind}
</div>`
    : baseTailwind;

  const html = sample.prefix
    ? `<div class="custom-select-group">
  <span class="custom-select-prefix">${sample.prefix}</span>
  <select class="custom-select">
${optionsMarkup}
  </select>
</div>`
    : `<select class="custom-select">
${optionsMarkup}
</select>`;

  const css = `.custom-select {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  background: #fff;
  outline: none;
}

.custom-select-group {
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  overflow: hidden;
}

.custom-select-prefix {
  background: #f3f4f6;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
}`;

  const tone = getTone(sample.selectClass);
  const bootstrap = sample.prefix
    ? `<div class="input-group">
  <span class="input-group-text">${sample.prefix}</span>
  <select class="form-select border-${tone}">
${optionsMarkup}
  </select>
</div>`
    : `<select class="form-select border-${tone}">
${optionsMarkup}
</select>`;

  return { tailwind, html, css, bootstrap };
};

const SelectSamplesCodePopup = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<SelectedSelect | null>(null);
  const [activeTab, setActiveTab] = useState<CodeTab>("tailwind");
  const [copiedTab, setCopiedTab] = useState<CodeTab | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [selected]);

  const snippets = useMemo(
    () => (selected ? buildSnippets(selected) : null),
    [selected],
  );

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
        const sample = target.closest(".select-sample-item") as HTMLElement | null;
        if (!sample) return;

        const selectEl = sample.querySelector("select");
        if (!selectEl) return;

        event.preventDefault();
        const title =
          sample.querySelector("label")?.textContent?.trim() ||
          sample.querySelector("p")?.textContent?.trim() ||
          "Select";
        const options = Array.from(selectEl.querySelectorAll("option"))
          .map((opt) => opt.textContent?.trim() || "")
          .filter(Boolean);
        const prefix =
          sample.querySelector("span")?.textContent?.trim() || "";

        setActiveTab("tailwind");
        setSelected({
          title,
          selectClass: selectEl.className,
          options,
          prefix,
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

export default SelectSamplesCodePopup;
