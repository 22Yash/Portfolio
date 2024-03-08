import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Magneticeffect from "../Animation/Magneticeffect";
import GetInTouch from "./GetInTouch";
import Mousefollower from "../Animation/Mousefollower";
import Links from "./Links";

function Connectfooter() {
  return (
    <div className="bg-[#828E82] w-full h-screen font-sans relative">
      <Mousefollower mouseVisibility={true} />

      <div
        id="heading"
        className="  flex flex-col md:text-6xl 
      xl:text-7xl xl:font-semibold sm:text-5xl  "
      >
        <h4
          className=" mt-10  ml-10 text-4xl font-semibold
          xl:mt-28 xl:ml-36  md:mt-28
        sm:text-6xl sm:p-1 
        xl:text-7xl "
        >
          Let’s work
        </h4>
        <h4
          className="  mt-1  ml-10 text-4xl font-semibold
          xl:mt-2 xl:ml-36 
        sm:text-6xl sm:p-1 
        xl:text-7xl  "
        >
          together
        </h4>
      </div>
      <GetInTouch />
      <div
        id="divider"
        className="border border-[#3A606E] w-5/6  ml-10 
                      mt-16
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:mt-22
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-16 
                      "
      ></div>

      <div
        id="button"
        className=" mt-20 m-10 grid grid-cols-1 gap-10 
                  sm:grid sm:grid-cols-2 
                   xl:flex xl:gap-20 xl:justify-start xl:ml-36"
      >
        <Magneticeffect />
      </div>

      <div id="socials" className="">
        <Links />
      </div>
    </div>
  );
}

export default Connectfooter;
