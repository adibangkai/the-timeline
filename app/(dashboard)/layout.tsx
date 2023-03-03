import "@/styles/style.css";
import { Alegreya_Sans } from "@next/font/google";
import Toast from "@/components/Toast";
import "react-toastify/dist/ReactToastify.css";
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
        <Toast />
        {children}
      </body>
    </html>
  );
}
