import React from "react";
import Marquee from "./Marquee";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="mt-32 about w-full h-full secondary-rubik flex flex-col justify-center items-center space-y-32">
      <div className="px-10 lg:px-20 about-main flex flex-col justify-center items-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-head primary-rubik text-xl lg:text-6xl text-yellow-300"
        >
          About
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-content text-lg lg:text-3xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm Yadu Krishnan, a highly motivated and aspiring web developer
            with a strong passion for creating innovative and user-friendly
            digital experiences. I am eager to contribute my skills and
            enthusiasm to a dynamic team and learn from experienced
            professionals in the industry. My focus is on developing clean,
            responsive, and accessible websites using the latest technologies,
            and I am constantly striving to expand my knowledge and improve my
            coding practices. I am a fast learner and a quick problem-solver,
            and I am confident that I can be a valuable asset to any
            organization.
          </motion.p>
        </motion.div>
      </div>
      <div className="about-marquee w-full overflow-x-hidden">
        <Marquee />
      </div>
    </div>
  );
};

export default About;
