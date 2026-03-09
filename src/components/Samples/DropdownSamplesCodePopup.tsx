"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedDropdown = {
  title: string;
  wrapperClass: string;
  triggerText: string;
  items: string[];
  triggerClass: string;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const buildSnippets = (sample: SelectedDropdown): Record<CodeTab, string> => {
  const items = sample.items.length ? sample.items : ["Option One", "Option Two"];
  const itemLines = items.map((item) => `    <p class="px-2 py-1 text-xs text-body">${item}</p>`).join("\n");

  const tailwind = `<div class="${sample.wrapperClass}">
  <p class="mb-2 font-medium">${sample.title}</p>
  <button class="${sample.triggerClass}">${sample.triggerText || "Select option"}</button>
  <div class="mt-2 rounded-md bg-gray p-2">
${itemLines}
  </div>
</div>`;

  const html = `<div class="custom-dropdown">
  <p class="custom-dropdown-title">${sample.title}</p>
  <button class="custom-dropdown-trigger">${sample.triggerText || "Select option"}</button>
  <div class="custom-dropdown-menu">
${items.map((item) => `    <p>${item}</p>`).join("\n")}
  </div>
</div>`;

  const css = `.custom-dropdown {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.custom-dropdown-title {
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: #111827;
}

.custom-dropdown-trigger {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  text-align: left;
  background: #fff;
}

.custom-dropdown-menu {
  margin-top: 0.5rem;
  border-radius: 0.375rem;
  background: #f3f4f6;
  padding: 0.5rem;
}`;

  const bootstrap = `<div class="border rounded p-3">
  <p class="fw-semibold mb-2">${sample.title}</p>
  <button class="btn btn-outline-secondary btn-sm w-100 text-start">${sample.triggerText || "Select option"}</button>
  <div class="mt-2 border rounded p-2 bg-light">
${items.map((item) => `    <p class="small mb-1">${item}</p>`).join("\n")}
  </div>
</div>`;

  return { tailwind, html, css, bootstrap };
};

const DropdownSamplesCodePopup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState<SelectedDropdown | null>(null);
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
        const sample = target.closest(
          ".dropdown-sample-item",
        ) as HTMLElement | null;
        if (!sample) return;

        event.preventDefault();
        const title =
          sample.querySelector("p.font-medium")?.textContent?.trim() ||
          sample.querySelector("p")?.textContent?.trim() ||
          "Dropdown";
        const trigger = sample.querySelector("button");
        const triggerText = trigger?.textContent?.replace(/\s+/g, " ").trim() || "Select option";
        const triggerClass = trigger?.className || "w-full rounded-md border border-stroke px-3 py-2 text-left text-sm text-body";
        const items = Array.from(sample.querySelectorAll("p"))
          .map((p) => p.textContent?.replace(/\s+/g, " ").trim() || "")
          .filter((text) => text && text !== title);

        setActiveTab("tailwind");
        setSelected({
          title,
          wrapperClass: sample.className,
          triggerText,
          items,
          triggerClass,
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

export default DropdownSamplesCodePopup;
