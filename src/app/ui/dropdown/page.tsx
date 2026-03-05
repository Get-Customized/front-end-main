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
          {[
            "Priority Selector",
            "Team Switcher",
            "Language Menu",
            "Theme Picker",
            "Sort Menu",
            "Export Format",
            "Country Code",
            "Timezone Selector",
            "Notification Frequency",
            "Visibility Options",
          ].map((title, index) => (
            <div key={index} className="rounded-md border border-stroke p-4 dark:border-strokedark">
              <p className="mb-2 font-medium text-black dark:text-white">{title}</p>
              <div className="rounded-md border border-stroke px-3 py-2 text-sm text-body dark:border-strokedark">
                Choose option
              </div>
              <div className="mt-2 space-y-1 rounded-md bg-gray p-2 dark:bg-meta-4">
                <p className="rounded px-2 py-1 text-xs text-body">Option A</p>
                <p className="rounded px-2 py-1 text-xs text-body">Option B</p>
                <p className="rounded px-2 py-1 text-xs text-body">Option C</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DropdownPage;

