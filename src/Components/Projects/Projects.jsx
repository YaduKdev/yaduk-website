import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "motion/react";
import { projectsData } from "../../Data/Data";

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [toggleDetails, setToggleDetails] = useState({
    active: false,
    indexValue: 0,
  });
  const isAnimating = useRef(false);

  useEffect(() => {
    let timeoutId;

    if (toggleDetails.active) {
      document.body.style.overflow = "hidden";
      isAnimating.current = false;
    } else {
      isAnimating.current = true;
      document.body.style.overflow = "hidden";

      timeoutId = setTimeout(() => {
        if (isAnimating.current) {
          document.body.style.overflow = "unset";
          isAnimating.current = false;
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
      if (!isAnimating.current) {
        document.body.style.overflow = "unset";
      }
    };
  }, [toggleDetails.active]);

  return (
    <div>
      <h1 className="projects-head primary-rubik text-center text-xl lg:text-6xl pt-20 mb-20">
        Projects
      </h1>
      <div className="h-full flex justify-center items-center relative">
        <div className="w-[80%] lg:w-[60%]">
          {projectsData.map((project, idx) => {
            return (
              <Project
                key={idx}
                index={idx}
                title={project.title}
                setModal={setModal}
                setToggleDetails={setToggleDetails}
                isLast={idx === projectsData.length - 1 ? true : false}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projectsData} />
      </div>
      <AnimatePresence mode="wait">
        {toggleDetails.active && (
          <ProjectDetails
            setToggleDetails={setToggleDetails}
            toggleDetails={toggleDetails}
            projects={projectsData}
            project={projectsData[toggleDetails.indexValue]}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
