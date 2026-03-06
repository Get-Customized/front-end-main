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
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark">
            <p className="font-medium text-black dark:text-white">Centered Confirm</p>
            <p className="mt-2 text-sm text-body">Archive this project now?</p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="rounded bg-primary px-3 py-1.5 text-xs font-medium text-white">Confirm</button>
              <button className="rounded border border-stroke px-3 py-1.5 text-xs font-medium text-black dark:border-strokedark dark:text-white">Cancel</button>
            </div>
          </div>
          <div className="rounded-md border border-success bg-success bg-opacity-10 p-4">
            <p className="font-medium text-black dark:text-white">Success Dialog</p>
            <p className="mt-2 text-sm text-body">Transfer completed successfully.</p>
            <button className="mt-4 rounded bg-success px-3 py-1.5 text-xs font-medium text-white">Done</button>
          </div>
          <div className="rounded-md border border-danger bg-danger bg-opacity-10 p-4">
            <p className="font-medium text-black dark:text-white">Danger Confirm</p>
            <p className="mt-2 text-sm text-body">Delete this workspace permanently?</p>
            <div className="mt-4 flex gap-2">
              <button className="rounded bg-danger px-3 py-1.5 text-xs font-medium text-white">Delete</button>
              <button className="rounded border border-danger px-3 py-1.5 text-xs font-medium text-danger">Keep</button>
            </div>
          </div>
          <div className="rounded-md border-l-4 border-primary bg-primary bg-opacity-10 p-4">
            <p className="font-medium text-black dark:text-white">Info Banner Dialog</p>
            <p className="mt-2 text-sm text-body">Maintenance starts in 30 minutes.</p>
          </div>
          <div className="rounded-2xl border border-stroke p-4 dark:border-strokedark">
            <p className="font-medium text-black dark:text-white">Rounded Modal</p>
            <p className="mt-2 text-sm text-body">Invite 5 members to your board.</p>
            <button className="mt-4 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-white">Invite</button>
          </div>
          <div className="rounded-md border border-dashed border-meta-3 p-4">
            <p className="font-medium text-black dark:text-white">Dashed Draft Dialog</p>
            <p className="mt-2 text-sm text-body">Save this draft before closing?</p>
            <div className="mt-4 flex gap-2">
              <button className="rounded border border-meta-3 px-3 py-1.5 text-xs font-medium text-body">Save Draft</button>
            </div>
          </div>
          <div className="rounded-md border border-stroke p-4 shadow dark:border-strokedark">
            <p className="font-medium text-black dark:text-white">Shadow Prompt</p>
            <p className="mt-2 text-sm text-body">Restart session to apply changes.</p>
            <button className="mt-4 rounded bg-black px-3 py-1.5 text-xs font-medium text-white">Restart</button>
          </div>
          <div className="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]">
            <div className="rounded-md bg-white p-4 dark:bg-boxdark">
              <p className="font-medium text-black dark:text-white">Gradient Framed</p>
              <p className="mt-2 text-sm text-body">Enable beta access for this user.</p>
              <button className="mt-4 rounded bg-primary px-3 py-1.5 text-xs font-medium text-white">Enable</button>
            </div>
          </div>
          <div className="rounded-md border border-warning bg-warning bg-opacity-10 p-4">
            <p className="font-medium text-black dark:text-white">Warning Dialog</p>
            <p className="mt-2 text-sm text-body">This action may take several minutes.</p>
            <button className="mt-4 rounded bg-warning px-3 py-1.5 text-xs font-medium text-white">Continue</button>
          </div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark">
            <p className="font-medium text-black dark:text-white">Minimal Prompt</p>
            <p className="mt-2 text-sm text-body">Accept updated terms and conditions.</p>
            <div className="mt-4 flex gap-2">
              <button className="rounded border border-stroke px-3 py-1.5 text-xs font-medium text-black dark:border-strokedark dark:text-white">Decline</button>
              <button className="rounded bg-primary px-3 py-1.5 text-xs font-medium text-white">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DialogPage;

