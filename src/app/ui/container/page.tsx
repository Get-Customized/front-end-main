import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ContainerPlayground from "@/components/Playgrounds/ContainerPlayground";
import ContainerSamplesCodePopup from "@/components/Samples/ContainerSamplesCodePopup";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const ContainerPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Container" />
      <ContainerPlayground mode={mode} />
      <ContainerSamplesCodePopup>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Container Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div className="container-sample-item mx-auto max-w-5xl rounded-md border border-stroke bg-gray px-6 py-5 dark:border-strokedark dark:bg-meta-4">
            <p className="font-medium text-black dark:text-white">
              Fixed Container
            </p>
            <p className="mt-2 text-sm text-body">
              A centered fixed-width container for regular content.
            </p>
          </div>
          <div className="container-sample-item mx-auto w-full rounded-md border border-dashed border-primary bg-primary bg-opacity-10 px-6 py-5">
            <p className="font-medium text-black dark:text-white">
              Fluid Container
            </p>
            <p className="mt-2 text-sm text-body">
              A full-width container that adapts to viewport size.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Container Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div className="container-sample-item rounded-md border border-stroke p-4 dark:border-strokedark"><p className="font-medium text-black dark:text-white">Default Panel</p><div className="mt-3 h-2 w-full rounded bg-gray dark:bg-meta-4"></div></div>
          <div className="container-sample-item rounded-md border border-primary bg-primary bg-opacity-10 p-4"><p className="font-medium text-black dark:text-white">Soft Primary Wrapper</p><div className="mt-3 h-2 w-4/5 rounded bg-white/80"></div></div>
          <div className="container-sample-item rounded-md border border-meta-3 bg-meta-3 bg-opacity-10 p-4"><p className="font-medium text-black dark:text-white">Accent Section</p><div className="mt-3 h-2 w-3/4 rounded bg-white/80"></div></div>
          <div className="container-sample-item rounded-2xl border border-stroke p-4 dark:border-strokedark"><p className="font-medium text-black dark:text-white">Rounded Card Container</p><div className="mt-3 h-2 w-full rounded bg-gray dark:bg-meta-4"></div></div>
          <div className="container-sample-item rounded-md border border-dashed border-meta-3 p-4"><p className="font-medium text-black dark:text-white">Dashed Layout Frame</p><div className="mt-3 h-2 w-2/3 rounded bg-meta-3 bg-opacity-30"></div></div>
          <div className="container-sample-item rounded-md border border-stroke p-4 shadow dark:border-strokedark"><p className="font-medium text-black dark:text-white">Shadowed Wrapper</p><div className="mt-3 h-2 w-5/6 rounded bg-gray dark:bg-meta-4"></div></div>
          <div className="container-sample-item rounded-md border-l-4 border-primary p-4"><p className="font-medium text-black dark:text-white">Left-Rail Container</p><div className="mt-3 h-2 w-1/2 rounded bg-gray dark:bg-meta-4"></div></div>
          <div className="container-sample-item rounded-md border-t-4 border-warning p-4"><p className="font-medium text-black dark:text-white">Top-Border Container</p><div className="mt-3 h-2 w-3/5 rounded bg-warning bg-opacity-30"></div></div>
          <div className="container-sample-item rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]"><div className="rounded-md bg-white p-4 dark:bg-boxdark"><p className="font-medium text-black dark:text-white">Gradient Frame Container</p><div className="mt-3 h-2 w-2/3 rounded bg-gray dark:bg-meta-4"></div></div></div>
          <div className="container-sample-item rounded-md border border-black bg-black bg-opacity-5 p-4"><p className="font-medium text-black dark:text-white">Dark Accent Container</p><div className="mt-3 h-2 w-3/4 rounded bg-black bg-opacity-20"></div></div>
        </div>
      </div>
      </ContainerSamplesCodePopup>
    </DefaultLayout>
  );
};

export default ContainerPage;

