"use client";
import { motion, useScroll } from "framer-motion";
type TimelineType = {
  containerRef: React.RefObject<HTMLDivElement>;
};
const Timeline = ({ containerRef, quotes }: TimelineType) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  const year = (str) => {
    const yearOnly = str.slice(0, 4);
    return yearOnly;
  };
  let yearTimeline = [];
  let set = new Set();
  for (let i = 0; i < quotes.length; i++) {
    if (!set.has(year(quotes[i].dateQuote))) {
      yearTimeline.push(year(quotes[i].dateQuote));
      set.add(year(quotes[i].dateQuote));
    } else {
      yearTimeline.push(" ");
    }
  }
  return (
    <div className=" sticky   w-5/6  mx-auto z-40  bottom-10">
      <ul className="flex justify-between w-full ">
        {yearTimeline.map((q) => {
          return <li key={q}>{q}</li>;
        })}

        {/* <li>{year(q.dateQuote)}</li> */}
      </ul>
      <div className="bottom-10 left-0 w-full bg-gray-200 rounded-full h-1 mt-2.5">
        <motion.div className="time-bar" style={{ scaleX: scrollYProgress }} />
      </div>
      <ul className="flex justify-between w-full text-xs justify-items-start ">
        {quotes.map((q) => (
          <li key={q.id}>I</li>
        ))}
      </ul>
    </div>
  );
};
export default Timeline;
