import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import Mousefollower from "../Animation/Mousefollower";
import LocomotiveScroll from "locomotive-scroll";


function Work() {
  const mousefollowerRef = useRef(null);
  const viewRef = useRef(null);
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

  

  



  return (
    <>
      <section id="Work">
        {/* <Mousefollower /> */}
        <div id="work" ref={workRef} className="">
          {/* <div
            ref={mousefollowerRef}
            id="view"
            className="w-12 h-12 justify-center opacity-0 text-sm flex items-center absolute bg-black text-white rounded-full"
          >
            view
          </div> */}
          <div
            id="projects"
            className=" w-full h-screen bg-yellow-400 flex justify-around overflow-x-hidden"
          >
            {/* <div
            ref={viewRef}
            onMouseEnter={mouseIn}
            onMouseLeave={mouseOut}
            id="firstproject"
            className="lg:bg-red-400 lg:w-1/4 lg:h-2/4 lg:p-5 lg:m-10 "
          ></div> */}
            <div  ref= {scrollRef} class="overflow-x-auto whitespace-nowrap mt-32">
              <div class="flex space-x-4">
                <div class="flex-shrink-0 w-64 h-64 bg-gray-200"></div>

                <div class="flex-shrink-0 w-64 h-64 bg-gray-300"></div>

                <div class="flex-shrink-0 w-64 h-64 bg-gray-400"></div>

                <div class="flex-shrink-0 w-64 h-64 bg-gray-500"></div>

                <div class="flex-shrink-0 w-64 h-64 bg-gray-600"></div>

                <div class="flex-shrink-0 w-64 h-64 bg-gray-700"></div>

                <div class="flex-shrink-0 w-64 h-64 bg-gray-800"></div>

                <div class="flex-shrink-0 w-64 h-64 bg-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
