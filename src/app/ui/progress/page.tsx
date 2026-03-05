import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ProgressPlayground from "@/components/Playgrounds/ProgressPlayground";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const ProgressPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Progress" />
      <ProgressPlayground mode={mode} />

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Progress Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Linear Progress
            </p>
            <div className="h-3 w-full rounded-full bg-gray dark:bg-meta-4">
              <div className="h-3 w-2/3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Multi-State Progress
            </p>
            <div className="space-y-3">
              <div className="h-2 w-full rounded-full bg-gray dark:bg-meta-4">
                <div className="h-2 w-1/4 rounded-full bg-meta-5"></div>
              </div>
              <div className="h-2 w-full rounded-full bg-gray dark:bg-meta-4">
                <div className="h-2 w-1/2 rounded-full bg-warning"></div>
              </div>
              <div className="h-2 w-full rounded-full bg-gray dark:bg-meta-4">
                <div className="h-2 w-3/4 rounded-full bg-success"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Progress Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 text-sm font-medium text-black dark:text-white">Primary Bar</p><div className="h-2.5 rounded-full bg-gray dark:bg-meta-4"><div className="h-2.5 w-2/3 rounded-full bg-primary"></div></div></div>
          <div className="rounded-md border border-success p-4"><p className="mb-2 text-sm font-medium text-black dark:text-white">Success Bar</p><div className="h-2.5 rounded-full bg-success bg-opacity-20"><div className="h-2.5 w-3/4 rounded-full bg-success"></div></div></div>
          <div className="rounded-md border border-warning p-4"><p className="mb-2 text-sm font-medium text-black dark:text-white">Warning Bar</p><div className="h-2.5 rounded-full bg-warning bg-opacity-20"><div className="h-2.5 w-1/2 rounded-full bg-warning"></div></div></div>
          <div className="rounded-md border border-danger p-4"><p className="mb-2 text-sm font-medium text-black dark:text-white">Danger Bar</p><div className="h-2.5 rounded-full bg-danger bg-opacity-20"><div className="h-2.5 w-1/3 rounded-full bg-danger"></div></div></div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 text-sm font-medium text-black dark:text-white">Pill Progress</p><div className="h-3 rounded-full bg-gray p-0.5 dark:bg-meta-4"><div className="h-full w-4/5 rounded-full bg-meta-3"></div></div></div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 text-sm font-medium text-black dark:text-white">Striped Look</p><div className="h-2.5 rounded-full bg-gray dark:bg-meta-4"><div className="h-2.5 w-3/5 rounded-full bg-black"></div></div></div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 text-sm font-medium text-black dark:text-white">Thin Line</p><div className="h-1.5 rounded-full bg-gray dark:bg-meta-4"><div className="h-1.5 w-11/12 rounded-full bg-primary"></div></div></div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 text-sm font-medium text-black dark:text-white">Step Progress</p><div className="grid grid-cols-4 gap-1"><span className="h-2 rounded bg-primary"></span><span className="h-2 rounded bg-primary"></span><span className="h-2 rounded bg-primary"></span><span className="h-2 rounded bg-gray dark:bg-meta-4"></span></div></div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 text-sm font-medium text-black dark:text-white">Gradient Fill</p><div className="h-2.5 rounded-full bg-gray dark:bg-meta-4"><div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-primary to-meta-3"></div></div></div>
          <div className="rounded-md border border-dashed border-meta-3 p-4"><p className="mb-2 text-sm font-medium text-black dark:text-white">Dashed Track</p><div className="h-2.5 rounded-full border border-dashed border-meta-3"><div className="h-2.5 w-1/2 rounded-full bg-meta-3"></div></div></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProgressPage;

