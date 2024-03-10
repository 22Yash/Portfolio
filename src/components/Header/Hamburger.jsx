import React, { useEffect, useRef, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import gsap from "gsap";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Hamburger() {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const closeRef = useRef(null);
  

  const openMenu = () => {
    console.log("hii");
    gsap.to(menuRef.current, {
      opacity: 1,
      ease: "power4.Out",
      x: 800,
      duration: 0.5,
    });
    setMenuOpen(true);
  };

  const closeMenu = (e) => {
    console.log("closed");
    e.stopPropagation();
    gsap.to(menuRef.current, {
      opacity: 0,
      ease: "power2.out",
      x: 1150,
      duration: 1,
    });
    setMenuOpen(false);
  };

  const mouseclick = () =>{
    console.log("hii");
  }

  


  return (
    <>
      <div id="div" className="xl:w-full  relative opacity-1  ">
        <div id="button" className=" mr-40 float-end">
          <button
            ref={buttonRef}
            onClick={openMenu}
            className=" xl:w-24  xl:h-24 xl:m-5 ml-20 mt-10 w-12 h-12 bg-red-400  fixed rounded-full"
          >
            <div id="icon" className="text-3xl xl:ml-8 ml-2  ">
              <FiAlignJustify />
            </div>
          </button>
        </div>
        <div
          id="menu"
          
          
          className="grid xl:grid-cols-1 -mt-3  xl:w-5/6 z-20 opacity-1 h-screen w-full grid-cols-1  fixed  "
        >
          <div
            id="second"
            ref={menuRef}
            onClick={openMenu}
            className="xl:bg-red-500 xl:w-2/5  -ml-20 grid-cols-1 opacity-0 xl:ml-96
            bg-blue-400 h-screen w-3/4 translate-x-3/4 mt-20 xl:mt-8 text-3xl   "
          >
            <div
              id="upperDiv"
              className=" w-full xl:h-1/5    h-1/4 flex justify-centre -ml-20"
            >
              <button
                className="bg-white mt-20 ml-52  w-12 h-12  rounded-full  -translate-y-3/4 text-5xl"
                ref={closeRef}
                onClick={(e) => closeMenu(e)}
              >
                <FiX />
              </button>
            </div>

            <div id="bottomDiv" className="flex gap-10 h-4/5  w-full">
              <ul className="flex xl:flex-col p-10 xl:mt-4 xl:mr-10 xl:ml-20 font-medium flex-col lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } 
                      border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Work"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamburger;