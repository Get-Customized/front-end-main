import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ListPlayground from "@/components/Playgrounds/ListPlayground";

export const metadata: Metadata = {
  title: "Code Customizer",
  description:
    "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const ListPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="List" />
      <ListPlayground />
    </DefaultLayout>
  );
};

export default ListPage;

