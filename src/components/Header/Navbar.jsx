import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import heroSVG from "./nnnoise.svg"
import MovingCircle from "./MovingCircle";
import ParticlesComponent from "../Animation/ParticleBackground";


function Navbar() {
  const navBar = useRef();

  





  return (
    <>
      <div
        id="navBar"
        className=" 
        
        xl:flex xl:justify-between 
    z-44   xl:h-12"
    
      >
        <div id="leftNav" className="ml-[20px] pt-[20px] md:-mt-[20px] ">
          <Link to="/">
          <MovingCircle/>
          </Link>
         
        </div>
        <div id="rightNav" className="hidden

        xl:flex xl:gap-10 xl:mt-5  xl:h-12 xl:m-2 xl:text-white xl:rounded-l-full xl:rounded-r-full">
          <ul className="flex  mt-4 mr-10  h-[60px]
          border-2 border-white xl:items-center rounded-[50px] 
          xl:p-[20px] font-medium lg:flex-row lg:space-x-2 lg:mt-0">
            <li 
             
            className="button w-[100px] h-[50px]    flex justify-center items-center
            " 
            >
              <Link to="#Work" className="  font-bold text-[20px]">Work</Link>
            </li>
            <li className="button w-[100px] -ml-[10px] h-[50px]    flex justify-center items-center"
           >
              <Link to="#Skills" className=" text-[22px]">Skills</Link>
            </li>
            <li className="button w-[120px] h-[50px]    flex justify-center items-center" >
              <Link to="#experience" className=" text-[20px]">Experience</Link>
            </li>
            <li className="button w-[100px] h-[50px]    flex justify-center items-center" >
              <Link to="#Contact" className=" text-[20px]">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
