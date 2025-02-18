import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const trackMouse = (e) => {
      const { clientX, clientY } = e;

      moveContainerX(clientX);
      moveContainerY(clientY);
    };

    window.addEventListener("mousemove", trackMouse);

    return () => window.removeEventListener("mousemove", trackMouse);
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="h-[350px] w-[400px] md:flex hidden items-center justify-center absolute overflow-hidden pointer-events-none"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        >
          {projects.map((project, idx) => {
            return (
              <div
                key={`modal_${idx}`}
                className="bg-black dark:bg-black relative h-full flex justify-center items-center"
              >
                <img
                  src={project.img}
                  alt="Project Image"
                  className="w-[300px] h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
