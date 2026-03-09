"use client";

import { useEffect, useMemo, useState } from "react";

type CodeTab = "tailwind" | "html" | "css" | "bootstrap";

type TextareaSample = {
  id: string;
  title: string;
  preview: JSX.Element;
  code: Record<CodeTab, string>;
};

const samples: TextareaSample[] = [
  {
    id: "outlined",
    title: "Outlined",
    preview: (
      <textarea
        rows={4}
        placeholder="Write your message..."
        className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"
      ></textarea>
    ),
    code: {
      tailwind: `<textarea rows="4" placeholder="Write your message..." class="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"></textarea>`,
      html: `<textarea class="textarea-outlined" rows="4" placeholder="Write your message..."></textarea>`,
      css: `.textarea-outlined {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background: transparent;
}`,
      bootstrap: `<div class="mb-3">
  <label class="form-label">Outlined</label>
  <textarea class="form-control" rows="4" placeholder="Write your message..."></textarea>
</div>`,
    },
  },
  {
    id: "soft-filled",
    title: "Soft Filled",
    preview: (
      <textarea
        rows={4}
        placeholder="Share feedback..."
        className="w-full rounded-md border border-transparent bg-gray px-4 py-3 text-sm text-black outline-none dark:bg-meta-4 dark:text-white"
      ></textarea>
    ),
    code: {
      tailwind: `<textarea rows="4" placeholder="Share feedback..." class="w-full rounded-md border border-transparent bg-gray px-4 py-3 text-sm text-black outline-none dark:bg-meta-4 dark:text-white"></textarea>`,
      html: `<textarea class="textarea-soft" rows="4" placeholder="Share feedback..."></textarea>`,
      css: `.textarea-soft {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background: #f3f4f6;
}`,
      bootstrap: `<div class="mb-3">
  <label class="form-label">Soft Filled</label>
  <textarea class="form-control bg-light border-0" rows="4" placeholder="Share feedback..."></textarea>
</div>`,
    },
  },
  {
    id: "underline",
    title: "Underline",
    preview: (
      <textarea
        rows={4}
        placeholder="Short notes..."
        className="w-full border-b-2 border-stroke bg-transparent px-1 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"
      ></textarea>
    ),
    code: {
      tailwind: `<textarea rows="4" placeholder="Short notes..." class="w-full border-b-2 border-stroke bg-transparent px-1 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"></textarea>`,
      html: `<textarea class="textarea-underline" rows="4" placeholder="Short notes..."></textarea>`,
      css: `.textarea-underline {
  width: 100%;
  border: none;
  border-bottom: 2px solid #d1d5db;
  padding: 0.75rem 0.25rem;
  font-size: 0.875rem;
  background: transparent;
  outline: none;
}`,
      bootstrap: `<div class="mb-3">
  <label class="form-label">Underline</label>
  <textarea class="form-control border-0 border-bottom rounded-0" rows="4" placeholder="Short notes..."></textarea>
</div>`,
    },
  },
  {
    id: "rounded-xl",
    title: "Rounded XL",
    preview: (
      <textarea
        rows={4}
        placeholder="Customer story..."
        className="w-full rounded-2xl border border-stroke bg-transparent px-4 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"
      ></textarea>
    ),
    code: {
      tailwind: `<textarea rows="4" placeholder="Customer story..." class="w-full rounded-2xl border border-stroke bg-transparent px-4 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"></textarea>`,
      html: `<textarea class="textarea-rounded-xl" rows="4" placeholder="Customer story..."></textarea>`,
      css: `.textarea-rounded-xl {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background: transparent;
}`,
      bootstrap: `<div class="mb-3">
  <label class="form-label">Rounded XL</label>
  <textarea class="form-control rounded-4" rows="4" placeholder="Customer story..."></textarea>
</div>`,
    },
  },
  {
    id: "gradient-frame",
    title: "Gradient Frame",
    preview: (
      <div className="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]">
        <textarea
          rows={4}
          placeholder="Roadmap summary..."
          className="w-full rounded-md bg-white px-4 py-3 text-sm text-black outline-none dark:bg-boxdark dark:text-white"
        ></textarea>
      </div>
    ),
    code: {
      tailwind: `<div class="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]">
  <textarea rows="4" placeholder="Roadmap summary..." class="w-full rounded-md bg-white px-4 py-3 text-sm text-black outline-none dark:bg-boxdark dark:text-white"></textarea>
</div>`,
      html: `<div class="textarea-gradient-wrap">
  <textarea class="textarea-gradient" rows="4" placeholder="Roadmap summary..."></textarea>
</div>`,
      css: `.textarea-gradient-wrap {
  padding: 1px;
  border-radius: 0.375rem;
  background: linear-gradient(90deg, #3c50e0, #10b981);
}

.textarea-gradient {
  width: 100%;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background: #ffffff;
}`,
      bootstrap: `<div class="p-1 rounded" style="background: linear-gradient(90deg, #0d6efd, #198754);">
  <textarea class="form-control border-0" rows="4" placeholder="Roadmap summary..."></textarea>
</div>`,
    },
  },
  {
    id: "success-state",
    title: "Success State",
    preview: (
      <textarea
        rows={4}
        defaultValue="Looks good. Ready to publish."
        className="w-full rounded-md border border-success bg-success bg-opacity-5 px-4 py-3 text-sm text-black outline-none dark:text-white"
      ></textarea>
    ),
    code: {
      tailwind: `<textarea rows="4" class="w-full rounded-md border border-success bg-success bg-opacity-5 px-4 py-3 text-sm text-black outline-none dark:text-white">Looks good. Ready to publish.</textarea>`,
      html: `<textarea class="textarea-success" rows="4">Looks good. Ready to publish.</textarea>`,
      css: `.textarea-success {
  width: 100%;
  border: 1px solid #22c55e;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background: rgba(34, 197, 94, 0.08);
}`,
      bootstrap: `<div class="mb-3">
  <label class="form-label text-success">Success State</label>
  <textarea class="form-control border-success bg-success-subtle" rows="4">Looks good. Ready to publish.</textarea>
</div>`,
    },
  },
];

const tabs: { id: CodeTab; label: string }[] = [
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "bootstrap", label: "Bootstrap" },
];

const TextareaSampleGallery = () => {
  const [selectedSample, setSelectedSample] = useState<TextareaSample | null>(null);
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
            <p className="mb-2 text-sm font-medium text-black dark:text-white">
              {sample.title}
            </p>
            {sample.preview}
            <p className="mt-2 text-xs text-body">Click to view/copy code</p>
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

export default TextareaSampleGallery;
