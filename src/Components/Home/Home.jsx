import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Intro from "./Intro";
import { homeData } from "../../Data/Data";
import TypedTextComponent from "./TypedTextComponent";

const swapDelayInMs = 5500;

const Home = () => {
  const { name, jobPosition, cv, techStack, introData } = homeData;
  const [stackIndex, setStackIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStackIndex((prev) => (prev + 1) % techStack.length);
    }, swapDelayInMs);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <Intro introData={introData} />
      <div className="my-20 px-10 h-[100vh] lg:px-20 hero w-full flex flex-col-reverse lg:flex-row justify-center gap-4 items-center -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 8, ease: "easeInOut" }}
          className="hero-text flex flex-col justify-center items-center space-y-5 text-center"
        >
          <h2 className="text-2xl lg:text-7xl primary-rubik">{name}</h2>
          <h1 className="text-3xl lg:text-9xl primary-rubik p-4 bg-lime-300 dark:bg-yellow-300 text-black dark:text-black">
            {jobPosition}
          </h1>
          <h2 className="text-xl lg:text-3xl mt-4 secondary-rubik">
            {techStack[stackIndex].split("").map((l, i) => {
              return (
                <TypedTextComponent key={`${stackIndex}-${i}`} l={l} i={i} />
              );
            })}
          </h2>
          <a
            href={cv.location}
            download={cv.name}
            className="mt-4 text-sm lg:text-2xl rounded-full px-4 py-2 bg-black text-white secondary-rubik hover:bg-lime-300 hover:text-black transition-all ease-in-out duration-500"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
