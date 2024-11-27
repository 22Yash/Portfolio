import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";

import heroSVG from "../Header/background.png";


import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwind-scrollbar";
import SlideMenu from "./SlideMenu";

import resume from "./YashDokeResume.pdf";
import ParticlesComponent from "../Animation/ParticleBackground";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroHeadingRef = useRef(null);
  const roleHeadingOneRef = useRef(null);
  const roleHeadingTwoRef = useRef(null);
  const roleHeadingOnePartRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navbarRef = useRef(null);

  const infoRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
      const tlDesktop = gsap.timeline();

      tlDesktop.fromTo(
        heroHeadingRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
        },
        {
          y: 10,
          opacity: 1,
          duration: 1,
          repeat: 0,
          delay: 6,
        }
      );

      tlDesktop.fromTo(
        roleHeadingOneRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlDesktop.fromTo(
        roleHeadingOnePartRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlDesktop.fromTo(
        roleHeadingTwoRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlDesktop.fromTo(
        infoRef.current,
        {
          opacity: 0,
          stagger: 1,
        },
        {
          opacity: 1,
          stagger: 1,
        }
      );
    } else if (screenWidth <= 1024 && screenWidth > 768) {
      const tlTablet = gsap.timeline();

      tlTablet.fromTo(
        heroHeadingRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
        },
        {
          y: 100,
          opacity: 1,
          duration: 1,
          repeat: 0,
          delay: 10,
        }
      );

      tlTablet.fromTo(
        roleHeadingOneRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlTablet.fromTo(
        roleHeadingOnePartRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: 10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlTablet.fromTo(
        roleHeadingTwoRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlTablet.fromTo(
        infoRef.current,
        {
          opacity: 0,
          stagger: 1,
        },
        {
          opacity: 1,
          stagger: 1,
        }
      );
    } else {
      const tlMobile = gsap.timeline();

      tlMobile.fromTo(
        heroHeadingRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
        },
        {
          y: 50,
          opacity: 1,
          duration: 1,
          repeat: 0,
          delay: 10,
        }
      );

      tlMobile.fromTo(
        roleHeadingOneRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlMobile.fromTo(
        roleHeadingOnePartRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlMobile.fromTo(
        roleHeadingTwoRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          duration: 1,
          stagger: 1,
        }
      );

      tlMobile.fromTo(
        infoRef.current,
        {
          y: 10,
          opacity: 0,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          stagger: 1,
        }
      );

      tlMobile.fromTo(
        hamburgerRef.current,
        {
          y: 10,
          opacity: 0,
          stagger: 1,
        },
        {
          y: -10,
          opacity: 1,
          stagger: 1,
        }
      );
    }
  }, []);

  return (
    <>
      <ParticlesComponent />

      <div
        id="hero"
        className="main w-[700px] xl:w-full md:w-full h-[180vh] xl:h-[100vh] z-3 relative"
        style={{
          background: `
      url(${heroSVG}) left bottom / 280% 200% no-repeat`,
          backgroundPosition: "left bottom", // Consistent positioning
          backgroundAttachment: "fixed", // Optional: use if you want a parallax effect
        }}
      >
        <div id="navbar" ref={navbarRef}>
          <Navbar />
        </div>

        <section className="zoom">
          <div
            id="heroHeading"
            className="herotext 
         md:ml-28 text-[#fff] md:flex
         xl:ml-10 xl:tracking-wide xl:pt-20 "
          >
            <h1
              ref={heroHeadingRef}
              className="hero 
          text-[120px] font-bold  text-center mt-[-40px]   selection:bg-[#FFD500] selection:text-[#000]
          md:text-[80px] md:font-bold md:font-helvetica md:text-left md:ml-[20px] md:mt-[-40px]
          xl:text-9xl xl:font-bold xl:text-left  xl:mt-[30px] xl:p-0 xl:ml-72 font-helvetica"
            >
              I'm Yash
            </h1>
            <div
              id="img"
              className="w-[200px] h-[100px] bg-blue-300 ml-[250px] opacity-0"
            >
              efv
            </div>
          </div>
          <div id="heroRole" className="hero xl:tracking-wide text-[#3b3834]">
            <h1
              className="
          text-[120px] font-bold  text-center font-helvetica pt-[10px] flex flex-col mt-[0px]
          md:text-8xl md:w-5/6 md:text-center md:flex md:p-0 md:ml-20 md:mt-[40px] xl:mt-[0px]
          xl:text-9xl xl:ml-52 xl:max-w-3/4   xl:flex xl:flex-col xl:p-0 xl:text-center xl:font-bold "
            >
              <div className="flex  flex-col sm:flex sm:flex-row xl:flex  xl:flex-row xl:gap-10 xl:w-[1200px]">
                <div
                  ref={roleHeadingOneRef}
                  style={{
                    background:
                      "linear-gradient(hsl(var(--color-white)), hsl(200, 60%, 82%))", // Apply the gradient
                    backgroundClip: "text", // Clipping the background to the text
                    WebkitBackgroundClip: "text", // For WebKit browsers (Chrome, Safari)
                    WebkitTextFillColor: "transparent", // Making the text color transparent to show the background
                  }}
                  className="h1 -mt-[30px] sm:text-[80px] xl:text-[128px] xl:mt-[10px] sm:mt-[-20px]  selection:bg-[#FFD500] selection:text-[#000] "
                >
                  Creative
                </div>
                <div
                  ref={roleHeadingOnePartRef}
                  style={{
                    background:
                      "linear-gradient(hsl(var(--color-white)), hsl(200, 60%, 82%))", // Apply the gradient
                    backgroundClip: "text", // Clipping the background to the text
                    WebkitBackgroundClip: "text", // For WebKit browsers (Chrome, Safari)
                    WebkitTextFillColor: "transparent", // Making the text color transparent to show the background
                  }}
                  className="h1 -mt-[60px]  sm:ml-[30px] sm:mt-[-20px] xl:text-[128px] sm:text-[80px] xl:mt-[10px] selection:bg-[#FFD500] selection:text-[#000]"
                >
                  Frontend
                </div>
              </div>
              <div
                ref={roleHeadingTwoRef}
                className="h1 -mt-[60px] ml-4 md:ml-5 sm:text-[80px] md:mt-[0px] xl:text-[128px] xl:-ml-[200px] text-white selection:bg-[#FFD500] selection:text-[#000]"
              >
                Developer.
              </div>
            </h1>
          </div>
          <div
            id="info"
            className="hero 
        text-2md -mt-[30px] w-2/3 text-center ml-[100px] font-medium
        md:mt-5 md:ml-32 
        xl:text-2xl xl:ml-96 xl:-mt-0 xl:font-medium xl:w-2/5 xl:text-center text-[#fff]"
          >
            <h4
              ref={infoRef}
              className=" 
          mt-16 text-[30px] w-full ml-[10px] md:mt-10  xl:mt-[50px] selection:bg-[#FFD500] selection:text-[#000]
            xl:w-[900px] text-center xl:ml-[-80px]"
            >
              I like to develop responsive, interactive, and animated websites.
              <div id="resume" className="flex  justify-center ml-[120px]">
                <button className="bg-[#b6daed] p-[9px] rounded-full text-[20px] text-black mt-[10px] -ml-[150px]">
                  <a href={resume} download="">
                    get my resume offline
                  </a>
                </button>
              </div>
            </h4>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
