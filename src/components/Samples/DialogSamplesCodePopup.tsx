"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedDialog = {
  title: string;
  description: string;
  wrapperClass: string;
  actions: string[];
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const buildSnippets = (sample: SelectedDialog): Record<CodeTab, string> => {
  const desc = sample.description || "Dialog message goes here.";
  const actions = sample.actions.length ? sample.actions : ["Cancel", "Confirm"];
  const actionButtons = actions
    .map((action) => `<button class="rounded border px-3 py-1.5 text-xs">${action}</button>`)
    .join("\n      ");

  const tailwind = `<div class="${sample.wrapperClass}">
  <p class="font-medium">${sample.title}</p>
  <p class="mt-2 text-sm text-body">${desc}</p>
  <div class="mt-4 flex gap-2">
      ${actionButtons}
  </div>
</div>`;

  const html = `<div class="custom-dialog">
  <h5 class="custom-dialog-title">${sample.title}</h5>
  <p class="custom-dialog-body">${desc}</p>
  <div class="custom-dialog-actions">
    ${actions.map((action) => `<button>${action}</button>`).join("\n    ")}
  </div>
</div>`;

  const css = `.custom-dialog {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background: #fff;
}

.custom-dialog-title {
  margin: 0;
  font-weight: 600;
  color: #111827;
}

.custom-dialog-body {
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.custom-dialog-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}`;

  const bootstrap = `<div class="card border">
  <div class="card-body">
    <h6 class="card-title">${sample.title}</h6>
    <p class="card-text text-muted">${desc}</p>
    <div class="d-flex gap-2 mt-3">
      ${actions.map((action) => `<button class="btn btn-sm btn-outline-secondary">${action}</button>`).join("\n      ")}
    </div>
  </div>
</div>`;

  return { tailwind, html, css, bootstrap };
};

const DialogSamplesCodePopup = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<SelectedDialog | null>(null);
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

  const snippets = useMemo(() => (selected ? buildSnippets(selected) : null), [selected]);

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
        const sample = target.closest(".dialog-sample-item") as HTMLElement | null;
        if (!sample) return;

        event.preventDefault();
        const title =
          sample.querySelector("p.font-medium")?.textContent?.trim() ||
          sample.querySelector("p")?.textContent?.trim() ||
          "Dialog";
        const description =
          Array.from(sample.querySelectorAll("p"))
            .map((p) => p.textContent?.trim() || "")
            .find((text) => text && text !== title) || "";
        const actions = Array.from(sample.querySelectorAll("button"))
          .map((button) => button.textContent?.trim() || "")
          .filter(Boolean);

        setActiveTab("tailwind");
        setSelected({
          title,
          description,
          wrapperClass: sample.className,
          actions,
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

export default DialogSamplesCodePopup;
