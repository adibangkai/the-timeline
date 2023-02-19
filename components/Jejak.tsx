"use client";
import { useRef } from "react";
import Timeline from "./Timeline";
import { motion, useScroll, useSpring, animate } from "framer-motion";

export default function Jejak() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{ delay: 1 }}
        ref={containerRef}
        className="px-0 md:px-40 snap-y snap-mandatory overflow-scroll top-0 h-screen  scroll-smooth"
      >
        <Quotes containerRef={containerRef} />
        <Quotes containerRef={containerRef} />
        <Quotes containerRef={containerRef} />
        <Quotes containerRef={containerRef} />
      </motion.div>
      <Timeline containerRef={containerRef} />
    </>
  );
}
type QuotesType = {
  containerRef: React.RefObject<HTMLDivElement>;
};
function Quotes({ containerRef }: QuotesType) {
  const scrollRef = useRef(null);
  return (
    <motion.div
      viewport={{ root: containerRef }}
      id="jkt"
      className="snap-always snap-start w-full md:w-5/6 px-10  pt-[30%] md:pt-[16%] h-screen transition-opacity duration-800 ease-in-out opacity-100 "
    >
      <motion.div
        initial={{ y: -150, opacity: 0.4 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="tanggal text-base-300 font-light "
      >
        21 April 2022 jkt
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="quotes  text-2xl md:text-4xl font-extralight secondary-content "
      >
        &quot; Banyak yang perlu ditingkatkan, khususnya kemasannya dan saya
        liat juga banyak produk baru dari OK OCE,&quot;
      </motion.div>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, type: "tween" }}
        transition={{ delay: 0.8 }}
        className="sumber text-gray-300 font-extralight "
      >
        (sumber: merdeka.com)
      </motion.div>
    </motion.div>
  );
}
