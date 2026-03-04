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
    </DefaultLayout>
  );
};

export default HeadingPage;

