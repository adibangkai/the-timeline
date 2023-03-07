import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Toast from "@/components/Toast";
import "react-toastify/dist/ReactToastify.css";

import "@/styles/style.css";
import { Alegreya_Sans } from "@next/font/google";
import type { Metadata } from "next";
const alagreyaSC = Alegreya_Sans({
  subsets: ["cyrillic"],
  variable: "--alagreyaSC-font",
  weight: ["500", "400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={alagreyaSC.variable}>
      <body className="bg-base-100  flex flex-col min-h-screen ">
        <Navbar />
        <Toast />

        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Jejak",
  description: "Kenali dan ikuti tokoh politik kesayanmu",
};
