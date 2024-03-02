import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import Mousefollower from "../Animation/Mousefollower";

function Work() {
  const mousefollowerRef = useRef(null);
  const viewRef = useRef(null);
  const workRef = useRef(null);

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
    <Mousefollower/>
      <div id="work" ref={workRef}>
        <div
          ref={mousefollowerRef}
          id="view"
          className="w-12 h-12 justify-center opacity-0 text-sm flex items-center absolute bg-black text-white rounded-full"
        >
          view
        </div>
        <div
          id="projects"
          className=" w-full h-screen bg-yellow-400 flex justify-around "
        >
          <div
            ref={viewRef}
            onMouseEnter={mouseIn}
            onMouseLeave={mouseOut}
            id="firstproject"
            className="lg:bg-red-400 lg:w-1/4 lg:h-2/4 lg:p-5 lg:m-10 "
          ></div>
          <div
            ref={viewRef}
            onMouseEnter={mouseIn}
            onMouseLeave={mouseOut}
            id="firstproject"
            className="lg:bg-red-400 lg:w-1/4 lg:h-2/4 lg:p-5 lg:m-10 "
          ></div>
        </div>
      </div>
    </>
  );
}

export default Work;
