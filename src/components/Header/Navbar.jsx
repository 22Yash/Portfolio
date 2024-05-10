import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import heroSVG from "./nnnoise.svg"
import MovingCircle from "./MovingCircle";


function Navbar() {
  const navBar = useRef();

  





  return (
    <>
      <div
        id="navBar"
        className=" 
        
        xl:flex xl:justify-between 
    z-44   xl:h-12 bg-[#d6d6d0] "
    style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
      >
        <div id="leftNav">
          <Link to="/">
          <MovingCircle/>
          </Link>
         
        </div>
        <div id="rightNav" className="hidden
        xl:flex xl:gap-10 xl:mt-5  xl:h-12 xl:m-2 xl:text-white xl:rounded-l-full xl:rounded-r-full">
          <ul className="flex  mt-4 mr-10 xl:p-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li 
            
            className="button -mt-0
            " 
            >
              <Link to="#Work" className="ml-5 text-[20px]">work</Link>
            </li>
            <li className="button"
           >
              <Link to="#Skills" className="ml-6 text-[20px]">Skills</Link>
            </li>
            <li className="button" >
              <Link to="#Resume" className="ml-5 text-[16px]">Resume</Link>
            </li>
            <li className="button" >
              <Link to="#Contact" className="ml-5 text-[16px]">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
