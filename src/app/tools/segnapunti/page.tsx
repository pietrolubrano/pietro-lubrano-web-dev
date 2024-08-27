import { Metadata } from "next";
import Segnapunti from "./Segnapunti";

export const metadata: Metadata = {
    title: "Segnapunti",
    description: "Segnapunti per qualsiasi tipo di gioco "
};

export default function Page() {
  return (
    <Segnapunti />
  )
}
