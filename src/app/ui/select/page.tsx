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
    </DefaultLayout>
  );
};

export default SelectPage;

