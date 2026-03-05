import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectPlayground from "@/components/Playgrounds/SelectPlayground";

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

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Select Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div>
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
          <div>
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
          {[
            "Country",
            "Currency",
            "Department",
            "Role",
            "Experience Level",
            "Subscription Plan",
            "Report Type",
            "Delivery Slot",
            "Language",
            "Theme",
          ].map((label, index) => (
            <div key={index}>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                {label}
              </label>
              <select
                className={`w-full rounded-md border px-4 py-2.5 text-sm text-black outline-none dark:text-white ${
                  index % 2 === 0
                    ? "border-stroke bg-transparent dark:border-strokedark"
                    : "border-primary bg-primary bg-opacity-5"
                }`}
              >
                <option>Select {label.toLowerCase()}</option>
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SelectPage;

