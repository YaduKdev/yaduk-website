import React from "react";
import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";
import { certificationData } from "../../Data/Data";

const Certifications = () => {
  return (
    <div className="mt-32 certifications w-full h-full secondary-rubik flex flex-col justify-center items-center space-y-7 lg:space-y-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="certifications-head primary-rubik text-xl lg:text-6xl"
      >
        Certifications
      </motion.div>
      <div className="certifications-content flex flex-col flex-wrap justify-center items-center gap-6 w-[80%] lg:w-[60%]">
        {certificationData.map((certificate, idx) => {
          return (
            <a
              key={`cert_${idx}`}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div
                className="flex justify-between w-full items-center border-t border-gray-400 py-5 px-5 group hover:opacity-40 transition-all duration-400 ease-linear cursor-pointer"
                style={
                  idx == certificationData.length - 1
                    ? { borderBottom: "1px solid #99a1af" }
                    : undefined
                }
              >
                <div className="flex flex-col">
                  <h2 className="secondary-rubik text-xl lg:text-3xl group-hover:-translate-x-2.5 transition-all duration-200 ease-linear">
                    {certificate.name}
                  </h2>
                  <p className="secondary-rubik text-lg lg:text-xl group-hover:-translate-x-2.5 transition-all duration-200 ease-linear">
                    {certificate.platform}
                  </p>
                  <p className="secondary-rubik text-sm lg:text-lg group-hover:-translate-x-2.5 transition-all duration-200 ease-linear">
                    {certificate.completionDate}
                  </p>
                </div>
                <p className="group-hover:translate-x-2.5 transition-all duration-200 ease-linear text-3xl">
                  <GoArrowUpRight />
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
