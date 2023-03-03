import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Toast from "@/components/Toast";
import "@/styles/style.css";
import { Alegreya_Sans } from "@next/font/google";

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
      <head />
      <body className="bg-base-100  flex flex-col min-h-screen ">
        <Navbar />
        <Toast />

        {children}
        <Footer />
      </body>
    </html>
  );
}
