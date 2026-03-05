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
    </DefaultLayout>
  );
};

export default ProgressPage;

