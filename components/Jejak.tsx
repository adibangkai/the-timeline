"use client";
import { useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";

export default function Jejak() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="px-0 md:px-40 snap-y snap-mandatory overflow-scroll h-screen my-auto scroll-smooth"
    >
      <ScrollSpy
        offsetBottom={60}
        parentScrollContainerRef={containerRef}
        activeClass={"true"}
      >
        <div
          id="jkt"
          className="snap-always snap-start w-full md:w-5/6 px-10 h-screen pt-[30%] md:pt-[16%] transition-opacity duration-800 ease-in-out opacity-100"
        >
          <div className="tanggal text-gray-300 ">21 April 2022 jkt</div>
          <div className="quotes  text-2xl md:text-4xl font-extralight secondary-content ">
            &quot; Banyak yang perlu ditingkatkan, khususnya kemasannya dan saya
            liat juga banyak produk baru dari OK OCE,&quot;
          </div>
          <div className="sumber text-gray-300 font-extralight ">
            (sumber: merdeka.com)
          </div>
        </div>
        <div
          id="bdg"
          className="snap-always snap-start w-full md:w-5/6 px-10 h-screen pt-[30%] md:pt-[16%] transition-opacity duration-800 ease-in-out opacity-100 "
        >
          <div className="tanggal text-gray-300 ">21 April 2022 ok</div>
          <div className="quotes  text-2xl md:text-4xl font-extralight secondary-content ">
            &quot; Kenapa? Air itu turun dari langit ke bumi bukan ke laut.
            Harusnya dimasukkan ke dalam bumi, masukkan ke tanah. Di seluruh
            dunia, air jatuh dimasukkan ke tanah. Bukan dialirkan pakai
            gorong-gorong raksasa ke laut. Jakarta telah mengambil keputusan
            yang fatal...&quot;
          </div>
          <div className="sumber text-gray-300 font-extralight ">
            (sumber: merdeka.com)
          </div>
        </div>{" "}
        <div
          id="oke"
          className="snap-always snap-start w-full md:w-5/6 px-10 h-screen pt-[30%] md:pt-[16%] transition-opacity duration-800 ease-in-out opacity-100"
        >
          <div className="tanggal text-gray-300 ">21 April 2022 jkt</div>
          <div className="quotes  text-2xl md:text-4xl font-extralight secondary-content ">
            &quot; Kenapa? Air itu turun dari langit ke bumi bukan ke laut.
            Harusnya dimasukkan ke dalam bumi, masukkan ke tanah. Di seluruh
            dunia, air jatuh dimasukkan ke tanah. Bukan dialirkan pakai
            gorong-gorong raksasa ke laut. Jakarta telah mengambil keputusan
            yang fatal...&quot;
          </div>
          <div className="sumber text-gray-300 font-extralight ">
            (sumber: merdeka.com)
          </div>
        </div>
      </ScrollSpy>
    </div>
  );
}
