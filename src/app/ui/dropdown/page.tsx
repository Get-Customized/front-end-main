import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DropdownPlayground from "@/components/Playgrounds/DropdownPlayground";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const DropdownPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dropdown" />
      <DropdownPlayground mode={mode} />

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Dropdown Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Basic Dropdown
            </p>
            <div className="max-w-sm rounded-md border border-stroke p-4 dark:border-strokedark">
              <button className="w-full rounded-md border border-stroke px-4 py-2 text-left text-sm text-black dark:border-strokedark dark:text-white">
                Select option
              </button>
              <div className="mt-3 rounded-md border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                <p className="px-4 py-2 text-sm text-body">Option One</p>
                <p className="px-4 py-2 text-sm text-body">Option Two</p>
                <p className="px-4 py-2 text-sm text-body">Option Three</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Action Menu
            </p>
            <div className="max-w-sm rounded-md border border-stroke p-4 dark:border-strokedark">
              <div className="rounded-md border border-stroke bg-gray dark:border-strokedark dark:bg-meta-4">
                <p className="px-4 py-2 text-sm text-body">Edit</p>
                <p className="px-4 py-2 text-sm text-body">Duplicate</p>
                <p className="px-4 py-2 text-sm text-danger">Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Dropdown Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark">
            <p className="mb-2 font-medium text-black dark:text-white">Default Menu</p>
            <button className="w-full rounded-md border border-stroke px-3 py-2 text-left text-sm text-body dark:border-strokedark">Actions</button>
            <div className="mt-2 rounded-md bg-gray p-2 dark:bg-meta-4">
              <p className="px-2 py-1 text-xs text-body">Edit</p>
              <p className="px-2 py-1 text-xs text-body">Duplicate</p>
            </div>
          </div>
          <div className="rounded-md border border-primary bg-primary bg-opacity-10 p-4">
            <p className="mb-2 font-medium text-black dark:text-white">Soft Primary</p>
            <button className="w-full rounded-md border border-primary bg-white px-3 py-2 text-left text-sm text-body">Select team</button>
            <div className="mt-2 rounded-md bg-white p-2">
              <p className="px-2 py-1 text-xs text-body">Product</p>
              <p className="px-2 py-1 text-xs text-body">Marketing</p>
            </div>
          </div>
          <div className="rounded-md border border-meta-3 p-4">
            <p className="mb-2 font-medium text-black dark:text-white">Outlined Accent</p>
            <button className="w-full rounded-full border border-meta-3 px-3 py-2 text-left text-sm text-body">Choose language</button>
            <div className="mt-2 rounded-md border border-dashed border-meta-3 p-2">
              <p className="px-2 py-1 text-xs text-body">English</p>
              <p className="px-2 py-1 text-xs text-body">Spanish</p>
            </div>
          </div>
          <div className="rounded-md border border-stroke p-4 shadow-sm dark:border-strokedark">
            <p className="mb-2 font-medium text-black dark:text-white">Shadow Menu</p>
            <button className="w-full rounded-md bg-white px-3 py-2 text-left text-sm text-body shadow dark:bg-boxdark">Export</button>
            <div className="mt-2 rounded-md bg-white p-2 shadow dark:bg-boxdark">
              <p className="px-2 py-1 text-xs text-body">PDF</p>
              <p className="px-2 py-1 text-xs text-body">CSV</p>
            </div>
          </div>
          <div className="rounded-md border border-success bg-success bg-opacity-10 p-4">
            <p className="mb-2 font-medium text-black dark:text-white">Success State</p>
            <button className="w-full rounded-md border border-success px-3 py-2 text-left text-sm text-body">Status</button>
            <div className="mt-2 rounded-md bg-white p-2">
              <p className="px-2 py-1 text-xs text-body">Active</p>
              <p className="px-2 py-1 text-xs text-body">Completed</p>
            </div>
          </div>
          <div className="rounded-md border border-danger bg-danger bg-opacity-10 p-4">
            <p className="mb-2 font-medium text-black dark:text-white">Danger Menu</p>
            <button className="w-full rounded-md border border-danger px-3 py-2 text-left text-sm text-danger">Delete options</button>
            <div className="mt-2 rounded-md bg-white p-2">
              <p className="px-2 py-1 text-xs text-danger">Delete one</p>
              <p className="px-2 py-1 text-xs text-danger">Delete all</p>
            </div>
          </div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark">
            <p className="mb-2 font-medium text-black dark:text-white">With Header</p>
            <div className="rounded-md border border-stroke dark:border-strokedark">
              <p className="border-b border-stroke px-3 py-1.5 text-xs text-body dark:border-strokedark">Project</p>
              <p className="px-3 py-1.5 text-xs text-body">Overview</p>
              <p className="px-3 py-1.5 text-xs text-body">Analytics</p>
            </div>
          </div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark">
            <p className="mb-2 font-medium text-black dark:text-white">Icon Style</p>
            <button className="flex w-full items-center justify-between rounded-md border border-stroke px-3 py-2 text-sm text-body dark:border-strokedark">
              Options <span>▼</span>
            </button>
            <div className="mt-2 rounded-md bg-gray p-2 dark:bg-meta-4">
              <p className="px-2 py-1 text-xs text-body">★ Featured</p>
              <p className="px-2 py-1 text-xs text-body">✓ Approved</p>
            </div>
          </div>
          <div className="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]">
            <div className="rounded-md bg-white p-4 dark:bg-boxdark">
              <p className="mb-2 font-medium text-black dark:text-white">Gradient Frame</p>
              <button className="w-full rounded-md border border-stroke px-3 py-2 text-left text-sm text-body dark:border-strokedark">Theme</button>
              <div className="mt-2 rounded-md bg-gray p-2 dark:bg-meta-4">
                <p className="px-2 py-1 text-xs text-body">Ocean</p>
                <p className="px-2 py-1 text-xs text-body">Sunset</p>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-dashed border-meta-3 p-4">
            <p className="mb-2 font-medium text-black dark:text-white">Dashed Panel</p>
            <button className="w-full rounded-md border border-dashed border-meta-3 px-3 py-2 text-left text-sm text-body">Import Source</button>
            <div className="mt-2 rounded-md border border-dashed border-meta-3 p-2">
              <p className="px-2 py-1 text-xs text-body">GitHub</p>
              <p className="px-2 py-1 text-xs text-body">CSV File</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DropdownPage;

