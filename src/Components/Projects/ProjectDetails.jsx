import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const ProjectDetails = ({
  setToggleDetails,
  project,
  projectsLength,
  projects,
  toggleDetails,
}) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  //   const slide = {
  //     initial: {
  //       top: "100vh",
  //     },
  //     enter: {
  //       top: "100vh",
  //     },

  //     exit: {
  //       top: "0",
  //       transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
  //     },
  //   };
  const slide = {
    initial: {
      y: "100%",
      opacity: 1,
    },
    enter: {
      y: ["100%", "0%", "100%"],
      opacity: 1,
      transition: {
        y: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 1], // This controls the timing of each keyframe
        },
      },
    },
    exit: {
      y: ["100%", "0%", "100%"],
      opacity: 1,
      transition: {
        y: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 1], // This controls the timing of each keyframe
        },
      },
    },
  };

  const slideHeadEnter = {
    initial: {
      display: "none",
    },
    enter: {
      display: "block",
    },
    exit: {
      opacity: 0,
    },
  };

  const slideHeadExit = {
    initial: {
      display: "none",
    },
    enter: {
      display: "none",
    },
    exit: {
      display: "block",
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.4,
      },
    },
  };

  const [direction, setDirection] = useState(1);

  const projectAnim = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        },
        x: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      transition: {
        opacity: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
        x: {
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    }),
  };

  const handleProjectChange = (navDirection) => {
    setDirection(navDirection === "next" ? 1 : -1);

    if (navDirection === "next") {
      if (toggleDetails.indexValue === projects.length - 1) {
        setToggleDetails({ active: true, indexValue: 0 });
      } else {
        setToggleDetails((prev) => ({
          active: true,
          indexValue: prev.indexValue + 1,
        }));
      }
    }

    if (navDirection === "prev") {
      if (toggleDetails.indexValue === 0) {
        setToggleDetails({ active: true, indexValue: projects.length - 1 });
      } else {
        setToggleDetails((prev) => ({
          active: true,
          indexValue: prev.indexValue - 1,
        }));
      }
    }
  };

  const currentProject = projects[toggleDetails.indexValue];

  return (
    <div>
      <motion.div
        {...anim(slide)}
        layoutId="projectTransition"
        className="fixed top-0 left-0 bg-lime-300 w-full h-[100vh] z-50 flex flex-wrap justify-center items-center"
      >
        <motion.h1
          {...anim(slideHeadExit)}
          className="primary-rubik text-3xl lg:text-7xl"
        >
          Projects
        </motion.h1>
        <motion.h1
          {...anim(slideHeadEnter)}
          className="primary-rubik text-3xl lg:text-7xl"
        >
          {project.title}
        </motion.h1>
      </motion.div>
      <motion.div
        {...anim(opacity)}
        className="w-full h-[100vh] fixed top-0 left-0 bg-white z-40 overflow-y-scroll"
      >
        <div
          onClick={() => setToggleDetails({ active: false, indexValue: 0 })}
          className="cursor-pointer py-2 px-4 rounded-full bg-black text-white fixed top-2 right-7 secondary-rubik text-xl hover:bg-lime-300 hover:text-black transition-all ease-in-out duration-500"
        >
          Projects
        </div>
        <div className="project-details-container w-full flex flex-col justify-center items-center px-10 mt-20 lg:px-40 gap-2">
          <div className="project-title-container w-full border-b pb-10 border-black flex justify-between items-center">
            <p
              className="text-2xl lg:text-5xl cursor-pointer"
              onClick={() => handleProjectChange("prev")}
            >
              <GoChevronLeft />
            </p>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.h1
                key={currentProject.title}
                custom={direction}
                variants={projectAnim}
                initial="initial"
                animate="animate"
                exit="exit"
                className="primary-rubik text-xl lg:text-4xl text-center"
              >
                {currentProject.title}
              </motion.h1>
            </AnimatePresence>
            <p
              className="text-2xl lg:text-5xl cursor-pointer"
              onClick={() => handleProjectChange("next")}
            >
              <GoChevronRight />
            </p>
          </div>
          <div className="flex flex-col my-10 lg:flex-row lg:gap-4 justify-center lg:justify-between items-center lg:items-start w-full">
            <div className="flex flex-col items-center lg:items-start lg:w-[60%]">
              <div className="techStack-container mb-10">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentProject.toolkit}
                    custom={direction}
                    variants={projectAnim}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="techstack secondary-rubik flex flex-col items-start"
                  >
                    <h1 className="text-xl lg:text-3xl font-semibold mb-4">
                      Toolkit
                    </h1>
                    <p className="font-medium text-xl lg:text-2xl">
                      {currentProject.toolkit}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject.desc}
                  custom={direction}
                  variants={projectAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="about-container mb-10"
                >
                  <div className="about secondary-rubik flex flex-col items-start">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-4">
                      What's it about?
                    </h1>
                    <p className="font-medium text-xl lg:text-2xl">
                      {currentProject.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject.keyFeatures}
                  custom={direction}
                  variants={projectAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="features-container mb-10"
                >
                  <div className="features secondary-rubik flex flex-col items-start">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-4">
                      Key Features
                    </h1>
                    <ul className="lg:ml-4">
                      {currentProject.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          className="font-medium text-xl lg:text-2xl mb-4 flex lg:flex-nowrap lg:items-center"
                        >
                          <div className="hidden lg:flex h-10 w-10 justify-center items-center p-2 rounded-full border border-black">
                            {idx + 1}
                          </div>{" "}
                          <span className="block lg:hidden">-</span>
                          &nbsp; {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProject.links.websiteUrl}
                  custom={direction}
                  variants={projectAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="links-container secondary-rubik flex flex-col lg:flex-row justify-center mb-12 lg:mb-0 lg:justify-between items-center gap-3 lg:w-auto w-full"
                >
                  <a
                    href={currentProject.links.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:w-auto w-full"
                  >
                    <div className="cursor-pointer text-center py-2 px-4 rounded-full border border-black text-xl hover:bg-black hover:text-white transition-all ease-in-out duration-500 lg:w-auto w-full">
                      Website
                    </div>
                  </a>
                  <a
                    href={currentProject.links.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:w-auto w-full"
                  >
                    <div className="cursor-pointer text-center py-2 px-4 rounded-full border border-black text-xl hover:bg-black hover:text-white transition-all ease-in-out duration-500 lg:w-auto w-full">
                      View
                    </div>
                  </a>
                  {currentProject.links.apiUrl && (
                    <a
                      href={currentProject.links.apiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:w-auto w-full"
                    >
                      <div className="cursor-pointer text-center py-2 px-4 rounded-full border border-black text-xl hover:bg-black hover:text-white transition-all ease-in-out duration-500 lg:w-auto w-full">
                        API
                      </div>
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject.pageImg}
                custom={direction}
                variants={projectAnim}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-[50vh] lg:h-[70vh] rounded-xl border-2 border-black overflow-hidden"
              >
                <img
                  className="h-full object-top"
                  src={currentProject.pageImg}
                  alt="Full Webpage Preview"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
