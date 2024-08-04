import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";


import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Links({ columnDirection }) {
  const liRef = useRef([]);

  useEffect(() => {
    const liElements = liRef.current;

    if (window.innerWidth > 768) {
      liElements.forEach((li) => {
        li.addEventListener("mouseenter", () => {
          gsap.to(li, {
            borderBottomWidth: "0",
            textDecoration: "underline",
            textDecorationColor: "#3a3733",
            duration: 0.5,
            y: -10,
            width: "120px",
          });
        });

        li.addEventListener("mouseleave", () => {
          gsap.to(li, {
            borderBottomWidth: "0",
            textDecoration: "none",
            duration: 0.3,
            y: 0,
          });
        });
      });
    } else {
      liElements.forEach((li) => {
        li.addEventListener("mouseenter", () => {
          gsap.to(li, {
            borderBottomWidth: "0",
            textDecoration: "underline",
            textDecorationColor: "#3a3733",
            duration: 0.5,
            y: -10,
          });
        });

        li.addEventListener("mouseleave", () => {
          gsap.to(li, {
            borderBottomWidth: "0",
            textDecoration: "none",
            duration: 0.3,
            y: 0,
          });
        });
      });
    }
  }, []);

  return (
    <>
      <div
        id="links"
        className="translate-y-full h-[200px] xl:w-full  sm:-mt-[320px] sm:-ml-[40px]  xl:mr-[100px]"
      >
        <h4 className=" xl:text-[45px] xl:mt-20 xl:ml-2 sm:mt-[80px] font-bold text-[32px]
          -mt-[180px] opacity-100 sm:-ml-[0px]  p-2 underline underline-offset-8 
           sm:opacity-100 xl:opacity-100 ">
            Socials
          </h4>
        <ul
          className={`flex justify-between -ml-[140px] font-semibold xl:ml-[0px]
          sm:static sm:gap-10 sm:m-10 sm:mt-36 sm:font-semibold xl:-mt-[0px] 
          sm:flex sm:flex-col
          ${!columnDirection ? "" : ""}
        `}
        >
          
          <br />

          <li
            ref={(el) => (liRef.current[0] = el)}
            className="text-[#3a3733] text-[30px]  mt-0 sm:-mt-[80px] flex gap-2 xl:-mt-[40px]   xl:text-[22px] xl:ml-5"
          >
            <span className="mt-[5px]"><FaLinkedin /></span>
            <Link to="www.linkedin.com/in/yashdoke10"> LinkedIn </Link>
          </li>

          <li
            ref={(el) => (liRef.current[1] = el)}
            className="text-[#3a3733] text-[30px] mr-[70px] flex gap-[10px] xl:text-[22px] xl:ml-5 xl:-mt-[10px]"
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
