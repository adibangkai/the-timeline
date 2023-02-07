import Navbar from "@/components/Navbar";
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
      <body className="bg-white h-screen w-screen">
        <Navbar />
        {children}
        <div className="text-center pb-8 font-light text-sm">
          <a href="https://github.com/adibangkai/" className="font-bold">
            Jejak
          </a>{" "}
          © 2023
        </div>
      </body>
    </html>
  );
}
