import React from "react";
import { menuData } from "../../Data/Data";
import { homeData } from "../../Data/Data";

const Footer = () => {
  const { pageLinks, socialLinks } = menuData;
  const { cv } = homeData;

  return (
    <div
      className="relative w-full h-[100vh] z-50"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed w-full h-[100vh] bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between bottom-0 left-0 p-10">
        <div className="flex flex-col sm:flex-row gap-28 w-28 sm:w-full">
          <div className="menu-links-container flex flex-col text-lg md:text-xl">
            <h1 className="secondary-rubik font-bold text-xl md:text-2xl mb-6">
              Sitemap
            </h1>
            <div className="flex flex-col gap-4">
              {pageLinks.map((link, idx) => {
                return (
                  <a
                    key={`footerp_${idx}`}
                    href={link.link}
                    className="hover:text-lime-300 dark:hover:text-yellow-300"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="social-links-container flex flex-col text-lg md:text-xl">
            <h1 className="secondary-rubik font-bold text-xl md:text-2xl mb-6">
              Links
            </h1>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link, idx) => {
                return (
                  <a
                    key={`fooerS_${idx}`}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-300 dark:hover:text-yellow-300"
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href={cv.location}
                download={cv.name}
                className="hover:text-lime-300 dark:hover:text-yellow-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl md:text-9xl secondary-rubik font-extrabold">
            {" "}
            &copy; {new Date().getFullYear()} Yadu Krishnan
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
