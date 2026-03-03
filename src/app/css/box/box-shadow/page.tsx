import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NeumorphismGenerator from "@/components/ComponentPages/NeumorphismGenerator";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Visual CSS box-shadow generator. Tweak the card and copy the CSS instantly.",
};

const BoxShadowPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="CSS / Box Shadow" />
      <NeumorphismGenerator />
    </DefaultLayout>
  );
};

export default BoxShadowPage;

