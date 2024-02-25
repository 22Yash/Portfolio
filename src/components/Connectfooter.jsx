import React, { useEffect, useRef, } from "react";
import { gsap } from "gsap";
import Magneticeffect from "./Magneticeffect";
import GetInTouch from "./GetInTouch";

function Connectfooter() {
  const linkdeinRef = useRef(null);
  const githubRef = useRef(null);
  const instaRef  = useRef(null);


  const handleMouseEnter = (ref) => {
    gsap.to(ref.current,{
    borderBottomWidth: "3px",
    borderColor: "#3A606E",
    duration: 0.5,
    y: -10,
    })
  

  }
  
  const handleMouseLeave = (ref) => {
    gsap.to(ref.current,{
      borderBottomWidth: "0px",
      duration: 0.5,
      y: 0,
    })
 
  


  }

  
  
  

  

  return (
    <div className="bg-[#828E82] w-full h-screen font-sans relative">
      <div
        id="heading "
        className=" p-12 sm:text-sm sm:leading-1 sm:space-x-0 lg:opacity-70  
                   xl:leading-3p-10 xl:bg-[#828E82] xl:space-x-1"
      >
        <h4 className="text-5xl  font-semibold  sm:text-6xl sm:p-1 sm:space-x-3 
                        xl:font-semibold xl:p-1 xl:space-x-10 xl:ml-40 xl:mt-10 xl:text-8xl   ">
          Let’s work
        </h4>
        <h4 className="text-5xl  font-semibold  sm:text-6xl sm:p-1 sm:space-x-3 
                        xl:font-semibold xl:p-1 xl:space-x-10 xl:ml-40  xl:text-8xl   ">
          together
        </h4>

      </div>
      <GetInTouch/>
      <div
        id="divider"
        className="border border-[#3A606E] w-5/6  ml-10 
                      -mt-24
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:-mt-2
                      "
      ></div>
      <div
        id="button"
        className=" mt-20 m-10 grid grid-cols-1 gap-10 
                  sm:grid sm:grid-cols-2 
                   xl:flex xl:gap-20 xl:justify-start xl:ml-36"
      >
        
        
        
        <Magneticeffect/>
        <Magneticeffect/>

      </div>

      <div id="socials">
        <div id="links">
          <ul className=" flex gap-5 m-5 font-semibold mt-16  sm:static sm:flex sm:justify-end sm:gap-10 sm:m-10 sm:mt-36 sm:font-semibold  ">
            <li
              ref={linkdeinRef}
              className="sm: border-[#3A606E]"
              onMouseEnter={() => handleMouseEnter(linkdeinRef)}
              onMouseLeave={() => handleMouseLeave(linkdeinRef)}
            >
              LinkedIn
            </li>

            <li 
            ref={githubRef} 
            className="sm: border-[#3A606E]"
            onMouseEnter={() => handleMouseEnter(githubRef)}
            onMouseLeave={() => handleMouseLeave(githubRef)}
            >
              <a href="">Github</a>
            </li>
            <li 
              ref={instaRef}
              className="sm: border-[#3A606E]"
              onMouseEnter={() => handleMouseEnter(instaRef)}
              onMouseLeave={() => handleMouseLeave(instaRef)}>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    
  );
}

export default Connectfooter;
