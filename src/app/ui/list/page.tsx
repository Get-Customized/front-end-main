import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ListPlayground from "@/components/Playgrounds/ListPlayground";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const ListPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="List" />
      <ListPlayground mode={mode} />

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            List Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div className="rounded-md border border-stroke p-5 dark:border-strokedark">
            <p className="mb-3 font-medium text-black dark:text-white">
              Bullet List
            </p>
            <ul className="list-inside list-disc space-y-2 text-body">
              <li>Create account settings</li>
              <li>Update profile details</li>
              <li>Review security options</li>
            </ul>
          </div>
          <div className="rounded-md border border-stroke p-5 dark:border-strokedark">
            <p className="mb-3 font-medium text-black dark:text-white">
              Numbered Steps
            </p>
            <ol className="list-inside list-decimal space-y-2 text-body">
              <li>Choose a template</li>
              <li>Customize content</li>
              <li>Publish your page</li>
            </ol>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ListPage;

