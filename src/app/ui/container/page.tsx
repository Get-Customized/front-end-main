import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ContainerPlayground from "@/components/Playgrounds/ContainerPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const ContainerPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Container" />
      <ContainerPlayground />
    </DefaultLayout>
  );
};

export default ContainerPage;

