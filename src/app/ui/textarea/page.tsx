import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TextareaPlayground from "@/components/Playgrounds/TextareaPlayground";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const TextareaPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Textarea" />
      <TextareaPlayground mode={mode} />

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Textarea Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Basic Textarea
            </p>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
            ></textarea>
          </div>
          <div>
            <p className="mb-3 font-medium text-black dark:text-white">
              Textarea With Character Hint
            </p>
            <textarea
              rows={5}
              placeholder="Add your feedback..."
              className="w-full rounded-md border border-stroke bg-gray px-4 py-3 text-black outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
            ></textarea>
            <p className="mt-2 text-sm text-body">0 / 300 characters</p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Textarea Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Outlined</label>
            <textarea rows={4} placeholder="Write your message..." className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Soft Filled</label>
            <textarea rows={4} placeholder="Share feedback..." className="w-full rounded-md border border-transparent bg-gray px-4 py-3 text-sm text-black outline-none dark:bg-meta-4 dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Underline</label>
            <textarea rows={4} placeholder="Short notes..." className="w-full border-b-2 border-stroke bg-transparent px-1 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Rounded XL</label>
            <textarea rows={4} placeholder="Customer story..." className="w-full rounded-2xl border border-stroke bg-transparent px-4 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Inset Panel</label>
            <textarea rows={4} placeholder="Design brief..." className="w-full rounded-md border border-stroke bg-white px-4 py-3 text-sm text-black shadow-inner outline-none dark:border-strokedark dark:bg-boxdark dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Dotted Border</label>
            <textarea rows={4} placeholder="Paste changelog..." className="w-full rounded-md border-2 border-dotted border-meta-3 bg-transparent px-4 py-3 text-sm text-black outline-none dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Success State</label>
            <textarea rows={4} defaultValue="Looks good. Ready to publish." className="w-full rounded-md border border-success bg-success bg-opacity-5 px-4 py-3 text-sm text-black outline-none dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Error State</label>
            <textarea rows={4} defaultValue="This description is too short." className="w-full rounded-md border border-danger bg-danger bg-opacity-5 px-4 py-3 text-sm text-black outline-none dark:text-white"></textarea>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Character Counter</label>
            <textarea rows={4} placeholder="Type up to 500 characters..." className="w-full rounded-md border border-stroke bg-transparent px-4 py-3 text-sm text-black outline-none dark:border-strokedark dark:text-white"></textarea>
            <p className="mt-1 text-xs text-body">120 / 500</p>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">Gradient Frame</label>
            <div className="rounded-md bg-gradient-to-r from-primary to-meta-3 p-[1px]">
              <textarea rows={4} placeholder="Roadmap summary..." className="w-full rounded-md bg-white px-4 py-3 text-sm text-black outline-none dark:bg-boxdark dark:text-white"></textarea>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TextareaPage;

