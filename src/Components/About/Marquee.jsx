import React from "react";
import { motion } from "motion/react";

const Marquee = () => {
  const marqueeData = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Motion",
    "Angular",
    "NgRx Store",
    "NodeJS",
    "MongoDB",
    "SQL",
  ];

  return (
    <div className="mx-auto">
      <div className="flex h-20">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marqueeData.map((text, idx) => {
            return (
              <div
                key={idx}
                className="text-4xl lg:text-6xl pr-20 text-yellow-300"
              >
                <p>{text}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marqueeData.map((text, idx) => {
            return (
              <div
                key={idx}
                className="text-4xl lg:text-6xl pr-20 text-yellow-300"
              >
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
