import React, { useEffect, useRef } from "react";
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
      x: -150,
      duration: 0.5,
    });
  };

  const closeMenu = (e) => {
    console.log("closed");
    e.stopPropagation();
    gsap.to(menuRef.current, {
      opacity: 0,
      ease: "power4.in",
      x: 0,
      duration: 1,
    });
  };

  return (
    <>
      <div id="div" className="xl:w-full w-full h-screen bg-blue-200 relative">
        <div id="button" ref={buttonRef} className="">
          <button className=" xl:w-24  xl:h-24 m-5 w-12 h-12  bg-red-500 fixed rounded-full">
            <div id="icon" className="text-3xl xl:ml-8 ml-3  ">
              <FiAlignJustify />
            </div>
          </button>
        </div>
        <div
          id="menu"
          ref={menuRef}
          onClick={openMenu}
          className="grid xl:grid-cols-1 xl:w-full w-full gri-cols-1 opacity-0  fixed "
        >
          

          <div
            id="second"
            className="xl:bg-red-500 xl:w-3/4 xl:translate-x-full  
            bg-blue-400 h-screen w-5/6 translate-x-3/4  text-3xl   "
          >
            <div
              id="upperDiv"
              className=" w-full xl:h-1/5  h-1/4 flex justify-end -ml-20"
            >
              <button
                className="bg-white mt-20 xl:m-10   rounded-full  -translate-y-3/4 text-6xl"
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
