import React from "react";
import { motion } from "motion/react";

const ProjectDetails = ({ setToggleDetails, project }) => {
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
          className="cursor-pointer py-2 px-4 rounded-full bg-black text-white fixed top-2 right-5 secondary-rubik text-xl hover:bg-lime-300 hover:text-black transition-all ease-in-out duration-500"
        >
          Projects
        </div>
        <div className="project-details-container w-full flex flex-col justify-center items-center px-10 mt-20 lg:px-40">
          <div className="project-title-container w-full border-b pb-10 border-black">
            <h1 className="primary-rubik text-xl lg:text-4xl text-center">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col my-10 lg:flex-row lg:gap-4 justify-center lg:justify-between items-center lg:items-start w-full">
            <div className="flex flex-col items-center lg:items-start lg:w-[60%]">
              <div className="techStack-container mb-10">
                <div className="techstack secondary-rubik flex flex-col lg:items-start items-center">
                  <h1 className="text-xl lg:text-3xl font-semibold mb-4">
                    Toolkit
                  </h1>
                  <p className="font-medium text-xl lg:text-2xl">
                    {project.toolkit}
                  </p>
                </div>
              </div>
              <div className="about-container mb-10">
                <div className="about secondary-rubik flex flex-col lg:items-start items-center">
                  <h1 className="text-xl lg:text-3xl font-semibold mb-4">
                    What's it about?
                  </h1>
                  <p className="font-medium text-xl lg:text-2xl">
                    {project.desc}
                  </p>
                </div>
              </div>
              <div className="features-container mb-10">
                <div className="features secondary-rubik flex flex-col lg:items-start items-center">
                  <h1 className="text-xl lg:text-3xl font-semibold mb-4">
                    Key Features
                  </h1>
                  <ul className="lg:ml-4">
                    {project.keyFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        className="font-medium text-xl lg:text-2xl mb-4 flex lg:flex-nowrap items-center"
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
              </div>
              <div className="links-container secondary-rubik flex flex-col lg:flex-row justify-center mb-4 lg:mb-0 lg:justify-between items-center gap-3">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cursor-pointer py-2 px-4 rounded-full border border-black text-xl hover:bg-black hover:text-white transition-all ease-in-out duration-500">
                    Website
                  </div>
                </a>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block"
                >
                  <div className="cursor-pointer py-2 px-4 rounded-full border border-black text-xl hover:bg-black hover:text-white transition-all ease-in-out duration-500">
                    Code: View
                  </div>
                </a>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block"
                >
                  <div className="cursor-pointer py-2 px-4 rounded-full border border-black text-xl hover:bg-black hover:text-white transition-all ease-in-out duration-500">
                    Code: API
                  </div>
                </a>
              </div>
            </div>
            <div className="h-[70vh] rounded-xl border-2 border-black overflow-hidden">
              <img
                className="h-full object-top"
                src={project.pageImg}
                alt="Full Webpage Preview"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
