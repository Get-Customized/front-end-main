"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CSSComponents from "./CSSComponents";

const Generator: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Component Pages" />

      <CSSComponents />
    </>
  );
};

export default Generator;
