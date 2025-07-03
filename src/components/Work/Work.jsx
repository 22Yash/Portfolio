import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import SlideMenu from "../Header/SlideMenu";
import project3 from "./images/project3.png";

function Work() {
  const workRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
      const tlDesktop = gsap.timeline();

      tlDesktop.to(".slide", {
        scrollTrigger: {
          trigger: ".project",
          start: "50 top",
          end: "200 top",
          scrub: 1,
        },
        xPercent: -100,
        duration: 2,
      });

      tlDesktop.to(".work", {
        scrollTrigger: {
          trigger: ".work",
          start: "-630 top",
          end: "-570 top",
          scrub: 2,
          pin: true,
        },
        y: -50,
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
        },
        xPercent: 0,
        duration: 2,
      });
    }
  }, []);

  const mouseIN = (el) => {
    gsap.set(el, { scale: 0.9, transformOrigin: "bottom" });
    gsap.to(el, {
      rotation: -8,
      ease: "power2.inOut",
      scale: 1,
    });
  };

  const mouseOut = (el) => {
    gsap.to(el, {
      rotation: 0,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <SlideMenu />
      <section
        id="Work"
        className="work w-[700px] h-[300vh] sm:h-[280vh] xl:h-screen md:w-full rounded-t-full relative z-4"
      >
        <div id="work" ref={workRef} className="overflow-x-hidden">
          <div
            id="projects"
            className="project w-full bg-[#0d0d0c]"
            style={{ filter: "blur(0px)" }}
          >
            <div className="cont h-[300vh] md:h-[350vh] xl:h-[120vh]">
              <div className="slides grid xl:top-0 xl:left-0 xl:w-full xl:flex h-screen">
                <div className="grid-cols-1 w-1/12 h-[180vh] xl:w-10/12 xl:h-screen xl:flex-shrink-0">
                  <div className="slide col-span-1 xl:flex xl:m-10 xl:gap-10 xl:mt-[120px]">
                    <div className="projecttext w-6/12 text-center ml-20 xl:ml-0 flex-none xl:w-6/12 xl:flex-shrink-0">
                      <h2
                        style={{
                          background: "linear-gradient(hsl(var(--color-white)), hsl(200, 60%, 82%))",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundPosition: "fixed",
                        }}
                        className="text-[70px] w-[500px] ml-[80px] font-bold p-8 text-left md:w-[600px] md:text-7xl md:ml-28 xl:text-7xl xl:m-10 xl:font-bold xl:w-76 xl:-ml-20 xl:text-center xl:p-10 text-[#fff]"
                      >
                        My Work.
                      </h2>
                      <p className="text-[#cbcaca] text-[40px] text-balance ml-5 font-semibold w-[490px] md:w-[800px] md:-ml-24 xl:m-10 xl:text-5xl xl:w-2/4">
                        "Bringing ideas to life through creativity and code."
                      </p>
                    </div>

                    {/* GitHub Organizer Project */}
                    <div
                      id="project1"
                      onMouseEnter={(e) => mouseIN(e.currentTarget.querySelector(".img"))}
                      onMouseLeave={(e) => mouseOut(e.currentTarget.querySelector(".img"))}
                      className="slide w-[600px] h-[450px] ml-[60px] m-10 grid grid-cols-2 xl:mt-32 xl:h-[400px] text-white md:grid md:grid-cols-2 md:w-[680px] rounded-3xl xl:w-6/12 xl:flex-shrink-0 bg-[#bebeb0] xl:rounded-3xl"
                    >
                      <div className="img w-[250px] mt-20 ml-[30px]">
                        <img src={project1} alt="" className="h-[200px]" />
                      </div>
                      <div className="flex flex-col gap-[20px] md:gap-[40px] m-[20px] -ml-[0px]">
                        <h4 className="text-black font-semibold text-[30px] text-center md:text-[20px] xl:mt-[50px] xl:ml-[-9px] mt-[30px]">
                          <a href="https://go-organizer.vercel.app/">🚀 GitHub Organizer</a>
                        </h4>
                        <p className="text-[20px] md:text-[16px] xl:w-[250px] text-white xl:ml-[20px] -mt-[20px]">
                          I built a full-stack web app to analyze and scan GitHub repositories using automated scans.
                          The tool offers interactive dashboards, deep scans, and PDF reports with code health analysis.
                        </p>
                        <h4 className="text-white uppercase text-center xl:ml-[20px] xl:mt-[-10px] flex gap-2">
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full">React</span>
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full">NodeJs</span>
                          <span className="bg-gray-500 w-[120px] p-2 rounded-full">MongoDB</span>
                        </h4>
                        <h4 className="text-white uppercase text-center flex gap-4 xl:ml-[20px] md:-mt-[30px]">
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full">Oauth</span>
                          <span className="bg-gray-500 w-[50px] p-2 rounded-full">JWT</span>
                        </h4>
                      </div>
                    </div>

                    {/* Rejouice Project */}
                    <div
                      id="project3"
                      onMouseEnter={(e) => mouseIN(e.currentTarget.querySelector(".img"))}
                      onMouseLeave={(e) => mouseOut(e.currentTarget.querySelector(".img"))}
                      className="slide w-[600px] h-[450px] ml-[60px] m-10 grid grid-cols-2 xl:mt-32 xl:h-[400px] text-white md:grid md:grid-cols-2 md:w-[680px] rounded-3xl xl:w-6/12 xl:flex-shrink-0 bg-[#bebeb0] xl:rounded-3xl"
                    >
                      <div className="img w-[250px] mt-20 ml-[30px]">
                        <img src={project2} alt="" className="h-[250px]" />
                      </div>
                      <div className="flex flex-col gap-[20px] md:gap-[40px] m-[20px] -ml-[0px]">
                        <h4 className="text-black font-semibold text-[30px] text-center md:text-[20px] xl:mt-[50px] xl:ml-[-9px] mt-[30px]">
                          <a href="https://22yash.github.io/Rejouice-Clone/">Rejouice Clone</a>
                        </h4>
                        <p className="text-[20px] md:text-[16px] xl:w-[250px] text-white xl:ml-[20px] -mt-[20px]">
                          I made Awwwards winning webiste Cynthia Ugwu. It's a website with a lot of animation and interaction.
                        </p>
                        <h4 className="text-white uppercase text-center xl:ml-[20px] flex gap-2">
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full">HTML</span>
                          <span className="bg-gray-500 w-[50px] p-2 rounded-full">CSS</span>
                          <span className="bg-gray-500 w-[120px] p-2 rounded-full">JavaScript</span>
                        </h4>
                        <h4 className="text-white uppercase text-center flex gap-4 xl:ml-[20px] md:-mt-[30px]">
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full">GSAP</span>
                          <span className="bg-gray-500 w-[130px] p-2 rounded-full">Locomotive</span>
                        </h4>
                      </div>
                    </div>

                    {/* Cynthia Ugwu Project */}
                    <div
                      id="project2"
                      onMouseEnter={(e) => mouseIN(e.currentTarget.querySelector(".img"))}
                      onMouseLeave={(e) => mouseOut(e.currentTarget.querySelector(".img"))}
                      className="slide w-[600px] h-[450px] ml-[60px] m-10 grid grid-cols-2 rounded-3xl md:w-[680px] xl:w-6/12 xl:h-[400px] text-white md:grid md:grid-cols-2 xl:flex-shrink-0 bg-[#bebeb0] xl:p-4 xl:mt-32 xl:rounded-3xl hover:bg-[#98988C]"
                    >
                      <div className="img w-[240px] mt-20">
                        <img src={project3} alt="" className="h-[200px]" />
                      </div>
                      <div className="flex flex-col gap-[20px] md:gap-[40px] m-[20px] -ml-[0px]">
                        <h4 className="text-black font-semibold text-[30px] text-center md:text-[20px] mt-[30px]">
                          <a href="https://22yash.github.io/Cynthia_Ugwu-Awwwards-Website--Clone/">Cynthia Ugwu Clone</a>
                        </h4>
                        <p className="text-[20px] md:text-[16px] -mt-[20px]">
                          I made Awwwards winning webiste Cynthia Ugwu. It's a website with a lot of animation and interaction.
                        </p>
                        <h4 className="text-white uppercase text-center flex gap-2">
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full">HTML</span>
                          <span className="bg-gray-500 w-[50px] p-2 rounded-full">CSS</span>
                          <span className="bg-gray-500 w-[120px] p-2 rounded-full">JavaScript</span>
                        </h4>
                        <h4 className="text-white uppercase text-center flex gap-4 md:-mt-[30px]">
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full">GSAP</span>
                          <span className="bg-gray-500 w-[130px] p-2 rounded-full">Locomotive</span>
                        </h4>
                      </div>
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
