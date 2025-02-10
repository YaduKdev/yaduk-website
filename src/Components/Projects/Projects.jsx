import React, { useEffect, useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "motion/react";

const projectsData = [
  {
    id: 1,
    img: "/website-img-3.png",
    pageImg: "/full-preview-1.jpeg",
    title: "Wearhaus - Clothing Store",
    toolkit:
      "Angular 19, Tailwind CSS, Angular Material, NgRx Store, NodeJS, MongoDB, Razorpay",
    desc: "Wearhaus is a web application for an urban clothing store designed for the youth.",
    websiteUrl: "https://wearhaus.vercel.app/",
    keyFeatures: [
      "Dynamic light and dark Mode",
      "User and admin panels within the same build",
      "Fully Responsive",
      "Payment integration using Razorpay",
      "Built uing Angular 19 standalone components",
    ],
  },
  {
    id: 2,
    img: "/website-img-4.jpg",
    pageImg: "/full-preview-2.jpeg",
    title: "Cinematix - Booking App",
    toolkit: "React, MUI, Redux, NodeJS, MongoDB, Stripe Payments",
    desc: "Cinematix is a responsive online movie ticket booking application with user and admin panels within the same build and payment integration through Stripe Payments.",
    websiteUrl: "https://cinematix-view.onrender.com/",
    keyFeatures: [
      "Dynamic light and dark Mode",
      "User and admin panels within the same build",
      "Fully Responsive",
      "Payment integration using Stripe",
      "Uses concurrency control for booking",
    ],
  },
  {
    id: 3,
    img: "/website-img-3.png",
    pageImg: "/full-preview-3.jpeg",
    title: "Nived V. - Personal Website",
    toolkit: "React, Sass",
    desc: "Nived V. is a simple yet creative portfolio website for Nived V.",
    websiteUrl: "https://yadukdev.github.io/NivedV/",
    keyFeatures: [
      "LIVE Project",
      "Animations using vanilla javascript",
      "Fully Responsive",
    ],
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [toggleDetails, setToggleDetails] = useState({
    active: false,
    indexValue: 0,
  });

  useEffect(() => {
    document.body.style.overflow = toggleDetails.active ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
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
            project={projectsData[toggleDetails.indexValue]}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
