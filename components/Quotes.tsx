import { motion } from "framer-motion";
import Link from "next/link";

type QuotesType = {
  containerRef: React.RefObject<HTMLDivElement>;
  quote: string;
  source: string;
  date: Date;
};
const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("id", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

function Quotes({ containerRef, quote, source, date }: QuotesType) {
  return (
    <motion.div
      viewport={{ once: true, root: containerRef }}
      id="jkt"
      className="snap-always snap-start w-full md:w-5/6 px-10  pt-[30%] md:pt-[16%] h-screen transition-opacity duration-800 ease-in-out opacity-100 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true, amount: 0.8 }}
        className="tanggal text-zinc-400 font-extralight "
      >
        {formatDate(date)}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true, amount: 0.8 }}
        className="quotes  text-2xl md:text-4xl font-extralight secondary-content "
      >
        &quot;{quote}&quot;
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, type: "tween" }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true, amount: 0.8 }}
        className="sumber text-zinc-400 font-extralight text-xs mt-2"
      >
        <Link href={source} className="hover:opacity-50" target="_blank">
          (sumber)
        </Link>
      </motion.div>
    </motion.div>
  );
}
export default Quotes;
