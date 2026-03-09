"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedHeading = {
  title: string;
  tag: string;
  className: string;
  wrapperClassName: string;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const getTagSize = (tag: string) => {
  if (tag === "h1") return "2rem";
  if (tag === "h2") return "1.5rem";
  if (tag === "h3") return "1.25rem";
  if (tag === "h4") return "1.125rem";
  if (tag === "h5") return "1rem";
  return "0.875rem";
};

const buildSnippets = (item: SelectedHeading): Record<CodeTab, string> => {
  const wrapper = item.wrapperClassName.trim();
  const headingTag = item.tag || "h2";
  const headingClass = item.className.trim();
  const size = getTagSize(headingTag);

  const tailwind = `<div class="${wrapper}">
  <${headingTag} class="${headingClass}">${item.title}</${headingTag}>
</div>`;

  const html = `<div class="heading-wrap">
  <${headingTag} class="heading-title">${item.title}</${headingTag}>
</div>`;

  const css = `.heading-wrap {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1rem;
}

.heading-title {
  margin: 0;
  font-size: ${size};
  font-weight: 700;
  color: #111827;
}`;

  const bootstrapDisplay =
    headingTag === "h1"
      ? "display-6"
      : headingTag === "h2"
      ? "h2"
      : headingTag === "h3"
      ? "h3"
      : "h4";
  const bootstrap = `<div class="border rounded p-3">
  <${headingTag} class="${bootstrapDisplay} mb-0">${item.title}</${headingTag}>
</div>`;

  return { tailwind, html, css, bootstrap };
};

const HeadingSamplesCodePopup = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<SelectedHeading | null>(null);
  const [activeTab, setActiveTab] = useState<CodeTab>("tailwind");
  const [copiedTab, setCopiedTab] = useState<CodeTab | null>(null);

  useEffect(() => {
    if (!selected) {
      return;
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  const snippets = useMemo(() => {
    if (!selected) {
      return null;
    }
    return buildSnippets(selected);
  }, [selected]);

  const copyCode = async () => {
    if (!snippets) {
      return;
    }
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
        const sample = target.closest(".heading-sample-item") as HTMLElement | null;
        if (!sample) {
          return;
        }

        const heading = sample.querySelector("h1,h2,h3,h4,h5,h6") as HTMLElement | null;
        if (!heading) {
          return;
        }

        event.preventDefault();
        setActiveTab("tailwind");
        setSelected({
          title: heading.textContent?.trim() || "Heading",
          tag: heading.tagName.toLowerCase(),
          className: heading.className,
          wrapperClassName: sample.className,
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

export default HeadingSamplesCodePopup;
