import React from "react";
import NotFound from "@/components/NotFound/NotFound";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title:
        "Code Customizer",
    description: "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const NotFoundPage: React.FC = () => {
    return (
        <DefaultLayout>
            <NotFound />
        </DefaultLayout>
    );
};

export default NotFoundPage;
