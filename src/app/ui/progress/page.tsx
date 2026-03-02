import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ProgressPlayground from "@/components/Playgrounds/ProgressPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const ProgressPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Progress" />
      <ProgressPlayground />
    </DefaultLayout>
  );
};

export default ProgressPage;

