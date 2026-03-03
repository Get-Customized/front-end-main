import { Metadata } from "next";
import BorderGeneratorClient from "./BorderGeneratorClient";

export const metadata: Metadata = {
  title: "Code Customizer",
  description: "Simple CSS border generator. Adjust the box and copy the CSS.",
};

export default function Page() {
  return <BorderGeneratorClient />;
}