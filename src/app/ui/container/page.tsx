import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ContainerPlayground from "@/components/Playgrounds/ContainerPlayground";

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

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Container Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div className="mx-auto max-w-5xl rounded-md border border-stroke bg-gray px-6 py-5 dark:border-strokedark dark:bg-meta-4">
            <p className="font-medium text-black dark:text-white">
              Fixed Container
            </p>
            <p className="mt-2 text-sm text-body">
              A centered fixed-width container for regular content.
            </p>
          </div>
          <div className="mx-auto w-full rounded-md border border-dashed border-primary bg-primary bg-opacity-10 px-6 py-5">
            <p className="font-medium text-black dark:text-white">
              Fluid Container
            </p>
            <p className="mt-2 text-sm text-body">
              A full-width container that adapts to viewport size.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContainerPage;

