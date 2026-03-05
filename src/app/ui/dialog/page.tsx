import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DialogPlayground from "@/components/Playgrounds/DialogPlayground";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const DialogPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dialog" />
      <DialogPlayground mode={mode} />

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Dialog Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div className="rounded-md border border-stroke p-5 dark:border-strokedark">
            <p className="mb-3 font-medium text-black dark:text-white">
              Confirmation Dialog
            </p>
            <div className="rounded-md bg-gray p-4 dark:bg-meta-4">
              <p className="text-sm text-body">
                Are you sure you want to delete this item?
              </p>
              <div className="mt-4 flex gap-3">
                <button className="rounded bg-danger px-4 py-2 text-sm font-medium text-white">
                  Delete
                </button>
                <button className="rounded border border-stroke px-4 py-2 text-sm font-medium text-black dark:border-strokedark dark:text-white">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-stroke p-5 dark:border-strokedark">
            <p className="mb-3 font-medium text-black dark:text-white">
              Info Dialog
            </p>
            <div className="rounded-md border-l-4 border-primary bg-primary bg-opacity-10 p-4">
              <p className="text-sm text-body">
                Your changes have been saved successfully.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Dialog Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          {[
            "Delete Account",
            "Archive Project",
            "Session Timeout",
            "Unsaved Changes",
            "Reset Filters",
            "Publish Post",
            "Transfer Ownership",
            "Download Ready",
            "Enable 2FA",
            "Leave Workspace",
          ].map((title, index) => (
            <div key={index} className="rounded-md border border-stroke p-4 dark:border-strokedark">
              <p className="font-medium text-black dark:text-white">{title}</p>
              <p className="mt-2 text-sm text-body">
                Confirm this action before continuing.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="rounded bg-primary px-3 py-1.5 text-xs font-medium text-white">
                  Confirm
                </button>
                <button className="rounded border border-stroke px-3 py-1.5 text-xs font-medium text-black dark:border-strokedark dark:text-white">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DialogPage;

