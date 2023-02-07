import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-5 px-0 md:px-40   mt-32  my-auto mb-10">
        <ProfileCard poto="jokowi" />
        <ProfileCard poto="ganjar" />
        <ProfileCard poto="erik" />
        <ProfileCard poto="ahy" />
        <ProfileCard poto="air" />
        <ProfileCard poto="anies" />
        <ProfileCard poto="rk" />
        <ProfileCard poto="sandi" />
      </div>
    </div>
  );
}
