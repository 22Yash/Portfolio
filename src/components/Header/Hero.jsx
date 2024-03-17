import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import Hamburger from "./Hamburger";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwind-scrollbar";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroHeadingRef = useRef(null);
  const roleHeadingOneRef = useRef(null);
  const roleHeadingTwoRef = useRef(null);
  const roleHeadingOnePartRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navbarRef = useRef(null);

  const infoRef = useRef(null);

  const tl = gsap.timeline();

  // useEffect(() => {
  //   //   tl.fromTo(
  //   //     heroHeadingRef.current,
  //   //     {
  //   //       y: 80,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //     },
  //   //     {
  //   //       y: 10,
  //   //       opacity: 1,
  //   //       duration: 1,
  //   //       repeat: 0,
  //   //     }
  //   //   );

  //   //   tl.fromTo(
  //   //     roleHeadingOneRef.current,
  //   //     {
  //   //       y: 80,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //       stagger: 1,
  //   //     },
  //   //     {
  //   //       y: 10,
  //   //       opacity: 1,
  //   //       duration: 1,
  //   //       stagger: 1,
  //   //     }
  //   //   );

  //   //   tl.fromTo(
  //   //     roleHeadingOnePartRef.current,
  //   //     {
  //   //       y: 80,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //       stagger: 1,
  //   //     },
  //   //     {
  //   //       y: 10,
  //   //       opacity: 1,
  //   //       duration: 1,
  //   //       stagger: 1,
  //   //     }
  //   //   );

  //   //   tl.fromTo(
  //   //     roleHeadingTwoRef.current,
  //   //     {
  //   //       y: 80,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //       stagger: 1,
  //   //     },
  //   //     {
  //   //       y: -10,
  //   //       opacity: 1,
  //   //       duration: 1,
  //   //       stagger: 1,
  //   //     }
  //   //   );

  //   //   tl.fromTo(infoRef.current,{
  //   //     opacity:0,
  //   //     stagger:1
  //   //   },{
  //   //     opacity:1,
  //   //     stagger:1
  //   //   })

  //   const el = hamburgerRef.current;

  //   const nr = navbarRef.current;

  //   tl.fromTo(
  //     el,
  //     {
  //       opacity: 0,
  //       y: -30,
  //       duration: 4,
  //     },
  //     {
  //       opacity: 1,
  //       y: 50,

  //       scrollTrigger: {
  //         trigger: nr,
  //         start: "90% 0%",
  //         end: " bottom ",

  //         scrub: true,
  //       },
  //     }
  //   );
  // });

   const tlDesktop = useRef(null);
  const tlMobile = useRef(null);

  useEffect(() => {
    const el = hamburgerRef.current;
    const nr = navbarRef.current;

    // Check if the screen width is greater than the mobile breakpoint (e.g., 768px)
    const isLaptopScreen = window.innerWidth > 768;

    if (isLaptopScreen) {
      // Animation for desktop/laptop screens
      tlDesktop.current = gsap.timeline();

      tlDesktop.current.fromTo(el,
        {
          opacity:0,
          y:-30,
          scale:0,
        },
         {
        opacity: 1,
        y: 50,
        duration: 0.5,
        scale:1,
        scrollTrigger: {
          trigger: nr,
          start: "90% 0%",
          end: "bottom",
          scrub: true,
        },
      });
    } else {
      // Animation for mobile screens
      tlMobile.current = gsap.timeline();

      tlMobile.current.to(el, {
        opacity: 1,
        duration: 0.5,
      });
    }
  }, []);
  return (
    <>
      <div id="hero" className="w-full h-screen bg-[#d6d6d0]">
        <div id="navbar" ref={navbarRef}>
          <Navbar />
        </div>

        <div id="hamburger" ref={hamburgerRef} className="visible">
          <Hamburger />
        </div>

        <div
          id="heroHeading"
          className="
         sm:ml-28
         xl:ml-10 xl:tracking-wide xl:pt-20"
        >
          <h1
            ref={heroHeadingRef}
            className="
          text-6xl font-bold  text-center  pt-20  
          sm:text-8xl sm:font-bold sm:font-helvetica sm:text-left sm:ml-20
          xl:text-9xl xl:font-bold xl:text-left xl:p-0 xl:ml-72 font-helvetica"
          >
            I'm Yash
          </h1>
        </div>
        <div id="heroRole" className="xl:tracking-wide">
          <h1
            className="
          text-6xl font-bold  text-center font-helvetica p-20 flex flex-col
          sm:text-8xl sm:w-5/6 sm:text-center sm:flex sm:p-0 sm:ml-20
          xl:text-9xl xl:ml-52 xl:max-w-3/4   xl:flex xl:flex-col xl:p-0 xl:text-center xl:font-bold "
          >
            <div className="flex  flex-col xl:flex  xl:flex-row xl:gap-10 xl:w-3/4">
              <div ref={roleHeadingOneRef} className="h1">
                Creative
              </div>
              <div ref={roleHeadingOnePartRef} className="h1">
                Frontend
              </div>
            </div>
            <div
              ref={roleHeadingTwoRef}
              className="h1 mt-3 sm:ml-5 sm:-mt-2 xl:-ml-2"
            >
              Developer.
            </div>
          </h1>
        </div>
        <div
          id="info"
          className="
        text-2sm -mt-16 w-2/3 text-center ml-16 font-medium
        sm:mt-5 sm:ml-32 
        xl:text-2xl xl:ml-96 xl:mt-10 xl:font-medium xl:w-2/5 xl:text-center text-[#6e6760]"
        >
          <h4 ref={infoRef} className="xl:ml-44">
            I like to develop responsive, interactive, and animated websites.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Hero;
