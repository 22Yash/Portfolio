import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";


import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Links({ columnDirection }) {
  

  
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
        backgroundColor: "#FFD500",
        opacity:"100"
      });
    };

    const leaveMouse = () => {
      gsap.to(circle, {
        x: 0,
        y: 0,
        ease: "power1.out",
        duration: 0.3,
        backgroundColor: "#544f49",
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
  }, []);



  return (
    <>
      <div
        id="links"
        className=" h-[200px] xl:w-full   md:-ml-[40px]  xl:ml-[0px] xl:mt-[-500px]  "
      >
        
        <ul
        
          className={`flex justify-between -ml-[140px] font-semibold xl:ml-[0px]
          md:static md:gap-[30px] md:ml-[30px] md:mt-[20px] md:font-semibold xl:-mt-[0px] 
          md:flex md:flex-col
          ${!columnDirection ? "" : ""}
        `}
        >
          
          <br />

          <li
          
            className="text-[#fffdfb] hover:underline-offset-[8px] w-[140px] hover:underline text-[30px]  mt-0 md:-mt-[80px] flex gap-2 xl:-mt-[40px]   xl:text-[22px] xl:ml-5"
          >
            <span className="mt-[5px]"><FaLinkedin className="text-[40px]" /></span>
            <Link to="www.linkedin.com/in/yashdoke10" className="mt-[10px]"> LinkedIn </Link>
          </li>

          <li
          
            className="text-[#efeeed] hover:underline-offset-[8px] w-[140px] hover:underline   text-[30px] md:-mt-[20px] mr-[70px] flex gap-[10px] xl:text-[22px] xl:ml-5 xl:-mt-[10px]"
          >
            <span className="mt-[3px]"><FaSquareGithub  className="text-[40px]"/>  </span>
            
            <Link to="https://github.com/22Yash" className="mt-[10px]">Github</Link>
          </li>
         
        </ul>
      </div>
    </>
  );
}

export default Links;
