import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectPlayground from "@/components/Playgrounds/SelectPlayground";
import SelectSamplesCodePopup from "@/components/Samples/SelectSamplesCodePopup";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const SelectPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Select" />
      <SelectPlayground mode={mode} />
      <SelectSamplesCodePopup>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Select Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div className="select-sample-item">
            <p className="mb-3 font-medium text-black dark:text-white">
              Single Select
            </p>
            <select className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-black outline-none focus:border-primary dark:border-strokedark dark:text-white">
              <option>Choose a country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Pakistan</option>
            </select>
          </div>
          <div className="select-sample-item">
            <p className="mb-3 font-medium text-black dark:text-white">
              Select With Status
            </p>
            <select className="w-full rounded-md border border-success bg-success bg-opacity-10 px-4 py-3 text-black outline-none dark:text-white">
              <option>Completed</option>
              <option>In Progress</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Select Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Outlined</label>
            <select className="w-full rounded-md border border-stroke bg-transparent px-4 py-2.5 text-sm text-black outline-none dark:border-strokedark dark:text-white">
              <option>Choose country</option>
              <option>United States</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Soft Filled</label>
            <select className="w-full rounded-md border border-transparent bg-gray px-4 py-2.5 text-sm text-black outline-none dark:bg-meta-4 dark:text-white">
              <option>Choose team</option>
              <option>Design</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Pill Select</label>
            <select className="w-full rounded-full border border-stroke bg-transparent px-5 py-2.5 text-sm text-black outline-none dark:border-strokedark dark:text-white">
              <option>Plan type</option>
              <option>Pro</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Underline</label>
            <select className="w-full border-b-2 border-stroke bg-transparent px-1 py-2.5 text-sm text-black outline-none dark:border-strokedark dark:text-white">
              <option>Sort by</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Success State</label>
            <select className="w-full rounded-md border border-success bg-success bg-opacity-5 px-4 py-2.5 text-sm text-black outline-none dark:text-white">
              <option>Completed</option>
              <option>In review</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Error State</label>
            <select className="w-full rounded-md border border-danger bg-danger bg-opacity-5 px-4 py-2.5 text-sm text-black outline-none dark:text-white">
              <option>Payment failed</option>
              <option>Retry</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Prefix Group</label>
            <div className="flex overflow-hidden rounded-md border border-stroke dark:border-strokedark">
              <span className="bg-gray px-3 py-2.5 text-sm text-body dark:bg-meta-4">Region</span>
              <select className="w-full bg-transparent px-3 py-2.5 text-sm text-black outline-none dark:text-white">
                <option>APAC</option>
                <option>EMEA</option>
              </select>
            </div>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Dashed Border</label>
            <select className="w-full rounded-md border-2 border-dashed border-meta-3 bg-transparent px-4 py-2.5 text-sm text-black outline-none dark:text-white">
              <option>Import source</option>
              <option>CSV</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Shadow Card</label>
            <select className="w-full rounded-md border border-stroke bg-white px-4 py-2.5 text-sm text-black shadow-sm outline-none dark:border-strokedark dark:bg-boxdark dark:text-white">
              <option>Timezone</option>
              <option>UTC +05:00</option>
            </select>
          </div>
          <div className="select-sample-item">
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Gradient Frame</label>
            <div className="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]">
              <select className="w-full rounded-md bg-white px-4 py-2.5 text-sm text-black outline-none dark:bg-boxdark dark:text-white">
                <option>Theme</option>
                <option>Ocean</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      </SelectSamplesCodePopup>
    </DefaultLayout>
  );
};

export default SelectPage;

