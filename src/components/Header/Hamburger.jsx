import React, { useEffect, useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";
import gsap from "gsap";
import { FiX } from "react-icons/fi";

function Hamburger() {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const closeRef = useRef(null);

  const openMenu = () => {
    console.log("hii");
    gsap.to(menuRef.current, {
      opacity: 1,

      x: -10,
      duration: 0.5,
    });
  };

  const closeMenu = () => {
    console.log("closed");
    gsap.to(menuRef.current, {
      opacity: 0,
      scale: 1,
      x: 90,
      duration: 0.5,
    });
  };

  return (
    <>
      <div id="div" className="w-full h-screen bg-blue-200 relative">
        <div id="button" ref={buttonRef}>
          <button className=" w-24  h-24   bg-red-500 fixed rounded-full">
            <div id="icon" className="text-3xl ml-8 ">
              <FiAlignJustify />
            </div>
          </button>
        </div>
        <div
          id="menu"
          ref={menuRef}
          onClick={openMenu}
          className="grid grid-cols-2  opacity-1 "
        >
          <div id="first" className=" w-full h-screen"></div>

          <div
            id="second"
            className="bg-red-500 w-3/4 translate-x-44  flex flex-col justify-center items-center text-3xl   "
          >
            <button
              className="bg-white  -translate-y-3/4 text-3xl"
              ref={closeRef}
              onClick={closeMenu}
            >
              <FiX />
            </button>
            <ul className="flex flex-col ">
              <li>about </li>
              <li>work</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;
