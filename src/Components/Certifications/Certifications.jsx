import React from "react";
import { motion } from "motion/react";

const Certifications = () => {
  const certificationData = [
    {
      name: "Web Design For Everybody",
      platform: "University Of Michigan",
      link: "https://drive.google.com/file/d/1EIrp_hVYqnw4HCV7pr9x4dOjLponHSDP/view",
      completionDate: "2025",
    },
    {
      name: "Google Cloud Essentials",
      platform: "Google Cloud Skills Boost",
      link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001",
      completionDate: "2023-2024",
    },
    {
      name: "Programming Essentials In Python",
      platform: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1Cc9ufECCc4gQiJLdvPdmnZQ0EsI4gWqq/view",
      completionDate: "2024",
    },
    {
      name: "SQL Fundamentals",
      platform: "Oracle",
      link: "https://drive.google.com/file/d/1UVW-uppS0Ubq3AUigRQzqs6saWT2Fe8v/view",
      completionDate: "2014",
    },
  ];

  return (
    <div className="mt-32 certifications w-full h-full secondary-rubik flex flex-col justify-center items-center space-y-7 lg:space-y-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="certifications-head primary-rubik text-xl lg:text-6xl"
      >
        Certifications
      </motion.div>
      <div className="certifications-content flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">
        {certificationData.map((certificate, idx) => {
          return (
            <motion.div
              // initial={{ scale: 0 }}
              // whileInView={{ scale: 1 }}
              // transition={{ duration: 0.8, ease: "easeInOut" }}
              key={idx}
              className="flex flex-col w-[90%] lg:w-80 lg:h-44 p-2 lg:p-4 bg-white relative"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="absolute -top-1 -left-1 w-[35%] h-[35%] bg-lime-300 rounded-lg -z-1"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="absolute -top-1 -right-1 w-[35%] h-[35%] bg-lime-300 rounded-lg -z-1"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="absolute -bottom-1 -left-1 w-[35%] h-[35%] bg-lime-300 rounded-lg -z-1"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="absolute -bottom-1 -right-1 w-[35%] h-[35%] bg-lime-300 rounded-lg -z-1"
              />
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="text-lg text-center mb-3"
              >
                {certificate.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="text-sm text-center"
              >
                {certificate.platform}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="text-sm text-gray-500 text-center mb-2"
              >
                {certificate.completionDate}
              </motion.p>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-center">View Certificate</p>
              </motion.a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
