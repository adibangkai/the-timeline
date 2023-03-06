"use client";
import { useEffect, useRef, useState } from "react";
import Timeline from "./Timeline";
import { motion } from "framer-motion";
import Quotes from "./Quotes";

export default function Jejak({ id }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [quotes, setQuotes] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch(`/api/quote?topicId=${id}`);
      const json = await data.json();
      setQuotes(json);
      setLoading(false);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  if (isLoading)
    return (
      <div className="animate-pulse mt-80 text-center  text-2xl md:text-4xl font-extralight text-gray-400">
        tunggu yaa...
      </div>
    );

  if (!quotes)
    return (
      <div className="mt-80 text-center  text-2xl md:text-4xl font-extralight text-gray-400">
        no quotes yet...
      </div>
    );
  // if (quotes.length === 0) {
  //   return (
  //     <div className="mt-80 text-center  text-2xl md:text-4xl font-extralight text-gray-400">
  //       no quotes yet...
  //     </div>
  //   );
  // }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{ delay: 1 }}
        ref={containerRef}
        className="px-0 md:px-40 snap-y snap-mandatory overflow-scroll top-0 h-screen  scroll-smooth"
      >
        {quotes.data.dataQuote.map((q) => (
          <Quotes
            key={q.id}
            containerRef={containerRef}
            date={q.dateQuote}
            quote={q.quote}
            source={q.sourceQuote}
          />
        ))}
      </motion.div>
      <Timeline containerRef={containerRef} quotes={quotes.data.dataQuote} />
    </>
  );
}
