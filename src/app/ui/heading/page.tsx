import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeadingPlayground from "@/components/Playgrounds/HeadingPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const HeadingPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Heading" />
      <HeadingPlayground />
    </DefaultLayout>
  );
};

export default HeadingPage;

