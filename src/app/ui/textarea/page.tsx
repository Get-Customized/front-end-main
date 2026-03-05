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
          {[
            "Product Feedback",
            "Support Message",
            "Project Brief",
            "Bug Description",
            "Release Notes",
            "Interview Notes",
            "Meeting Summary",
            "Welcome Email Draft",
            "Feature Request",
            "Customer Follow-up",
          ].map((label, index) => (
            <div key={index}>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                {label}
              </label>
              <textarea
                rows={4}
                placeholder={`Write ${label.toLowerCase()}...`}
                className={`w-full rounded-md border px-4 py-3 text-sm text-black outline-none dark:text-white ${
                  index % 2 === 0
                    ? "border-stroke bg-transparent dark:border-strokedark"
                    : "border-meta-3 bg-meta-3 bg-opacity-5"
                }`}
              ></textarea>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TextareaPage;

