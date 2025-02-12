import React from "react";
import Marquee from "./Marquee";
import { motion } from "motion/react";
import { aboutData } from "../../Data/Data";

const About = () => {
  const { aboutText, marqueeData } = aboutData;
  return (
    <div className="mt-32 about w-full h-full secondary-rubik flex flex-col justify-center items-center space-y-10 lg:space-y-32">
      <div className="px-10 lg:px-20 about-main flex flex-col justify-center items-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-head primary-rubik text-xl lg:text-6xl"
        >
          About
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="about-content text-lg lg:text-3xl text-center flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-20"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {aboutText}
          </motion.p>
        </motion.div>
      </div>
      <div className="about-marquee w-full overflow-hidden">
        <Marquee marqueeData={marqueeData} />
      </div>
    </div>
  );
};

export default About;
