import { motion } from "motion/react";

const letterDelay = 0.025;
const boxFadeDuration = 0.125;
const fadeDelay = 5;
const mainFadeDuration = 0.25;

const TypedTextComponent = ({ l, i }) => {
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
};

export default TypedTextComponent;
