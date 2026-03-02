import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DropdownPlayground from "@/components/Playgrounds/DropdownPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const DropdownPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dropdown" />
      <DropdownPlayground />
    </DefaultLayout>
  );
};

export default DropdownPage;

