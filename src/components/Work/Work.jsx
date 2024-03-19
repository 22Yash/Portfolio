import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import Mousefollower from "../Animation/Mousefollower";
import LocomotiveScroll from "locomotive-scroll";

function Work() {
  const mousefollowerRef = useRef(null);
  const viewRef = useRef(null);
  const workRef = useRef(null);
  const scrollRef = useRef(null);

  const projectRef = useRef(null);

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
  });

  const mouseIn = () => {
    gsap.to(mousefollowerRef.current, {
      scale: 1.5,
      backgroundColor: "black",
      opacity: 1,
    });
  };

  const mouseOut = () => {
    gsap.to(mousefollowerRef.current, {
      scale: 0,
      backgroundColor: "black",
    });
  };

  useEffect(() => {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".project",
        start: "top top ",
        end: "bottom bottom ",
        scrub: 2,
        markers: true,
      },
      xPercent: -100,
    });
  });

  return (
    <>
      <section id="Work" className="w-full relavtive">
        {/* <Mousefollower /> */}
        <div id="work" ref={workRef} className="">
          <div
            ref={mousefollowerRef}
            id="view"
            className="w-12 h-12 justify-center opacity-0 text-sm flex items-center absolute bg-black text-white rounded-full"
          >
            view
          </div>
          <div id="projects" className="project w-full  ">
            <div className="cont h-[400vh] bg-green-500">
              <div className="slides sticky top-0 left-0  w-full flex h-screen bg-[#0a0a09]">
                <div className="  w-10/12 sticky h-screen  flex-shrink-0 bg-[#0a0a09] ">
                  <div id="project" className=" slide flex m-10  gap-10">
                    <div className="projecttext w-6/12 flex-shrink-0">
                    <h2 className="text-7xl m-10  font-bold w-12 text-center p-10 text-[#bebeb0]">
                    My Work
                  </h2>
                  <p className="text-[#7b736a] m-10 text-3xl w-2/4 text-center">"Bringing ideas to life through creativity and code."</p>

                    </div>
                  
                  <div id="project1" className=" slide w-6/12   text-white flex-shrink-0 bg-[#bebeb0] p-20 m-10 -ml-24 rounded-3xl" >project1</div>
                  <div id="project2" className=" slide w-6/12 flex-shrink-0  bg-[#bebeb0] rounded-3xl"> project2</div>
                <div id="project3" className=" slide w-6/12  flex-shrink-0  bg-[#bebeb0] rounded-3xl"> project3</div>
                <div id="project4" className=" slide w-6/12  flex-shrink-0  bg-[#bebeb0] rounded-3xl"> project4</div>
                

                  </div>
                  
                </div>
                
                
               
                
              </div>
            </div>
            {/* <div
            ref={viewRef}
            onMouseEnter={mouseIn}
            onMouseLeave={mouseOut}
            id="firstproject"
            className="lg:bg-red-400 lg:w-1/4 lg:h-2/4 lg:p-5 lg:m-10 "
          ></div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
