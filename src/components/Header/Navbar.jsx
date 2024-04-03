import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import heroSVG from "./nnnoise.svg"
import MovingCircle from "./MovingCircle";

function Navbar() {



  return (
    <>
      <div
        id="navBar"
        className=" 
        hidden 
        xl:flex xl:justify-between 
    z-44   xl:h-12 bg-[#d6d6d0] "
    style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
      >
        <div id="leftNav">
         <MovingCircle/>
        </div>
        <div id="rightNav" className="
        xl:flex xl:gap-10 xl:mt-5  xl:h-12 xl:m-2 xl:text-white xl:rounded-l-full xl:rounded-r-full">
          <ul className="flex  mt-4 mr-10 xl:p-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li 
            
            className="
            xl:ml-10 xl:bg-[#5f5c57] xl:w-20 xl:pt-1 xl:text-center xl:rounded-l-full xl:rounded-r-full" >
              <Link to="#Work" >work</Link>
            </li>
            <li className="
            xl:ml-10 xl:bg-[#5f5c57] xl:w-20  xl:pt-1 xl:text-center xl:rounded-l-full xl:rounded-r-full"  >
              <Link to="#Skills">Skills</Link>
            </li>
            <li className="
            xl:ml-10 xl:bg-[#5f5c57] xl:w-24 xl:pt-1 xl:text-center xl:rounded-l-full xl:rounded-r-full" >
              <Link to="#Resume">Resume</Link>
            </li>
            <li className="
            xl:ml-10 xl:bg-[#5f5c57] xl:w-24  xl:pt-1 xl:text-center xl:rounded-l-full xl:rounded-r-full" >
              <Link to="#Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
