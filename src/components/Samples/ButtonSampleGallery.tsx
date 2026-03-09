"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type ButtonSample = {
  id: string;
  title: string;
  className: string;
  label: string;
  code: Record<CodeTab, string>;
};

const samples: ButtonSample[] = [
  {
    id: "primary-solid",
    title: "Primary Solid",
    label: "Button",
    className:
      "inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-opacity-90",
    code: {
      tailwind: `<button class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-opacity-90">
  Button
</button>`,
      html: `<button class="btn-primary-solid">Button</button>`,
      css: `.btn-primary-solid {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  background: #3c50e0;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}`,
      bootstrap: `<button class="btn btn-primary">
  Button
</button>`,
    },
  },
  {
    id: "primary-outline",
    title: "Primary Outline",
    label: "Button",
    className:
      "inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:bg-opacity-10",
    code: {
      tailwind: `<button class="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:bg-opacity-10">
  Button
</button>`,
      html: `<button class="btn-primary-outline">Button</button>`,
      css: `.btn-primary-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3c50e0;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #3c50e0;
  font-weight: 500;
  cursor: pointer;
}`,
      bootstrap: `<button class="btn btn-outline-primary">
  Button
</button>`,
    },
  },
  {
    id: "success-pill",
    title: "Success Pill",
    label: "Save",
    className:
      "inline-flex items-center justify-center rounded-full bg-meta-3 px-7 py-3 text-sm font-medium text-white hover:bg-opacity-90",
    code: {
      tailwind: `<button class="inline-flex items-center justify-center rounded-full bg-meta-3 px-7 py-3 text-sm font-medium text-white hover:bg-opacity-90">
  Save
</button>`,
      html: `<button class="btn-success-pill">Save</button>`,
      css: `.btn-success-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 1.75rem;
  background: #10b981;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}`,
      bootstrap: `<button class="btn btn-success rounded-pill px-4">
  Save
</button>`,
    },
  },
  {
    id: "dark-icon",
    title: "Dark With Icon",
    label: "Download",
    className:
      "inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-opacity-90",
    code: {
      tailwind: `<button class="inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-opacity-90">
  <span>⬇</span>
  Download
</button>`,
      html: `<button class="btn-dark-icon">
  <span>⬇</span>
  Download
</button>`,
      css: `.btn-dark-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  background: #111827;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}`,
      bootstrap: `<button class="btn btn-dark d-inline-flex align-items-center gap-2">
  <span>⬇</span>
  Download
</button>`,
    },
  },
  {
    id: "full-width",
    title: "Full Width CTA",
    label: "Get Started",
    className:
      "inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-opacity-90",
    code: {
      tailwind: `<button class="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-opacity-90">
  Get Started
</button>`,
      html: `<button class="btn-full-width">Get Started</button>`,
      css: `.btn-full-width {
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  background: #3c50e0;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}`,
      bootstrap: `<button class="btn btn-primary w-100">
  Get Started
</button>`,
    },
  },
  {
    id: "danger-soft",
    title: "Danger Soft",
    label: "Delete",
    className:
      "inline-flex items-center justify-center rounded-md border border-danger bg-danger bg-opacity-10 px-6 py-3 text-sm font-medium text-danger hover:bg-opacity-20",
    code: {
      tailwind: `<button class="inline-flex items-center justify-center rounded-md border border-danger bg-danger bg-opacity-10 px-6 py-3 text-sm font-medium text-danger hover:bg-opacity-20">
  Delete
</button>`,
      html: `<button class="btn-danger-soft">Delete</button>`,
      css: `.btn-danger-soft {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dc3545;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  background: rgba(220, 53, 69, 0.12);
  color: #dc3545;
  font-weight: 500;
  cursor: pointer;
}`,
      bootstrap: `<button class="btn btn-outline-danger">
  Delete
</button>`,
    },
  },
];

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const ButtonSampleGallery = () => {
  const [selectedSample, setSelectedSample] = useState<ButtonSample | null>(null);
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

  const activeCode = useMemo(() => {
    if (!selectedSample) {
      return "";
    }

    return selectedSample.code[activeTab];
  }, [activeTab, selectedSample]);

  const copyCode = async () => {
    if (!selectedSample) {
      return;
    }

    try {
      await navigator.clipboard.writeText(selectedSample.code[activeTab]);
      setCopiedTab(activeTab);
      setTimeout(() => setCopiedTab(null), 1800);
    } catch {
      setCopiedTab(null);
    }
  };

  return (
    <>
      <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
        {samples.map((sample) => (
          <button
            key={sample.id}
            type="button"
            onClick={() => {
              setActiveTab("tailwind");
              setSelectedSample(sample);
            }}
            className="rounded-md border border-stroke p-4 text-left transition hover:border-primary hover:shadow-md dark:border-strokedark"
          >
            <p className="mb-3 text-sm font-medium text-black dark:text-white">
              {sample.title}
            </p>
            <div className="flex min-h-[56px] items-center">
              <button type="button" className={sample.className}>
                {sample.label}
              </button>
            </div>
            <p className="mt-3 text-xs text-body">Click to view/copy code</p>
          </button>
        ))}
      </div>

      {selectedSample && (
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
                  {copiedTab === activeTab ? "Copied" : `Copy ${tabs.find((tab) => tab.id === activeTab)?.label}`}
                </button>
              </div>

              <pre className="max-h-[420px] overflow-auto rounded-md border border-stroke bg-gray p-4 text-xs text-black dark:border-strokedark dark:bg-meta-4 dark:text-white">
                <code>{activeCode}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonSampleGallery;
