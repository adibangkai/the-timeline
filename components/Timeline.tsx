"use client";
import { motion, useScroll, useSpring } from "framer-motion";
type TimelineType = {
  containerRef: React.RefObject<HTMLDivElement>;
};
const Timeline = ({ containerRef }: TimelineType) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className=" sticky   w-5/6  mx-auto z-40  bottom-10">
      <ul className="flex justify-between w-full ">
        <li>2019</li>
        <li>2022</li>
        <li>&nbsp;</li>
        <li>2023</li>
      </ul>
      <div className="bottom-10 left-0 w-full bg-gray-200 rounded-full h-1 mt-2.5">
        <motion.div className="time-bar" style={{ scaleX: scrollYProgress }} />
      </div>
      <ul className="flex justify-between w-full text-xs justify-items-start ">
        <li className="">I</li>
        <li className="">I</li>
        <li className="">I</li>
        <li className="">I</li>
      </ul>
    </div>
  );
};
export default Timeline;
