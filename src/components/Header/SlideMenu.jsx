import React, { useState, useRef , useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import { HashLink as Link } from "react-router-hash-link";
import hamburgerSVG from "./hamburger.svg"

function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const hamburgerRef = useRef();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const menu = menuRef.current;

    if (isOpen) {
      tl.to(menu, {
        x: -300,
        duration: 0.8,
        ease: "power2.out",
      });
    } else {
      tl.to(menu, {
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        
      });
    }

    tl.fromTo('li',{
      x:20,
     
      opacity:0
    },{
      opacity:1,
      x:-30,
      stagger:.1  ,
      duration:0.5
    })
  };

  const closeMenu = () => {
    setIsOpen(false);
    const menu = menuRef.current;
    tl.to(menu, {
      x: 600,
      duration: 0.5,
      ease: "power2.in",
      borderBottomLeftRadius:"70px",
      borderTopLeftRadius:"70px"
      
     
    });
  };


  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Animation for desktop/laptop screens
  

      const tlMobile = gsap.timeline();

    tlMobile.fromTo(
          hamburgerRef.current,
          {
            y:-20,
            opacity: 0,
            stagger: 1,
          },
          {
            y:14,
            opacity: 1,
            stagger: 1,
            delay:15
          }
        );
    }
  }, []);

  

  return (
    <div className=" fixed xl:top-20  top-0 right-0 z-50 md:opacity-0 " 
   >
      <button onClick={toggleMenu} ref={hamburgerRef} className=" xl:w-24   xl:h-24 xl:m-5  
            -ml-[30px] mt-[30px] mr-5 w-[100px] h-[100px] bg-[#5f5c57]  rounded-full "  >
        {isOpen ? <FiX className="text-[30px] l:ml-8 ml-4 text-white" /> : <FiMenu className="text-[50px] xl:ml-8 ml-[25px] text-black" />}
      </button>
      <div
        ref={menuRef}
        className=" fixed top-0 right-0 h-full bg-[#3b3834] w-[400px] xl:w-4/12 flex flex-col text-5xl justify-center"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(600px)" ,   backgroundImage: `url(${hamburgerSVG})`, backgroundSize: "cover" 
        }}
      >
        {isOpen && (
          <button onClick={closeMenu} className="absolute mt-2  rounded-full w-16 h-16 xl:w-24 xl:h-24 bg-white top-4 right-4">
            <FiX className="text-black xl:ml-5 ml-4 text-3xl xl:text-5xl " />
          </button>
        )}
        <ul className=" xl:flex-col  p-10 xl:mt-4 xl:mr-10 text-white xl:text-white xl:text-7xl xl:ml-20 font-medium flex-col lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="xl:ml-7 ml-5" >
                  <Link
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      } 
                       hover:bg-gray-50  -ml-[10px] lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] xl:-ml-10 lg:p-2 `
                    }
                  >
                    <span className="text-[80px]">Home</span>
                    
                  </Link>
                </li>
                <li className="ml-5 xl:ml-0">
                  <Link
                    to="#Work"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                    <span className="text-[80px]">Work</span>
                  </Link>
                </li>
                <li className="ml-5 xl:ml-0">
                  <Link
                    to="#Skills"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                   <span className="text-[80px]">Skills</span>
                  </Link>
                </li>

                <li className="ml-5 xl:ml-0">
                  <Link
                    to="#Resume"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                    <span className="text-[80px]">Resume</span>
                  </Link>
                </li>
                <li className="ml-5 xl:ml-0">
                  <Link
                    to="#Contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#e1e1dc]" : "text-[#e1e1dc]"
                      }  hover:bg-gray-50 -ml-8 xl:-ml-16 lg:hover:bg-transparent lg:border-0 hover:text-[#babaad] lg:p-0`
                    }
                  >
                   <span className="text-[80px]">Contact</span>
                  </Link>
                </li>
              </ul>
      </div>
    </div>
  );
}

export default SlideMenu;
