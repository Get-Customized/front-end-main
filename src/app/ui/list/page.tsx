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

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative List Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 font-medium text-black dark:text-white">Bullet List</p><ul className="list-disc list-inside text-sm text-body"><li>Plan</li><li>Build</li><li>Ship</li></ul></div>
          <div className="rounded-md border border-stroke p-4 dark:border-strokedark"><p className="mb-2 font-medium text-black dark:text-white">Numbered Steps</p><ol className="list-decimal list-inside text-sm text-body"><li>Create account</li><li>Verify email</li><li>Start project</li></ol></div>
          <div className="rounded-md border border-success bg-success bg-opacity-10 p-4"><p className="mb-2 font-medium text-black dark:text-white">Checklist</p><ul className="space-y-1 text-sm text-body"><li>✓ Setup domain</li><li>✓ Add content</li><li>✓ Publish</li></ul></div>
          <div className="rounded-md border border-primary bg-primary bg-opacity-10 p-4"><p className="mb-2 font-medium text-black dark:text-white">Tag List</p><div className="flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-white px-2 py-1">UI</span><span className="rounded-full bg-white px-2 py-1">UX</span><span className="rounded-full bg-white px-2 py-1">API</span></div></div>
          <div className="rounded-md border-l-4 border-meta-3 p-4"><p className="mb-2 font-medium text-black dark:text-white">Timeline</p><ul className="space-y-1 text-sm text-body"><li>09:00 Kickoff</li><li>11:00 Review</li><li>16:00 Deploy</li></ul></div>
          <div className="rounded-md border border-dashed border-meta-3 p-4"><p className="mb-2 font-medium text-black dark:text-white">Dashed List</p><ul className="space-y-1 text-sm text-body"><li>- Backlog grooming</li><li>- Sprint planning</li><li>- Retrospective</li></ul></div>
          <div className="rounded-md border border-stroke p-4 shadow dark:border-strokedark"><p className="mb-2 font-medium text-black dark:text-white">Card List</p><ul className="space-y-2 text-sm text-body"><li className="rounded bg-gray px-2 py-1 dark:bg-meta-4">Invoice #401</li><li className="rounded bg-gray px-2 py-1 dark:bg-meta-4">Invoice #402</li></ul></div>
          <div className="rounded-md border border-warning bg-warning bg-opacity-10 p-4"><p className="mb-2 font-medium text-black dark:text-white">Priority Queue</p><ol className="list-decimal list-inside text-sm text-body"><li>Critical bug</li><li>Payment issue</li><li>UI polish</li></ol></div>
          <div className="rounded-md border border-danger bg-danger bg-opacity-10 p-4"><p className="mb-2 font-medium text-black dark:text-white">Blocked Items</p><ul className="space-y-1 text-sm text-body"><li>Database migration</li><li>Vendor approval</li><li>Legal sign-off</li></ul></div>
          <div className="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]"><div className="rounded-md bg-white p-4 dark:bg-boxdark"><p className="mb-2 font-medium text-black dark:text-white">Gradient Frame List</p><ul className="list-disc list-inside text-sm text-body"><li>Insight A</li><li>Insight B</li><li>Insight C</li></ul></div></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ListPage;

