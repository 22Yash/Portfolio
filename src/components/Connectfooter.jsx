import React, { useEffect, useRef, } from "react";
import { gsap } from "gsap";
import Magneticeffect from "./Magneticeffect";
import GetInTouch from "./GetInTouch";
import Mousefollower from "./Mousefollower";

function Connectfooter() {
  const liRef= useRef([]);

  useEffect(()=>{
    const liElements = liRef.current;

    liElements.forEach((li)=>{

      li.addEventListener('mouseenter',() => {
        gsap.to(li,{
          borderBottomWidth: "3px",
          borderColor: "#3A606E",
          duration: 0.5,
          y: -10,
        })
      })

      li.addEventListener('mouseleave',() => {
        gsap.to(li,{
          borderBottomWidth: '0',
          duration: 0.3,
          y:0
        });
      });

    });

  },[]);
  
  

  
  
  

  

  return (
    <div className="bg-[#828E82] w-full h-screen font-sans relative">
      <Mousefollower/>
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
        

      </div>

      <div id="socials">
        <div id="links">
          <ul className=" flex gap-5 m-5 font-semibold mt-16  sm:static sm:flex sm:justify-end sm:gap-10 sm:m-10 sm:mt-36 sm:font-semibold  ">
            <li
             ref={(el) => (liRef.current[0] = el)}
            >
              LinkedIn
            </li>

            <li 
            ref={(el) => (liRef.current[1] = el)}
            >
              <a href="">Github</a>
            </li>
            <li 
              ref={(el) => (liRef.current[2] = el)}>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    
  );
}

export default Connectfooter;
