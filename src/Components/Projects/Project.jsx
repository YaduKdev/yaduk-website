import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Project = ({ index, title, setModal, isLast }) => {
  return (
    <div
      className="flex justify-between w-full items-center border-t border-gray-400 py-10 px-5 group hover:opacity-40 transition-all duration-400 ease-linear cursor-pointer"
      style={isLast ? { borderBottom: "1px solid #99a1af" } : undefined}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      onClick={() => console.log("CLICKED")}
    >
      <h2 className="secondary-rubik text-xl lg:text-5xl group-hover:-translate-x-2.5 transition-all duration-200 ease-linear">
        {title}
      </h2>
      <p className="group-hover:translate-x-2.5 transition-all duration-200 ease-linear text-3xl">
        <GoArrowUpRight />
      </p>
    </div>
  );
};

export default Project;
