import { Metadata } from "next";

export default function PageLoader() {
  return (
    <div className="mt-80 text-center animate-pulse text-2xl md:text-4xl font-extralight text-gray-400">
      Tunggu ya...
    </div>
  );
}
export const metadata: Metadata = {
  title: "tunggu....",
};
