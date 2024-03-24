import React, { useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import { HashLink as Link } from "react-router-hash-link";

function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const menu = menuRef.current;

    if (isOpen) {
      gsap.to(menu, {
        x: -300,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menu, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        
      });
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    const menu = menuRef.current;
    gsap.to(menu, {
      x: 600,
      duration: 0.5,
      ease: "power2.in",
      
     
    });
  };

  return (
    <div className="fixed xl:top-20 right-20 xl:right-0 z-50">
      <button onClick={toggleMenu} className="xl:w-24   xl:h-24 xl:m-5  
            ml-20 mt-5 mr-5 w-16 h-16 bg-[#5f5c57]  rounded-full ">
        {isOpen ? <FiX className="text-3xl xl:ml-8 ml-4 text-white" /> : <FiMenu className="text-3xl xl:ml-8 ml-4 text-black" />}
      </button>
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full bg-[#3b3834] xl:w-4/12 flex flex-col text-5xl justify-center"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(600px)" }}
      >
        {isOpen && (
          <button onClick={closeMenu} className="absolute mt-2  rounded-full w-16 h-16 xl:w-24 xl:h-24 bg-white top-4 right-4">
            <FiX className="text-black xl:ml-5 ml-4 text-3xl xl:text-5xl" />
          </button>
        )}
        <ul className="flex xl:flex-col p-10 xl:mt-4 xl:mr-10 text-white xl:text-white xl:ml-20 font-medium flex-col lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      } 
                       hover:bg-gray-50  -ml-8 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] xl:-ml-10 lg:p-2 `
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
                      }  hover:bg-gray-50 -ml-8 xl:ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
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
  );
}

export default SlideMenu;
