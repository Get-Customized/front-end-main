import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectPlayground from "@/components/Playgrounds/SelectPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const SelectPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Select" />
      <SelectPlayground />
    </DefaultLayout>
  );
};

export default SelectPage;

