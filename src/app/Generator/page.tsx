import React from "react";
import ComponentPages from "@/components/ComponentPages/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Code Customizer",
  description: "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const BasicGeneratorPage: React.FC = () => {
  return (
    <DefaultLayout>
      <ComponentPages />
    </DefaultLayout>
  );
};

export default BasicGeneratorPage;
