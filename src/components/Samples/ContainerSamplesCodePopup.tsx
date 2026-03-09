"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedContainer = {
  title: string;
  wrapperClass: string;
  description: string;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const buildSnippets = (sample: SelectedContainer): Record<CodeTab, string> => {
  const description = sample.description || "Container content goes here.";

  const tailwind = `<div class="${sample.wrapperClass}">
  <p class="font-medium">${sample.title}</p>
  <p class="mt-2 text-sm text-body">${description}</p>
</div>`;

  const html = `<div class="custom-container">
  <p class="custom-container-title">${sample.title}</p>
  <p class="custom-container-text">${description}</p>
</div>`;

  const css = `.custom-container {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1rem 1.25rem;
  background: #ffffff;
}

.custom-container-title {
  margin: 0;
  font-weight: 600;
  color: #111827;
}

.custom-container-text {
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}`;

  const bootstrap = `<div class="border rounded p-3">
  <h6 class="mb-2">${sample.title}</h6>
  <p class="mb-0 text-muted">${description}</p>
</div>`;

  return { tailwind, html, css, bootstrap };
};

const ContainerSamplesCodePopup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState<SelectedContainer | null>(null);
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
          ".container-sample-item",
        ) as HTMLElement | null;
        if (!sample) return;

        event.preventDefault();
        const title = sample.querySelector("p")?.textContent?.trim() || "Container";
        const paragraphs = Array.from(sample.querySelectorAll("p"));
        const description =
          paragraphs
            .map((p) => p.textContent?.trim() || "")
            .find((text) => text && text !== title) || "";

        setActiveTab("tailwind");
        setSelected({
          title,
          wrapperClass: sample.className,
          description,
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

export default ContainerSamplesCodePopup;
