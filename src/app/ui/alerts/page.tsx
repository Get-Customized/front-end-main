import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AlertPlayground from "@/components/Playgrounds/AlertPlayground";
import AlertSamplesCodePopup from "@/components/Samples/AlertSamplesCodePopup";

type GeneratorMode = "tailwind" | "css" | "bootstrap";

export const metadata: Metadata = {
  title:
    "Code Customizer",
  description: "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const Alerts = ({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) => {
  const rawMode = searchParams?.mode;
  const mode: GeneratorMode =
    rawMode === "css" || rawMode === "bootstrap" ? rawMode : "tailwind";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Alerts" />

      <AlertPlayground mode={mode} />

      <AlertSamplesCodePopup>
      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          {/* <!-- Alerts Item --> */}
          <div className="alert-sample-item flex w-full border-l-6 border-warning bg-warning bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div className="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-warning bg-opacity-30">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
                  fill="#FBBF24"
                ></path>
              </svg>
            </div>
            <div className="w-full">
              <h5 className="mb-3 text-lg font-semibold text-[#9D5425]">
                Attention needed
              </h5>
              <p className="leading-relaxed text-[#D0915C]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when
              </p>
            </div>
          </div>
          {/* <!-- Alerts Item --> */}
          <div className="alert-sample-item flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                  fill="white"
                  stroke="white"
                ></path>
              </svg>
            </div>
            <div className="w-full">
              <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
                Message Sent Successfully
              </h5>
              <p className="text-base leading-relaxed text-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          {/* <!-- Alerts Item --> */}
          <div className="alert-sample-item flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                ></path>
              </svg>
            </div>
            <div className="w-full">
              <h5 className="mb-3 font-semibold text-[#B45454]">
                There were 1 errors with your submission
              </h5>
              <ul>
                <li className="leading-relaxed text-[#CD5D5D]">
                  Lorem Ipsum is simply dummy text of the printing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Creative Alert Examples
          </h3>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6 xl:grid-cols-3 xl:p-9">
          <div className="alert-sample-item rounded-md border-l-4 border-primary bg-primary bg-opacity-10 p-4"><p className="font-medium text-black dark:text-white">Info Rail</p><p className="mt-1 text-sm text-body">New feature is available in settings.</p></div>
          <div className="alert-sample-item rounded-md border border-success bg-success bg-opacity-10 p-4"><p className="font-medium text-black dark:text-white">Success Box</p><p className="mt-1 text-sm text-body">Changes have been applied successfully.</p></div>
          <div className="alert-sample-item rounded-md border border-danger bg-danger bg-opacity-10 p-4"><p className="font-medium text-black dark:text-white">Error Box</p><p className="mt-1 text-sm text-body">Payment failed. Try a different method.</p></div>
          <div className="alert-sample-item rounded-md border-t-4 border-warning bg-warning bg-opacity-10 p-4"><p className="font-medium text-black dark:text-white">Top Warning</p><p className="mt-1 text-sm text-body">Your session expires in 5 minutes.</p></div>
          <div className="alert-sample-item rounded-full border border-meta-3 bg-meta-3 bg-opacity-10 px-5 py-3"><p className="text-sm font-medium text-black dark:text-white">Rounded Pill Alert</p></div>
          <div className="alert-sample-item rounded-md border border-stroke p-4 shadow dark:border-strokedark"><p className="font-medium text-black dark:text-white">Shadow Notice</p><p className="mt-1 text-sm text-body">Backup completed at 11:32 PM.</p></div>
          <div className="alert-sample-item rounded-md border border-dashed border-meta-3 p-4"><p className="font-medium text-black dark:text-white">Dashed Alert</p><p className="mt-1 text-sm text-body">Draft mode is enabled for this page.</p></div>
          <div className="alert-sample-item rounded-md bg-black p-4 text-white"><p className="font-medium">Dark Alert</p><p className="mt-1 text-sm text-white/80">Server maintenance starts tonight.</p></div>
          <div className="alert-sample-item rounded-md bg-gradient-to-r from-primary to-meta-3 p-4 text-white"><p className="font-medium">Gradient Alert</p><p className="mt-1 text-sm text-white/90">Upgrade available for your workspace.</p></div>
          <div className="alert-sample-item flex items-start gap-3 rounded-md border border-stroke p-4 dark:border-strokedark"><span className="mt-0.5 rounded bg-primary px-2 py-0.5 text-xs text-white">NEW</span><div><p className="font-medium text-black dark:text-white">Tag Alert</p><p className="mt-1 text-sm text-body">A fresh template was added today.</p></div></div>
        </div>
      </div>
      </AlertSamplesCodePopup>
    </DefaultLayout>
  );
};

export default Alerts;
