import React from "react";
import { pageLinks, socialLinks } from "./MenuData";
import { motion } from "motion/react";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (idx) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.2,
      opacity: { duration: 0.35 },
      delay: 0.5 + idx * 0.1,
      ease: [0.255, 0.61, 0.355, 0.1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (idx) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + idx * 0.1,
      ease: [0.255, 0.61, 0.355, 0.1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const MenuLinks = ({ setIsActive }) => {
  return (
    <div className="h-full px-[40px] pt-[100px] pb-[50px] box-border flex flex-col justify-between w-[90%]">
      <div className="page-links flex flex-col gap-3">
        {pageLinks.map((link, idx) => {
          return (
            <div key={idx} className="page-link-container perspective-[120px]">
              <motion.div
                custom={idx}
                className="page-link text-black text-3xl lg:text-4xl secondary-rubik"
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <a href={`#${link.link}`} onClick={() => setIsActive(false)}>
                  {link.name}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="social-links flex flex-wrap gap-1 justify-between">
        {socialLinks.map((link, idx) => {
          return (
            <motion.a
              key={`sl_${idx}`}
              className="text-black w-[40%] secondary-rubik"
              custom={idx}
              variants={slideIn}
              animate="enter"
              exit="exit"
              initial="initial"
              href={link.link}
              target="_blank"
            >
              {link.name}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default MenuLinks;
