import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Pietro Lubrano - WEB DEV",
  description: "Sviluppatore web - Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="it">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
