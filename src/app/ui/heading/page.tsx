import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeadingPlayground from "@/components/Playgrounds/HeadingPlayground";
import HeadingSamplesCodePopup from "@/components/Samples/HeadingSamplesCodePopup";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const HeadingPage = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Heading" />
      <HeadingPlayground mode={mode} />
      <HeadingSamplesCodePopup>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Heading Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div className="heading-sample-item rounded-md border border-stroke p-5 dark:border-strokedark">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Hero Title Heading
            </h1>
            <p className="mt-2 text-sm text-body">
              Large heading for page introductions.
            </p>
          </div>
          <div className="heading-sample-item rounded-md border border-stroke p-5 dark:border-strokedark">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Section Heading
            </h2>
            <h4 className="mt-3 text-lg font-medium text-body">
              Supporting Subtitle
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Heading Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div className="heading-sample-item rounded-md border border-stroke p-4 dark:border-strokedark"><h2 className="text-2xl font-bold text-black dark:text-white">Bold Display</h2></div>
          <div className="heading-sample-item rounded-md border border-stroke p-4 dark:border-strokedark"><h2 className="text-2xl font-light text-black dark:text-white">Light Editorial</h2></div>
          <div className="heading-sample-item rounded-md border border-stroke p-4 dark:border-strokedark"><h2 className="text-xl font-semibold uppercase tracking-widest text-black dark:text-white">Uppercase Tracker</h2></div>
          <div className="heading-sample-item rounded-md border border-stroke p-4 dark:border-strokedark"><h2 className="text-2xl font-black italic text-black dark:text-white">Italic Hero</h2></div>
          <div className="heading-sample-item rounded-md border border-primary bg-primary bg-opacity-10 p-4"><h2 className="text-2xl font-bold text-black dark:text-white">Accent Panel Title</h2></div>
          <div className="heading-sample-item rounded-md border-l-4 border-meta-3 p-4"><h2 className="text-xl font-semibold text-black dark:text-white">Left Rail Heading</h2></div>
          <div className="heading-sample-item rounded-md border-b-2 border-stroke p-4 dark:border-strokedark"><h2 className="text-xl font-semibold text-black dark:text-white">Bottom Line Heading</h2></div>
          <div className="heading-sample-item rounded-md bg-gradient-to-r from-primary to-meta-3 p-4"><h2 className="text-2xl font-bold text-white">Gradient Banner</h2></div>
          <div className="heading-sample-item rounded-md border border-dashed border-meta-3 p-4"><h2 className="text-xl font-semibold text-black dark:text-white">Dashed Frame Title</h2></div>
          <div className="heading-sample-item rounded-md border border-stroke p-4 shadow dark:border-strokedark"><h2 className="text-2xl font-semibold text-black dark:text-white">Shadow Card Heading</h2></div>
        </div>
      </div>
      </HeadingSamplesCodePopup>
    </DefaultLayout>
  );
};

export default HeadingPage;

