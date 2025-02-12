import React from "react";
import { motion } from "motion/react";

const Marquee = ({ marqueeData }) => {
  return (
    <div className="mx-auto">
      <div className="flex items-center h-16 lg:h-24 bg-lime-300">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center"
        >
          {marqueeData.map((text, idx) => {
            return (
              <div key={idx} className="text-2xl lg:text-6xl pr-20">
                <p>{text}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center"
        >
          {marqueeData.map((text, idx) => {
            return (
              <div key={idx} className="text-2xl lg:text-6xl pr-20">
                <p>{text}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
