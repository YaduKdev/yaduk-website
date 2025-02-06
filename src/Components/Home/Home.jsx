import React from "react";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="my-20 px-10 h-full lg:px-20 hero w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-4 items-center -z-10">
      <motion.div
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="hero-text flex flex-col justify-center items-center text-lime-300 space-y-5 text-center"
      >
        <h2 className="text-xl lg:text-5xl primary-rubik">YADU KRISHNAN</h2>
        <h1 className="text-2xl lg:text-7xl primary-rubik">WEB DEVELOPER</h1>
        <p className="text-lg lg:text-2xl secondary-rubik mt-4 text-white">
          Digital Craftmanship For The Modern World
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="hero-img relative"
      >
        <img
          src="/2.jpg"
          alt="Profile Picture"
          className="max-h-[700px] lg:absolute"
          style={{ zIndex: "-1" }}
        />
        <img
          src="/blur.jpg"
          alt="Blurred Picture"
          className="max-h-[700px] hidden lg:block"
          style={{ zIndex: "0" }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
