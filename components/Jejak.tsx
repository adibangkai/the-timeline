"use client";
import { useRef } from "react";
import Timeline from "./Timeline";
import { motion } from "framer-motion";
import Quotes from "./Quotes";

export default function Jejak({ quotes }) {
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
        {quotes.map((q) => (
          <Quotes
            key={q.id}
            containerRef={containerRef}
            date={q.dateQuote}
            quote={q.quote}
            source={q.sourceQuote}
          />
        ))}
      </motion.div>
      <Timeline containerRef={containerRef} quotes={quotes} />
    </>
  );
}
