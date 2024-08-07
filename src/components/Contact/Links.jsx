import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";


import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Links({ columnDirection }) {
  const liRef = useRef([]);

  

  return (
    <>
      <div
        id="links"
        className="translate-y-full h-[200px] xl:w-full  md:-mt-[320px] md:-ml-[40px]  xl:mr-[100px]"
      >
        <h4 className=" xl:text-[45px] xl:mt-20 xl:ml-2 md:mt-[80px] font-bold text-[32px]
          -mt-[180px] opacity-100 md:-ml-[0px]  p-2 underline underline-offset-8 
           md:opacity-100 xl:opacity-100 ">
            Socials
          </h4>
        <ul
          className={`flex justify-between -ml-[140px] font-semibold xl:ml-[0px]
          md:static md:gap-[30px] md:ml-[30px] md:mt-[20px] md:font-semibold xl:-mt-[0px] 
          md:flex md:flex-col
          ${!columnDirection ? "" : ""}
        `}
        >
          
          <br />

          <li
            className="text-[#3a3733] hover:underline-offset-[8px] hover:underline text-[30px]  mt-0 md:-mt-[80px] flex gap-2 xl:-mt-[40px]   xl:text-[22px] xl:ml-5"
          >
            <span className="mt-[5px]"><FaLinkedin /></span>
            <Link to="www.linkedin.com/in/yashdoke10"> LinkedIn </Link>
          </li>

          <li
            className="text-[#3a3733] hover:underline-offset-[8px] hover:underline  text-[30px] md:-mt-[20px] mr-[70px] flex gap-[10px] xl:text-[22px] xl:ml-5 xl:-mt-[10px]"
          >
            <span className="mt-[3px]"><FaSquareGithub />  </span>
            
            <Link to="https://github.com/22Yash">Github</Link>
          </li>
         
        </ul>
      </div>
    </>
  );
}

export default Links;
