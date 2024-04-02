import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

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
        className="translate-y-full -ml-36 w-[500px] h-[0px] xl:w-full mt-24 sm:-mt-[320px] sm:-ml-[40px] xl:mt-10 xl:-ml-8"
      >
        <ul
          className={`flex gap-5 m-5 font-semibold mt-10 
          sm:static sm:gap-10 sm:m-10 sm:mt-36 sm:font-semibold 
          sm:flex sm:flex-col
          ${!columnDirection ? "xl:flex xl:gap-5 xl:m-5 xl:mt-10 xl:font-semibold" : ""}
        `}
        >
          <h4 className=" xl:text-[45px] xl:mt-40 xl:ml-2 sm:mt-[80px] mt-[120px] sm:-ml-[0px]  p-2 underline underline-offset-8  sm:opacity-100 xl:opacity-100 ">
            Socials
          </h4>
          <br />

          <li
            ref={(el) => (liRef.current[0] = el)}
            className="text-[#3a3733] text-[20px] xl:-mt-20 mt-0 sm:-mt-[80px]    xl:text-[22px] xl:ml-5"
          >
            <Link to="www.linkedin.com/in/yashdoke10"> LinkedIn </Link>
          </li>

          <li
            ref={(el) => (liRef.current[1] = el)}
            className="text-[#3a3733] text-[20px] xl:text-[22px] xl:ml-5 xl:-mt-5"
          >
            <Link to="https://github.com/22Yash">Github</Link>
          </li>
          <li
            ref={(el) => (liRef.current[2] = el)}
            className="text-[#3a3733]  text-[20px] xl:text-[22px] xl:ml-5  xl:-mt-5 "
          >
            <Link>X</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Links;
