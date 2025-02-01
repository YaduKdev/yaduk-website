import React from "react";

const Home = () => {
  const jobPositions = [
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
    "FULLSTACK DEVELOPER",
    "MEAN STACK",
    "MERN STACK",
  ];

  return (
    <div className="home-container flex flex-col items-center w-full h-screen flex-nowrap">
      <div className="h-full w-full flex flex-col items-center justify-center text-center">
        <div className="home-name">
          <p className="text-6xl primary-rubik mb-6 text-red-500">
            YADU KRISHNAN
          </p>
        </div>
        <div className="home-job flex justify-center">
          <div className="home-job-heading relative">
            <p className="text-7xl w-fit primary-rubik p-7 bg-blue-950 text-white">
              WEB DEVELOPER
            </p>
          </div>
        </div>
        <div className="home-tag">
          <p className="secondary-rubik font-extrabold text-3xl mt-9">
            Digital craftsmanship for the modern age.
          </p>
        </div>
      </div>
      <div className="flex bg-blue-950 items-center justify-start w-full overflow-x-hidden">
        <div className=" h-[15%] p-5 flex justify-start items-center gap-14 flex-nowrap animate-loop-scroll-x">
          {jobPositions.map((job, idx) => {
            return (
              <p
                key={idx}
                className="text-5xl p-5 bg-red-500 text-white primary-rubik"
              >
                {job}
              </p>
            );
          })}
        </div>
        <div
          className="h-[15%] p-5 flex justify-start items-center gap-14 flex-nowrap animate-loop-scroll-x"
          aria-hidden="true"
        >
          {jobPositions.map((job, idx) => {
            return (
              <p
                key={idx}
                className="text-5xl p-5 bg-red-500 text-white primary-rubik"
              >
                {job}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
