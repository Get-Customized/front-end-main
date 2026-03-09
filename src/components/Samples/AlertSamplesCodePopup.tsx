"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedAlert = {
  title: string;
  body: string;
  className: string;
  hasIcon: boolean;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const detectTone = (className: string) => {
  if (
    className.includes("success") ||
    className.includes("meta-3") ||
    className.includes("#34D399")
  ) {
    return { tone: "success", border: "#10b981" };
  }
  if (
    className.includes("danger") ||
    className.includes("#F87171") ||
    className.includes("error")
  ) {
    return { tone: "danger", border: "#ef4444" };
  }
  if (className.includes("warning")) {
    return { tone: "warning", border: "#f59e0b" };
  }
  if (className.includes("bg-black")) {
    return { tone: "dark", border: "#111827" };
  }
  return { tone: "primary", border: "#3c50e0" };
};

const buildSnippets = (alert: SelectedAlert): Record<CodeTab, string> => {
  const tone = detectTone(alert.className);
  const title = alert.title || "Alert Title";
  const body = alert.body || "Alert message text.";

  const tailwind = `<div class="${alert.className}">
  ${
    alert.hasIcon
      ? "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">...</svg>\n  "
      : ""
  }<div>
    <h5>${title}</h5>
    <p>${body}</p>
  </div>
</div>`;

  const html = `<div class="custom-alert custom-alert-${tone.tone}">
  <h5 class="custom-alert-title">${title}</h5>
  <p class="custom-alert-body">${body}</p>
</div>`;

  const css = `.custom-alert {
  border-left: 6px solid ${tone.border};
  border-radius: 0.375rem;
  padding: 1rem 1.25rem;
}

.custom-alert-${tone.tone} {
  background: ${tone.tone === "dark" ? "#111827" : "rgba(59,130,246,0.12)"};
  color: ${tone.tone === "dark" ? "#ffffff" : "#111827"};
}

.custom-alert-title {
  margin: 0 0 0.375rem;
  font-size: 1rem;
  font-weight: 600;
}

.custom-alert-body {
  margin: 0;
  line-height: 1.5;
  font-size: 0.875rem;
}`;

  const bootstrap = `<div class="alert alert-${tone.tone}" role="alert">
  <h5 class="alert-heading">${title}</h5>
  <p class="mb-0">${body}</p>
</div>`;

  return { tailwind, html, css, bootstrap };
};

const AlertSamplesCodePopup = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<SelectedAlert | null>(null);
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
        const sample = target.closest(".alert-sample-item") as HTMLElement | null;
        if (!sample) {
          return;
        }

        event.preventDefault();
        const titleNode =
          sample.querySelector("h5") || sample.querySelector("p.font-medium");
        const paragraphs = Array.from(sample.querySelectorAll("p"));
        const title = titleNode?.textContent?.trim() || "Alert";
        const body =
          paragraphs
            .map((p) => p.textContent?.trim() || "")
            .find((text) => text && text !== title) || "";
        const hasIcon = Boolean(sample.querySelector("svg"));

        setActiveTab("tailwind");
        setSelected({
          title,
          body,
          className: sample.className,
          hasIcon,
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

export default AlertSamplesCodePopup;
