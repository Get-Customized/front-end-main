import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TextareaPlayground from "@/components/Playgrounds/TextareaPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const TextareaPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Textarea" />
      <TextareaPlayground />
    </DefaultLayout>
  );
};

export default TextareaPage;

