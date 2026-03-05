import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import InputPlayground from "@/components/Playgrounds/InputPlayground";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const InputPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Input" />
      <InputPlayground mode={mode} />

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Input Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Basic Text Input
            </p>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
            />
          </div>
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Input With Prefix
            </p>
            <div className="flex overflow-hidden rounded-md border border-stroke dark:border-strokedark">
              <span className="bg-gray px-4 py-3 text-sm text-body dark:bg-meta-4">
                https://
              </span>
              <input
                type="text"
                placeholder="your-domain.com"
                className="w-full bg-transparent px-4 py-3 text-black outline-none dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default InputPage;

