import React, { useEffect, useRef, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import gsap from "gsap";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Hamburger() {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const closeRef = useRef(null);

  const openMenu = () => {
    console.log("hii");

    if (window.innerWidth > 768) {
      // Animation for laptops
      gsap.fromTo(
        menuRef.current,
        {
          opacity: 1,
          ease: "power4.Out",
          x: 300,
          duration: 0.5,
        },
        {
          x: 350,
          opacity: 1,
        }
      );
    } else {
      // Animation for mobile devices
      gsap.fromTo(
        menuRef.current,
        {
          opacity: 1,
          ease: "power4.Out",
          x: 50,
          duration: 0.5,
        },
        {
          x: 0,
          opacity: 1,
        }
      );
    }
    setMenuOpen(true);
  };

  const closeMenu = (e) => {
    console.log("closed");
    e.stopPropagation();
    gsap.fromTo(
      menuRef.current,
      {
        opacity: 1,
        ease: "power2.out",
        x: 350,
        duration: 1,
      },
      {
        opacity: 0,
        x: 300,
      }
    );
    setMenuOpen(false);
  };

  return (
    <>
      <div id="div" className="xl:w-full  xl:relative opacity-1  z-90 ">
        <div id="button" className=" mr-40 float-end">
          <button
            ref={buttonRef}
            onClick={openMenu}
            className=" xl:w-24   xl:h-24 xl:m-5  
            ml-20 mt-5 w-16 h-16 bg-[#5f5c57]  fixed rounded-full"
          >
            <div id="icon" className="text-3xl xl:ml-8 ml-4  text-white ">
              <FiAlignJustify />
            </div>
          </button>
        </div>
        <div
          id="menu"
          className="grid xl:grid-cols-1 -mt-10 xl:flex  xl:justify-end xl:w-3/6 xl:ml-72 xl:translate-x-44 z-20 opacity-1 h-screen w-full  fixed  "
        >
          <div
            id="second"
            ref={menuRef}
            onClick={openMenu}
            className=" xl:w-4/5 xl:rounded-l-3xl xl:relative  xl:ml-24 xl:mt-8  opacity-0
            bg-[#3b3834] h-screen w-3/4 translate-x-3/4  z-30 mt-10 ml-32 text-3xl rounded-l-3xl   "
          >
            <div
              id="upperDiv"
              className=" w-full xl:h-1/5    h-1/4 flex justify-centre -ml-44 xl:-ml-28"
            >
              <button
                className="bg-white mt-20 ml-52  w-12 h-12  rounded-full  -translate-y-3/4 text-5xl xl:ml-32 xl:w-24 xl:h-24 xl:flex xl:justify-center xl:items-center "
                ref={closeRef}
                onClick={(e) => closeMenu(e)}
              >
                <FiX />
              </button>
            </div>

            <div
              id="bottomDiv"
              className="flex gap-10 h-4/5  w-full xl:text-7xl xl:-mt-24 text-5xl -mt-20"
            >
              <ul className="flex xl:flex-col p-10 xl:mt-4 xl:mr-10 xl:text-white xl:ml-20 font-medium flex-col lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      } 
                       hover:bg-gray-50 -ml-8 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] xl:-ml-9 lg:p-0 `
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#Work"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="#Skills"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                    Skills
                  </Link>
                </li>

                <li>
                  <Link
                    to="#Resume"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="#Contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                    Contact
                  </Link>
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
