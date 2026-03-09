"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedProgress = {
  title: string;
  wrapperClass: string;
  progress: number;
  fillClass: string;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const parsePercent = (fillClass: string) => {
  const match = fillClass.match(/w-(\d+)\/(\d+)/);
  if (!match) return 50;
  const top = Number(match[1]);
  const bottom = Number(match[2]);
  if (!bottom) return 50;
  return Math.round((top / bottom) * 100);
};

const buildSnippets = (sample: SelectedProgress): Record<CodeTab, string> => {
  const percent = sample.progress || 50;
  const tailwind = `<div class="${sample.wrapperClass}">
  <p class="mb-2 text-sm font-medium">${sample.title}</p>
  <div class="h-2.5 rounded-full bg-gray">
    <div class="${sample.fillClass}" style="width: ${percent}%"></div>
  </div>
</div>`;

  const html = `<div class="custom-progress-wrap">
  <p class="custom-progress-title">${sample.title}</p>
  <div class="custom-progress-track">
    <div class="custom-progress-fill" style="width: ${percent}%"></div>
  </div>
</div>`;

  const css = `.custom-progress-wrap {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1rem;
}

.custom-progress-title {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
}

.custom-progress-track {
  height: 0.625rem;
  border-radius: 9999px;
  background: #e5e7eb;
}

.custom-progress-fill {
  height: 0.625rem;
  border-radius: 9999px;
  background: #3c50e0;
}`;

  const bootstrap = `<div class="border rounded p-3">
  <p class="mb-2 fw-semibold small">${sample.title}</p>
  <div class="progress" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: ${percent}%"></div>
  </div>
</div>`;

  return { tailwind, html, css, bootstrap };
};

const ProgressSamplesCodePopup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState<SelectedProgress | null>(null);
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
          ".progress-sample-item",
        ) as HTMLElement | null;
        if (!sample) return;

        const title =
          sample.querySelector("p")?.textContent?.trim() || "Progress Sample";
        const fill =
          sample.querySelector("div[class*='w-'] div") ||
          sample.querySelector("div[class*='rounded-full'] > div[class*='w-']") ||
          sample.querySelector("span[class*='bg-primary']");
        const fillClass = (fill as HTMLElement | null)?.className || "h-2.5 w-1/2 rounded-full bg-primary";

        event.preventDefault();
        setActiveTab("tailwind");
        setSelected({
          title,
          wrapperClass: sample.className,
          progress: parsePercent(fillClass),
          fillClass,
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

export default ProgressSamplesCodePopup;
