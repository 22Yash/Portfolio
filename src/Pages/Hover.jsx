import React, { useEffect, useState } from "react";
import gsap from "gsap";
import image1 from "./JavaScript.png";
import image2 from "./html.png";
import image3 from "./tailwind.png";

function Hover() {
  const [images] = useState([image1, image2, image3]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorMedias = document.querySelectorAll(".cursor__media");
    const navLinks = document.querySelectorAll(".nav__link");

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 0
    });

    const setCursorX = gsap.quickTo(cursor, "x", {
      duration: 0.6,
      ease: "expo"
    });

    const setCursorY = gsap.quickTo(cursor, "y", {
      duration: 0.6,
      ease: "expo"
    });

    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });

    const tl = gsap.timeline({
      paused: true
    });

    tl.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "expo.inOut"
    });

    navLinks.forEach((navLink, i) => {
      navLink.addEventListener("mouseover", () => {
        cursorMedias[i].classList.add("active");
        cursorMedias[i].parentElement.classList.add("hide-text");
        gsap.to(cursorMedias[i], { opacity: 1, duration: 0.5 });
        cursorMedias.forEach((media, index) => {
          if (index !== i) {
            gsap.to(media, { opacity: 0, duration: 0.5 });
            media.parentElement.classList.remove("hide-text");
          }
        });
        tl.play();
      });
    });

    navLinks.forEach((navLink, i) => {
      navLink.addEventListener("mouseout", () => {
        tl.reverse();
        cursorMedias[i].classList.remove("active");
        cursorMedias[i].parentElement.classList.remove("hide-text");
      });
    });

    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("mouseover", () => {});
        navLink.removeEventListener("mouseout", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-12 h-12 pointer-events-none opacity-0 cursor">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="absolute inset-0 object-cover w-full h-full cursor__media"
            alt=""
          />
        ))}
      </div>

      <nav className="flex flex-col items-center gap-2.6rem">
        <a href="#" className="relative text-2.6rem font-semibold text-gray-800 nav__link">
          <span className="text">Studio</span>
          <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
        </a>
        <a href="#" className="relative text-2.6rem font-semibold text-gray-800 nav__link">
          <span className="text">Showcase</span>
          <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
        </a>
        <a href="#" className="relative text-2.6rem font-semibold text-gray-800 nav__link">
          <span className="text">Contact</span>
          <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
        </a>
      </nav>
    </>
  );
}

export default Hover;
