import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const Intro = ({ introData }) => {
  const comp = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useLayoutEffect(() => {
    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };

    lockScroll();

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          setAnimationComplete(true);
          unlockScroll();
        },
      });

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
        .to("#intro-section", {
          yPercent: "-100",
          duration: 1,
        })
        .to("#intro-section", {
          scale: 0,
          duration: 0,
        })
        .set(comp.current, {
          display: "none",
        });
    }, comp);

    return () => {
      ctx.revert();
      if (!animationComplete) {
        lockScroll();
      }
    };
  }, []);

  if (animationComplete) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50" ref={comp}>
      <div id="intro-section" className="relative">
        <div
          id="intro-slider"
          className="h-[100vh] p-10 absolute top-0 bg-white left-0 primary-rubik w-full flex flex-col justify-center gap-10 tracking-tight"
        >
          {introData.map((intro, idx) => {
            return (
              <h1
                key={`intro_${idx}`}
                id={`title-${idx + 1}`}
                className="text-4xl md:text-9xl"
              >
                {intro}
              </h1>
            );
          })}
        </div>
        <div className="h-[100vh] flex bg-lime-300 justify-center place-items-center">
          <h1 id="welcome" className="text-4xl md:text-9xl primary-rubik">
            Welcome.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
