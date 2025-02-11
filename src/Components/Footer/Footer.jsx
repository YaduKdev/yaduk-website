import React from "react";

const Footer = () => {
  return (
    <div
      className="relative w-full h-[100vh] z-50"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed w-full h-[100vh] bg-black text-white flex flex-col justify-between bottom-0 left-0 p-10">
        <div className="flex flex-col sm:flex-row gap-28 w-28 sm:w-full">
          <div className="menu-links-container flex flex-col text-lg md:text-xl">
            <h1 className="secondary-rubik font-bold text-xl md:text-2xl mb-6">
              Sitemap
            </h1>
            <div className="flex flex-col gap-4">
              <a href="#homesection" className="hover:text-lime-300">
                Home
              </a>
              <a href="#projectssection" className="hover:text-lime-300">
                Projects
              </a>
              <a href="#aboutsection" className="hover:text-lime-300">
                About
              </a>
              <a href="#certificationssection" className="hover:text-lime-300">
                Certifications
              </a>
              <a href="#contactsection" className="hover:text-lime-300">
                Contact
              </a>
            </div>
          </div>
          <div className="social-links-container flex flex-col text-lg md:text-xl">
            <h1 className="secondary-rubik font-bold text-xl md:text-2xl mb-6">
              Links
            </h1>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/YaduKdev/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime-300"
              >
                Linked In
              </a>
              <a
                href="https://www.linkedin.com/in/yadu-krishnan-web-developer/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime-300"
              >
                Github
              </a>
              <a
                href="/YaduKrishnanCV.pdf"
                download="YaduKrishnanCV.pdf"
                className="hover:text-lime-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl md:text-9xl primary-rubik">
            {" "}
            &copy; {new Date().getFullYear()} Yadu Krishnan
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
