import ProfileCard from "@/components/ProfileCard";
import { getAll } from "@/lib/utils";
import { Metadata } from "next";

export default async function Home() {
  const { tokohIndex } = await getAll();

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-20 md:px-20 lg:px-40  mt-32  my-auto mb-10">
        {tokohIndex.map((tokoh) => (
          <ProfileCard key={tokoh.id} tokoh={tokoh} />
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Jejak",
  description: "Selamat Datang di Website Jejak",
};
