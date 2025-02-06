import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";

const projectsData = [
  {
    id: 1,
    img: "/website-img-1.jpg",
    title: "Wearhaus - Clothing Store",
    desc: "This is a temp description",
    websiteUrl: "https://wearhaus.vercel.app/",
  },
  {
    id: 2,
    img: "/website-img-2.png",
    title: "Cinematix - Movie Booking App",
    desc: "This is a temp description",
    websiteUrl: "https://cinematix-view.onrender.com/",
  },
  {
    id: 3,
    img: "/website-img-3.png",
    title: "Nived V. - Personal Website",
    desc: "This is a temp description",
    websiteUrl: "https://yadukdev.github.io/NivedV/",
  },
];

const Project = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section
      id={project.id === 1 ? "projectssection" : "otherprojects"}
      className="project"
    >
      <div className="project-container flex justify-center items-center w-full h-full overflow-hidden">
        <div className="wrapper max-w-full px-4 h-full m-auto flex gap-12 items-center justify-center">
          <div
            className="img-container flex-1 h-1/2 rounded-xl overflow-hidden"
            ref={ref}
          >
            <img
              src={project.img}
              alt={`Preview Picture Of ${project.title}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <motion.div
            className="project-text flex-1 flex flex-col gap-7"
            style={{ y, transition: { ease: "easeInOut" } }}
          >
            <h2 className="primary-rubik text-xl lg:text-4xl text-pink-600">
              {project.title}
            </h2>
            <p className="text-lg lg:text-3xl">{project.desc}</p>
            <button className="primary-rubik rounded-2xl border-none px-4 py-2 bg-white text-black w-[200px] cursor-pointer">
              View Website
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects secondary-rubik relative" ref={ref}>
      <div className="progress sticky top-0 left-0 text-center z-10">
        <h1 className="project-header primary-rubik text-xl lg:text-6xl p-7 bg-black text-pink-600">
          Projects
        </h1>
        <motion.div
          style={{ scaleX }}
          className="progress-bar h-2.5 bg-pink-600"
        ></motion.div>
      </div>
      {projectsData.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
