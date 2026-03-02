import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import InputPlayground from "@/components/Playgrounds/InputPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const InputPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Input" />
      <InputPlayground />
    </DefaultLayout>
  );
};

export default InputPage;

