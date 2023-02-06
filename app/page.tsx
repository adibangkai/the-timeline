import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-32 w-5/6 mx-14">
        <div className="tanggal text-gray-500">21 April 2022</div>
        <div className="quotes text-4xl font-extralight text-gray-700">
          "Kenapa? Air itu turun dari langit ke bumi bukan ke laut. Harusnya
          dimasukkan ke dalam bumi, masukkan ke tanah. Di seluruh dunia, air
          jatuh dimasukkan ke tanah. Bukan dialirkan pakai gorong-gorong raksasa
          ke laut. Jakarta telah mengambil keputusan yang fatal..."
        </div>
        <div className="sumber text-gray-400">(sumber: merdeka.com)</div>
      </div>

      <div className="timeline fixed bottom-10 w-2/3 mx-auto justify-center flex gap-4">
        <div className="date">2010</div>
        <div className="date">2010</div>
        <div className="date">2010</div>
        <div className="date">2010</div>
        <div className="date">2010</div>
      </div>
    </div>
  );
}
