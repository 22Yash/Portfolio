import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Links({ columnDirection }) {
  const liRef = useRef([]);

  useEffect(() => {
    const liElements = liRef.current;

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
  }, []);

  return (
    <>
      <div id="links" className="translate-y-full mt-24 xl:-mt-60">
        <ul
          className={`flex gap-5 m-5 font-semibold mt-16 
          sm:static sm:flex sm:justify-end sm:gap-10 sm:m-10 sm:mt-36 sm:font-semibold 
          ${
            columnDirection ? "flex-col" : ""
          }`}
        >
          <li ref={(el) => (liRef.current[0] = el)}>LinkedIn</li>

          <li ref={(el) => (liRef.current[1] = el)}>
            <a href="">Github</a>
          </li>
          <li ref={(el) => (liRef.current[2] = el)}>
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Links;
