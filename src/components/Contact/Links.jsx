import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Links({ columnDirection }) {
  const liRef = useRef([]);

  useEffect(() => {
    const liElements = liRef.current;

    


    if(window.innerWidth > 768){

      liElements.forEach((li) => {
        li.addEventListener("mouseenter", () => {
          gsap.to(li, {
            borderBottomWidth: "3px",
            borderColor: "#3A606E",
            duration: 0.5,
            y: -10,
          });
        });
  
        li.addEventListener("mouseleave", () => {
          gsap.to(li, {
            borderBottomWidth: "0",
            duration: 0.3,
            y: 0,
          });
        });
      });
  

    }else{
      liElements.forEach((li) => {
        li.addEventListener("mouseenter", () => {
          gsap.to(li, {
            borderBottomWidth: "3px",
            borderColor: "#3A606E",
            duration: 0.5,
            y: -10,
          });
        });
  
        li.addEventListener("mouseleave", () => {
          gsap.to(li, {
            borderBottomWidth: "0",
            duration: 0.3,
            y: 0,
          });
        });
      });
    
    }
  }, []);
  

  return (
    <>
      <div id="links" className="translate-y-full mt-24 sm:-mt-16 xl:mt-0">
       
        <ul
          className={`flex gap-5 m-5 font-semibold mt-10   xl:mt-16 
          
          sm:static sm:flex sm:justify-end sm:gap-10 sm:m-10 sm:mt-36 sm:font-semibold 
         xl:${
            columnDirection ? "flex-col" : ""
          }`}
        >
          <h4 className="opacity-50    ">Socials</h4>
           
          <li ref={(el) => (liRef.current[0] = el)}>
           <Link > LinkedIn </Link></li>

          <li ref={(el) => (liRef.current[1] = el)}>
            <Link>Github</Link>
          </li>
          <li ref={(el) => (liRef.current[2] = el)}>
            <Link>Instagram</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Links;
