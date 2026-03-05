import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeadingPlayground from "@/components/Playgrounds/HeadingPlayground";

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

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Heading Samples
          </h3>
        </div>
        <div className="space-y-6 p-4 md:p-6 xl:p-9">
          <div className="rounded-md border border-stroke p-5 dark:border-strokedark">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Hero Title Heading
            </h1>
            <p className="mt-2 text-sm text-body">
              Large heading for page introductions.
            </p>
          </div>
          <div className="rounded-md border border-stroke p-5 dark:border-strokedark">
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
          {[
            "Launch Dashboard",
            "Weekly Analytics",
            "Conversion Overview",
            "Meet The Team",
            "Pricing Snapshot",
            "Latest Announcements",
            "Growth Milestones",
            "Product Roadmap",
            "Customer Stories",
            "Support Center",
          ].map((title, index) => (
            <div key={index} className="rounded-md border border-stroke p-4 dark:border-strokedark">
              <h4 className={`font-semibold ${index % 2 === 0 ? "text-xl" : "text-2xl"} text-black dark:text-white`}>
                {title}
              </h4>
              <p className="mt-2 text-sm text-body">Heading variant #{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HeadingPage;

