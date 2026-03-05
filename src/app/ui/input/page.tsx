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

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Input Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Classic Outlined
            </label>
            <input
              type="text"
              placeholder="John Carter"
              className="w-full rounded-md border border-stroke bg-transparent px-4 py-2.5 text-sm text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Soft Filled
            </label>
            <input
              type="text"
              placeholder="hello@company.com"
              className="w-full rounded-md border border-transparent bg-gray px-4 py-2.5 text-sm text-black outline-none focus:border-primary dark:bg-meta-4 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Underline Input
            </label>
            <input
              type="text"
              placeholder="Search article..."
              className="w-full border-b-2 border-stroke bg-transparent px-1 py-2.5 text-sm text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Rounded Pill
            </label>
            <input
              type="text"
              placeholder="Invite by email"
              className="w-full rounded-full border border-stroke bg-transparent px-5 py-2.5 text-sm text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Leading Icon
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-body">
                @
              </span>
              <input
                type="text"
                placeholder="username"
                className="w-full rounded-md border border-stroke bg-transparent py-2.5 pl-9 pr-4 text-sm text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Prefix + Suffix
            </label>
            <div className="flex overflow-hidden rounded-md border border-stroke dark:border-strokedark">
              <span className="bg-gray px-3 py-2.5 text-sm text-body dark:bg-meta-4">
                $
              </span>
              <input
                type="text"
                placeholder="0.00"
                className="w-full bg-transparent px-3 py-2.5 text-sm text-black outline-none dark:text-white"
              />
              <span className="bg-gray px-3 py-2.5 text-sm text-body dark:bg-meta-4">
                USD
              </span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Success State
            </label>
            <input
              type="text"
              defaultValue="verified@site.com"
              className="w-full rounded-md border border-success bg-success bg-opacity-5 px-4 py-2.5 text-sm text-black outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Error State
            </label>
            <input
              type="text"
              defaultValue="wrong@email"
              className="w-full rounded-md border border-danger bg-danger bg-opacity-5 px-4 py-2.5 text-sm text-black outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Disabled
            </label>
            <input
              type="text"
              disabled
              value="Readonly value"
              className="w-full cursor-not-allowed rounded-md border border-stroke bg-gray px-4 py-2.5 text-sm text-body outline-none dark:border-strokedark dark:bg-meta-4"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Dashed Border
            </label>
            <input
              type="text"
              placeholder="Paste API key"
              className="w-full rounded-md border-2 border-dashed border-meta-3 bg-transparent px-4 py-2.5 text-sm text-black outline-none dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Shadow Focus
            </label>
            <input
              type="text"
              placeholder="Type and focus"
              className="w-full rounded-md border border-stroke bg-white px-4 py-2.5 text-sm text-black shadow-sm outline-none focus:shadow-md dark:border-strokedark dark:bg-boxdark dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Gradient Border
            </label>
            <div className="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]">
              <input
                type="text"
                placeholder="custom-domain.com"
                className="w-full rounded-md bg-white px-4 py-2.5 text-sm text-black outline-none dark:bg-boxdark dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default InputPage;

