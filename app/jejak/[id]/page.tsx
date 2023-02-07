import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Jejak() {
  return (
    <div className="w-full">
      <div className="px-0 md:px-40 snap-y snap-mandatory overflow-scroll h-screen  my-auto scroll-smooth ">
        <div
          className="snap-always snap-start w-full md:w-5/6 px-10 h-screen pt-[30%] md:pt-[16%] transition-opacity duration-800 ease-in-out opacity-100"
          id="jkt"
          data-aos="fade-up"
        >
          <div className="tanggal text-gray-300 ">jejask</div>
          <div className="quotes  text-2xl md:text-4xl font-extralight text-gray-600">
            "Kenapa? Air itu turun dari langit ke bumi bukan ke laut. Harusnya
            dimasukkan ke dalam bumi, masukkan ke tanah. Di seluruh dunia, air
            jatuh dimasukkan ke tanah. Bukan dialirkan pakai gorong-gorong
            raksasa ke laut. Jakarta telah mengambil keputusan yang fatal..."
          </div>
          <div className="sumber text-gray-300 font-extralight ">
            (sumber: merdeka.com)
          </div>
        </div>
        <div
          className="snap-always snap-start w-full md:w-5/6 px-10 h-screen pt-[30%] md:pt-[16%] transition-opacity duration-800 ease-in-out opacity-100"
          id="jkt"
          data-aos="fade-up"
        >
          <div className="tanggal text-gray-300 ">21 April 2022</div>
          <div className="quotes  text-2xl md:text-4xl font-extralight text-gray-600">
            "Kenapa? Air itu turun dari langit ke bumi bukan ke laut. Harusnya
            dimasukkan ke dalam bumi, masukkan ke tanah. Di seluruh dunia, air
            jatuh dimasukkan ke tanah. Bukan dialirkan pakai gorong-gorong
            raksasa ke laut. Jakarta telah mengambil keputusan yang fatal..."
          </div>
          <div className="sumber text-gray-300 font-extralight ">
            (sumber: merdeka.com)
          </div>
        </div>{" "}
        <div
          className="snap-always snap-start w-full md:w-5/6 px-10 h-screen pt-[30%] md:pt-[16%] transition-opacity duration-800 ease-in-out opacity-100"
          id="jkt"
          data-aos="fade-up"
        >
          <div className="tanggal text-gray-300 ">21 April 2022</div>
          <div className="quotes  text-2xl md:text-4xl font-extralight text-gray-600">
            "Kenapa? Air itu turun dari langit ke bumi bukan ke laut. Harusnya
            dimasukkan ke dalam bumi, masukkan ke tanah. Di seluruh dunia, air
            jatuh dimasukkan ke tanah. Bukan dialirkan pakai gorong-gorong
            raksasa ke laut. Jakarta telah mengambil keputusan yang fatal..."
          </div>
          <div className="sumber text-gray-300 font-extralight ">
            (sumber: merdeka.com)
          </div>
        </div>
      </div>

      <ul className="timeline fixed bottom-10  w-full justify-center flex gap-2">
        <li className="flex gap-2">
          <a className="year" href="#jkt">
            2010
          </a>
          <ul className="flex  gap-2">
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
        </li>
        <li>
          <a className="year" href="#jkt">
            2010
          </a>
        </li>
      </ul>
    </div>
  );
}
