"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type SelectedSample = {
  title: string;
  text: string;
  className: string;
  hasIcon: boolean;
};

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const getColor = (className: string) => {
  if (className.includes("bg-primary") || className.includes("text-primary")) {
    return { name: "primary", hex: "#3c50e0" };
  }
  if (className.includes("bg-meta-3") || className.includes("text-meta-3")) {
    return { name: "success", hex: "#10b981" };
  }
  return { name: "dark", hex: "#111827" };
};

const buildSnippets = (sample: SelectedSample): Record<CodeTab, string> => {
  const { className, text, hasIcon } = sample;
  const color = getColor(className);
  const isOutline = className.includes("border") && className.includes("text-");
  const isPill = className.includes("rounded-full");
  const isRounded = className.includes("rounded-md");

  const tailwind = `<button class="${className}">
${hasIcon ? "  <svg width=\"16\" height=\"16\" viewBox=\"0 0 20 20\">...</svg>\n" : ""}  ${text}
</button>`;

  const htmlClass = `custom-btn ${isPill ? "custom-btn-pill" : isRounded ? "custom-btn-rounded" : ""} ${isOutline ? "custom-btn-outline" : "custom-btn-solid"} custom-btn-${color.name}`;
  const html = `<button class="${htmlClass.trim()}">
${hasIcon ? "  <span class=\"custom-btn-icon\">★</span>\n" : ""}  ${text}
</button>`;

  const css = `.custom-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
}

.custom-btn-rounded { border-radius: 0.375rem; }
.custom-btn-pill { border-radius: 9999px; }
.custom-btn-solid.custom-btn-${color.name} {
  background: ${color.hex};
  color: #fff;
}
.custom-btn-outline.custom-btn-${color.name} {
  background: transparent;
  color: ${color.hex};
  border-color: ${color.hex};
}`;

  const variant =
    isOutline && color.name === "primary"
      ? "outline-primary"
      : isOutline && color.name === "success"
      ? "outline-success"
      : isOutline
      ? "outline-dark"
      : color.name;
  const bootstrap = `<button class="btn btn-${variant}${isPill ? " rounded-pill" : ""}${hasIcon ? " d-inline-flex align-items-center gap-2" : ""}">
${hasIcon ? "  <span>★</span>\n" : ""}  ${text}
</button>`;

  return { tailwind, html, css, bootstrap };
};

const ButtonSamplesCodePopup = ({ children }: { children: React.ReactNode }) => {
  const [selectedSample, setSelectedSample] = useState<SelectedSample | null>(null);
  const [activeTab, setActiveTab] = useState<CodeTab>("tailwind");
  const [copiedTab, setCopiedTab] = useState<CodeTab | null>(null);

  useEffect(() => {
    if (!selectedSample) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSample(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedSample]);

  const snippets = useMemo(() => {
    if (!selectedSample) {
      return null;
    }
    return buildSnippets(selectedSample);
  }, [selectedSample]);

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
        const anchor = target.closest("a");
        if (!anchor) {
          return;
        }
        const title =
          anchor.closest(".mb-10")?.querySelector("h3")?.textContent?.trim() ||
          "Button Sample";
        const text = anchor.textContent?.replace(/\s+/g, " ").trim() || "Button";
        const className = anchor.className || "";
        const hasIcon = Boolean(anchor.querySelector("svg"));

        event.preventDefault();
        setActiveTab("tailwind");
        setSelectedSample({ title, text, className, hasIcon });
      }}
    >
      {children}

      {selectedSample && snippets && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={() => setSelectedSample(null)}
        >
          <div
            className="w-full max-w-3xl rounded-lg bg-white shadow-xl dark:bg-boxdark"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stroke px-5 py-4 dark:border-strokedark">
              <h4 className="text-base font-semibold text-black dark:text-white">
                {selectedSample.title} Code
              </h4>
              <button
                type="button"
                onClick={() => setSelectedSample(null)}
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

export default ButtonSamplesCodePopup;
