import React, { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";

const projectsData = [
  {
    id: 1,
    img: "/website-img-3.png",
    title: "Wearhaus - Clothing Store",
    toolkit: "Angular 19, Tailwind CSS, NgRx Store, NodeJS, MongoDB, Razorpay",
    desc: "Wearhaus is a responsive web application for an urban clothing store designed for the youth with user and admin panels within the same build and payment integration through Razorpay.",
    websiteUrl: "https://wearhaus.vercel.app/",
  },
  {
    id: 2,
    img: "/website-img-4.jpg",
    title: "Cinematix - Booking App",
    toolkit: "React, MUI, Redux, NodeJS, MongoDB, Stripe Payments",
    desc: "Cinematix is a responsive online movie ticket booking application with user and admin panels within the same build and payment integration through Stripe Payments.",
    websiteUrl: "https://cinematix-view.onrender.com/",
  },
  {
    id: 3,
    img: "/website-img-3.png",
    title: "Nived V. - Personal Website",
    toolkit: "React, Sass",
    desc: "Nived V. is a simple yet creative portfolio website made wihtout any animation libraries.",
    websiteUrl: "https://yadukdev.github.io/NivedV/",
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
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
                isLast={idx === projectsData.length - 1 ? true : false}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projectsData} />
      </div>
    </div>
  );
};

export default Projects;
