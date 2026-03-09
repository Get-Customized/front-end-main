"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedList = {
  title: string;
  wrapperClass: string;
  listTag: "ul" | "ol" | "div";
  listClass: string;
  items: string[];
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const buildSnippets = (sample: SelectedList): Record<CodeTab, string> => {
  const { title, wrapperClass, listTag, listClass, items } = sample;
  const safeItems = items.length ? items : ["Item 1", "Item 2", "Item 3"];
  const listMarkup =
    listTag === "div"
      ? safeItems.map((item) => `  <span>${item}</span>`).join("\n")
      : safeItems.map((item) => `  <li>${item}</li>`).join("\n");

  const tailwind = `<div class="${wrapperClass}">
  <p class="mb-2 font-medium">${title}</p>
  <${listTag} class="${listClass}">
${listMarkup}
  </${listTag}>
</div>`;

  const html =
    listTag === "ol"
      ? `<div class="custom-list-wrap">
  <p class="custom-list-title">${title}</p>
  <ol class="custom-list">
${safeItems.map((item) => `    <li>${item}</li>`).join("\n")}
  </ol>
</div>`
      : listTag === "ul"
      ? `<div class="custom-list-wrap">
  <p class="custom-list-title">${title}</p>
  <ul class="custom-list">
${safeItems.map((item) => `    <li>${item}</li>`).join("\n")}
  </ul>
</div>`
      : `<div class="custom-list-wrap">
  <p class="custom-list-title">${title}</p>
  <div class="custom-tags">
${safeItems.map((item) => `    <span class="custom-tag">${item}</span>`).join("\n")}
  </div>
</div>`;

  const css = `.custom-list-wrap {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1rem;
}

.custom-list-title {
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: #111827;
}

.custom-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #6b7280;
}

.custom-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.custom-tag {
  border-radius: 9999px;
  background: #f3f4f6;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}`;

  const bootstrap =
    listTag === "ol"
      ? `<div class="border rounded p-3">
  <h6 class="mb-2">${title}</h6>
  <ol class="mb-0">
${safeItems.map((item) => `    <li>${item}</li>`).join("\n")}
  </ol>
</div>`
      : listTag === "ul"
      ? `<div class="border rounded p-3">
  <h6 class="mb-2">${title}</h6>
  <ul class="mb-0">
${safeItems.map((item) => `    <li>${item}</li>`).join("\n")}
  </ul>
</div>`
      : `<div class="border rounded p-3">
  <h6 class="mb-2">${title}</h6>
  ${safeItems.map((item) => `<span class="badge text-bg-light me-1">${item}</span>`).join("\n  ")}
</div>`;

  return { tailwind, html, css, bootstrap };
};

const ListSamplesCodePopup = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<SelectedList | null>(null);
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
        const sample = target.closest(".list-sample-item") as HTMLElement | null;
        if (!sample) return;

        const title =
          sample.querySelector("p")?.textContent?.trim() ||
          "List Sample";

        const listEl =
          sample.querySelector("ul,ol") ||
          sample.querySelector("div.flex");

        if (!listEl) return;

        const tag = listEl.tagName.toLowerCase() as "ul" | "ol" | "div";
        const items =
          tag === "div"
            ? Array.from(listEl.querySelectorAll("span")).map((el) => el.textContent?.trim() || "").filter(Boolean)
            : Array.from(listEl.querySelectorAll("li")).map((el) => el.textContent?.trim() || "").filter(Boolean);

        event.preventDefault();
        setActiveTab("tailwind");
        setSelected({
          title,
          wrapperClass: sample.className,
          listTag: tag,
          listClass: (listEl as HTMLElement).className || "",
          items,
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

export default ListSamplesCodePopup;
