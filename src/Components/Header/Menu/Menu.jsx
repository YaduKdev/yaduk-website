import React from "react";
import { AnimatePresence, motion } from "motion/react";
import MenuLinks from "./MenuLinks";

const Menu = ({ isActive, setIsActive }) => {
  const variants = {
    open: {
      width: 350,
      height: 500,
      top: -7,
      right: -7,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      top: 0,
      right: 0,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="relative">
      <motion.div
        className="menu-dialog w-[350px] h-[500px] bg-white rounded-2xl relative flex items-center pl-4"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <MenuLinks setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
      <div className="overflow-hidden absolute top-0 right-0">
        <motion.div
          className="slider flex justify-center items-center relative"
          animate={{ top: isActive ? -40 : 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="primary-rubik w-[100px] cursor-pointer rounded-full bg-white text-black px-4 py-2 text-center">
            <p>Menu</p>
          </div>
          <div className="primary-rubik w-[100px] cursor-pointer rounded-full bg-black text-white px-4 py-2 absolute top-full text-center">
            <p>Close</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
