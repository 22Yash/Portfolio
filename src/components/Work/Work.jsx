import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

import Resume from "./Resume";
import SlideMenu from "../Header/SlideMenu";
import workSVG from "./work.svg";
import project1 from "./images/project1.png";

function Work() {
  const mousefollowerRef = useRef(null);
  const workRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = mousefollowerRef.current;
    const work = workRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(el, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "back.out",
      });
    };

    work.addEventListener("mousemove", handleMouseMove);

    return () => {
      work.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: workRef.current,
      smooth: true,
      multiplier: 0.5, // Adjust this value to slow down the scroll speed
    });

    scrollRef.current = scroll;

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
      // Animation for desktop/laptop screens
      const tlDesktop = gsap.timeline();

      tlDesktop.to(".slide", {
        scrollTrigger: {
          trigger: ".project",
          start: "-400 top",
          end: "-300 top",
          scrub: 1,
          markers: true,
        },
        xPercent: -100,
        duration: 2,
      });

      tlDesktop.to(".work", {
        scrollTrigger: {
          trigger: ".work",
          start: "-680 top",
          end: "-570 top",
          scrub: 2,
          markers: true,
          pin: true,
        },
        y: -350,
        duration: 0.5,
        borderRadius: "20px",
      });
    } else if (screenWidth <= 1024 && screenWidth > 768) {
      const tlTablet = gsap.timeline();

      tlTablet.to(".slide", {
        scrollTrigger: {
          trigger: ".project",
          start: "-200 top",
          end: "0 top",
          scrub: 1,
          markers: true,
        },
        xPercent: 0,
        duration: 2,
      });
    } else {
      const tlMobile = gsap.timeline();

      tlMobile.to(".work", {
        scrollTrigger: {
          trigger: ".work",
          start: "-920 top",
          end: "-570 top",
          scrub: 2,
          markers: true,
          pin: true,
        },
        y: -650,
        duration: 5,
        borderRadius: "20px",
      });
    }
  }, []);

  return (
    <>
      <SlideMenu />
      <section
        id="Work"
        className="work w-[560px] xl:w-full md:w-full rounded-t-full"
      >
        <div id="work" ref={workRef} className="overflow-x-hidden">
          <div
            ref={mousefollowerRef}
            id="view"
            className="w-12 h-12 justify-center opacity-0 text-md flex items-center absolute bg-black text-white rounded-full"
          >
            view
          </div>
          <div
            id="projects"
            
            data-scroll-speed=".2"
            className="project w-full"
            style={{ backgroundImage: `url(${workSVG})`, backgroundSize: "cover" }}
          >
            <div className="cont h-[280vh] md:h-[350vh] xl:h-[120vh] bg-[#0d0d0c]">
              <div
                className="slides grid xl:top-0 xl:left-0 xl:w-full xl:flex h-screen bg-[#0d0d0c]"
                style={{ backgroundImage: `url(${workSVG})`, backgroundSize: "cover" }}
              >
                <div className="grid-cols-1 w-1/12 h-screen xl:w-10/12 xl:h-screen xl:flex-shrink-0">
                  <div
                    id="project"
                    className="slide col-span-1 xl:flex xl:m-10 xl:gap-10"
                  >
                    <div
                      className="projecttext w-6/12 text-center ml-20 xl:ml-0 flex-none xl:w-6/12 xl:flex-shrink-0"
                    >
                      <h2 className="text-6xl w-[500px] font-bold p-8 text-left md:w-[600px] md:text-7xl md:ml-28 xl:text-7xl xl:m-10 xl:font-bold xl:w-76 xl:-ml-20 xl:text-center xl:p-10 text-[#bebeb0]">
                        My Work.
                      </h2>
                      <p className="text-[#7b736a] text-2xl text-balance ml-5 font-semibold w-72 md:w-[800px] md:-ml-24 xl:m-10 xl:text-5xl xl:w-2/4">
                        "Bringing ideas to life through creativity and code."
                      </p>
                    </div>

                    <div
                      id="project1"
                      data-speed-1
                      className="slide w-[430px] h-[400px] ml-[60px] m-10 rounded-3xl md:w-[680px] xl:w-6/12 xl:h-[400px] text-white xl:flex-shrink-0 bg-[#bebeb0] xl:p-20 xl:mt-32 xl:-ml-24 xl:rounded-3xl"
                    >
                      <img src={project1} alt="" />
                    </div>
                    <div
                      id="project2"
                      className="slide w-[430px] h-[400px] ml-[60px] m-10 xl:mt-32 md:w-[680px] rounded-3xl xl:w-6/12 xl:flex-shrink-0 bg-[#bebeb0] xl:rounded-3xl"
                    >
                      project2
                    </div>
                    <div
                      id="project3"
                      className="slide w-[430px] h-[400px] ml-[60px] m-10 xl:mt-32 md:w-[680px] rounded-3xl xl:w-6/12 xl:flex-shrink-0 bg-[#bebeb0] xl:rounded-3xl"
                    >
                      project3
                    </div>
                    <div
                      id="project4"
                      className="slide w-[430px] h-[400px] ml-[60px] xl:mt-32 md:w-[680px] rounded-3xl xl:w-6/12 xl:flex-shrink-0 bg-[#bebeb0] xl:rounded-3xl"
                    >
                      project4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
