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
          {[
            { label: "Profile Setup", width: "w-1/5" },
            { label: "Content Draft", width: "w-1/3" },
            { label: "Checkout Flow", width: "w-2/5" },
            { label: "Upload Queue", width: "w-1/2" },
            { label: "Campaign Build", width: "w-3/5" },
            { label: "QA Review", width: "w-2/3" },
            { label: "Data Sync", width: "w-3/4" },
            { label: "Deployment", width: "w-4/5" },
            { label: "Backup Process", width: "w-11/12" },
            { label: "Completed", width: "w-full" },
          ].map((item, index) => (
            <div key={index} className="rounded-md border border-stroke p-4 dark:border-strokedark">
              <p className="mb-2 text-sm font-medium text-black dark:text-white">
                {item.label}
              </p>
              <div className="h-2.5 rounded-full bg-gray dark:bg-meta-4">
                <div
                  className={`h-2.5 rounded-full ${
                    index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-warning" : "bg-success"
                  } ${item.width}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProgressPage;

