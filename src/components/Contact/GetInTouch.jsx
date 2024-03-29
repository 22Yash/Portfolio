import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function GetInTouch() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    const enterMouse = (e) => {
      const { clientX, clientY } = e;

      const dx =
        clientX - circle.getBoundingClientRect().left - circle.clientWidth / 2;
      const dy =
        clientY - circle.getBoundingClientRect().top - circle.clientHeight / 2;

      gsap.to(circle, {
        x: dx / 1.5, // Adjust the division factor for the strength of the effect
        y: dy / 1.5,
        ease: "power4.out",
        duration: 0.3,
        backgroundColor: "#28434d",
      });
    };

    const leaveMouse = () => {
      gsap.to(circle, {
        x: 0,
        y: 0,
        ease: "power1.out",
        duration: 0.3,
        backgroundColor: "#3A606E",
        color: "white",
      });
    };

    if (circle) {
      circle.addEventListener("mousemove", enterMouse);
      circle.addEventListener("mouseleave", leaveMouse);
    }

    return () => {
      if (circle) {
        circle.removeEventListener("mousemove", enterMouse);
        circle.removeEventListener("mouseleave", leaveMouse);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div id="circle" className="flex justify-around z-10">
      <div
        id="getInTouch"
        ref={circleRef}
        className="w-32 h-32 bg-[#3A606E] text-white rounded-full flex justify-center items-center p-0
               lg:w-44 lg:h-44 lg:bg-[#3A606E]lg:rounded-full lg:flex lg:items-center lg:absolute
                mt-0 absolute ml-24 text-sm
               sm:w-40 sm:h-40 sm:bg-[#3A606E] sm:absolute sm:-mt-9"
      >
        Get in touch
      </div>
    </div>
  );
}

export default GetInTouch;
