import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DialogPlayground from "@/components/Playgrounds/DialogPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const DialogPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dialog" />
      <DialogPlayground />
    </DefaultLayout>
  );
};

export default DialogPage;

