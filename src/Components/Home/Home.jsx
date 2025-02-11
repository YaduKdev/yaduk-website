import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Intro from "../Intro/Intro";

const teckStack = [
  "MEAN/MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
];

const letterDelay = 0.025;
const boxFadeDuration = 0.125;
const fadeDelay = 5;
const mainFadeDuration = 0.25;
const swapDelayInMs = 5500;

const Home = () => {
  const [stackIndex, setStackIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStackIndex((prev) => (prev + 1) % teckStack.length);
    }, swapDelayInMs);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <Intro />
      <div className="my-20 px-10 h-[100vh] lg:px-20 hero w-full flex flex-col-reverse lg:flex-row justify-center gap-4 items-center -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 8, ease: "easeInOut" }}
          className="hero-text flex flex-col justify-center items-center space-y-5 text-center"
        >
          <h2 className="text-2xl lg:text-7xl primary-rubik">YADU KRISHNAN</h2>
          <h1 className="text-3xl lg:text-9xl primary-rubik p-4 bg-lime-300">
            WEB DEVELOPER
          </h1>
          <h2 className="text-xl lg:text-3xl mt-4 secondary-rubik">
            {teckStack[stackIndex].split("").map((l, i) => {
              return (
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    delay: fadeDelay,
                    duration: mainFadeDuration,
                    ease: "easeInOut",
                  }}
                  className="relative"
                  key={`${stackIndex}-${i}`}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: i * letterDelay,
                      duration: 0,
                    }}
                  >
                    {l}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      delay: i * letterDelay,
                      times: [0, 0.1, 1],
                      duration: boxFadeDuration,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-black"
                  />
                </motion.span>
              );
            })}
          </h2>
          {/* <p className="text-lg lg:text-2xl secondary-rubik mt-4 text-white">
          Digital Craftmanship For The Modern World
        </p> */}
          <a
            href="/YaduKrishnanCV.pdf"
            download="YaduKrishnanCV.pdf"
            className="mt-4 text-sm lg:text-2xl rounded-full px-4 py-2 bg-black text-white secondary-rubik hover:bg-lime-300 hover:text-black transition-all ease-in-out duration-500"
          >
            Download CV
          </a>
        </motion.div>
        {/* <motion.div
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
      </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
