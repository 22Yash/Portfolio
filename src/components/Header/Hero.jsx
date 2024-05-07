import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";


import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwind-scrollbar";
import SlideMenu from "./SlideMenu";
import heroSVG from "./nnnoise.svg";
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

  useEffect(() => {
    // tl.fromTo(
    //   heroHeadingRef.current,
    //   {
    //     y: 80,
    //     opacity: 0,
    //     duration: 1,
    //   },
    //   {
    //     y: 10,
    //     opacity: 1,
    //     duration: 1,
    //     repeat: 0,
    //     delay: 10,
    //   }
    // );

    // tl.fromTo(
    //   roleHeadingOneRef.current,
    //   {
    //     y: 80,
    //     opacity: 0,
    //     duration: 1,
    //     stagger: 1,
    //   },
    //   {
    //     y: -10,
    //     opacity: 1,
    //     duration: 1,
    //     stagger: 1,
    //   }
    // );

    // tl.fromTo(
    //   roleHeadingOnePartRef.current,
    //   {
    //     y: 80,
    //     opacity: 0,
    //     duration: 1,
    //     stagger: 1,
    //   },
    //   {
    //     y: 10,
    //     opacity: 1,
    //     duration: 1,
    //     stagger: 1,
    //   }
    // );

    // tl.fromTo(
    //   roleHeadingTwoRef.current,
    //   {
    //     y: 80,
    //     opacity: 0,
    //     duration: 1,
    //     stagger: 1,
    //   },
    //   {
    //     y: -10,
    //     opacity: 1,
    //     duration: 1,
    //     stagger: 1,
    //   }
    // );

    // tl.fromTo(
    //   infoRef.current,
    //   {
    //     opacity: 0,
    //     stagger: 1,
    //   },
    //   {
    //     opacity: 1,
    //     stagger: 1,
    //   }
    // );

    gsap.set(".zoom",{scale:1})

    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      tl.to(".zoom",{
        scrollTrigger: {
          trigger: ".herotext",
          start: "20 top",
          end:"60 top",
          markers:"true",
          scrub:1
  
         
        },
        scale:0.9
  
      })

      

    }else if (screenWidth <= 1024 && screenWidth > 768) {

    }else{
      tl.to(".zoom",{
        scrollTrigger: {
          trigger: ".herotext",
          start: "-120 top",
          end:"60 top",
          markers:"true",
          scrub:1
  
         
        },
        scale:0.5
  
      })

    }

   
    
    
  });

  return (
    <>


    
<div
      id="hero"
      className="main  w-[560px]  xl:w-full md:w-full sticky h-[115vh]  bg-[#d6d6d0] "
      style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
    >
        
        
        <div id="navbar" ref={navbarRef} style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}>
          <Navbar />
        </div>
        <div id="hamburger" ref={hamburgerRef} className="slidemenu " >
          <SlideMenu/>
        </div>

        
       <section className="zoom">
        <div
          id="heroHeading"
          className="herotext 
         md:ml-28 text-[#3b3834]
         xl:ml-10 xl:tracking-wide xl:pt-20 "
        >
          <h1
            ref={heroHeadingRef}
            className="hero 
          text-7xl font-bold  text-center  pt-20  selection:bg-[#6c665e] selection:text-[#3d3a36]
          md:text-8xl md:font-bold md:font-helvetica md:text-left md:-ml-10
          xl:text-9xl xl:font-bold xl:text-left xl:p-0 xl:ml-72 font-helvetica"
          >
            I'm Yash
          </h1>
        </div>
        <div id="heroRole" className="hero xl:tracking-wide text-[#3b3834]">
          <h1
            className="
          text-7xl font-bold  text-center font-helvetica p-20 flex flex-col selection:bg-[#6c665e] selection:text-[#3d3a36]
          md:text-8xl md:w-5/6 md:text-center md:flex md:p-0 md:ml-20
          xl:text-9xl xl:ml-52 xl:max-w-3/4   xl:flex xl:flex-col xl:p-0 xl:text-center xl:font-bold "
          >
            <div className="flex  flex-col xl:flex  xl:flex-row xl:gap-10 xl:w-3/4">
              <div ref={roleHeadingOneRef} className="h1 mt-3 selection:bg-[#6c665e] selection:text-[#3d3a36]">
                Creative
              </div>
              <div ref={roleHeadingOnePartRef} className="h1 mt-4 selection:bg-[#6c665e] selection:text-[#3d3a36]">
                Frontend
              </div>
            </div>
            <div
              ref={roleHeadingTwoRef}
              className="h1 mt-4 ml-4 md:ml-5 md:-mt-2 xl:-ml-2 selection:bg-[#6c665e] selection:text-[#3d3a36]"
            >
              Developer.
            </div>
          </h1>
        </div>
        <div
          id="info"
          className="hero
        text-2md -mt-16 w-2/3 text-center ml-16 font-medium
        md:mt-5 md:ml-32 
        xl:text-2xl xl:ml-96 xl:mt-10 xl:font-medium xl:w-2/5 xl:text-center text-[#6e6760]"
        >
          <h4 ref={infoRef} className=" mt-16 text-2xl  ml-10 md:mt-10 xl:ml-44 xl:mt-16 selection:bg-[#6c665e] selection:text-[#3d3a36]">
            I like to develop responsive, interactive, and animated websites.
          </h4>
        </div>
       </section>
        
      </div>
    </>
  );
}

export default Hero;
