import React, { useEffect, useRef, useState } from "react";
import image1 from './images/JavaScript.png'
import image2 from "./images/html.png";
import image3 from "./images/tailwind.png";
import image4 from "./images/GSAP.png";
import image5 from "./images/react.png";
import gsap from "gsap";
import skillSVG from "./images/skill.svg"

function Skills() {
  useEffect(() => {
    const link = document.querySelectorAll(".link");
    const linkHoverReveal = document.querySelectorAll(".hover-reveal");
    const linkImages = document.querySelectorAll(".hidden-img");

    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener("mousemove", (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[
          i
        ].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
        linkImages[i].style.transform = "scale(1, 1)";
        linkHoverReveal[i].style.left = e.clientX + "px";
      });

      link[i].addEventListener("mouseleave", (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[
          i
        ].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        linkImages[i].style.transform = "scale(0.8, 0.8)";
      });
    }
  });

 
  
  return (
    <>
    <div className="overflow-hidden  mt-[-50px]">
      
    </div>
    
      <div
        id="Skills"
        className="skills -mt-[250px] xl:mt-0
        w-[530px] h-[160vh] text-[#cecec5]
    sm:w-[766px]  xl:-translate-y-44 sm:mt-0
    xl:w-full xl:h-[130vh] grid xl:flex xl:justify-between"
    style={{ backgroundImage: `url(${skillSVG})`, backgroundSize: "cover" }}
      >
        
        <div id="col1" className="bg-[#0d0d0c] w-[530px] sm:w-[766px] xl:w-[700px] ">
          <h2
            className="
           pt-10 pl-20  p-10 text-5xl font-semibold w-4/5 text-left
           xl:pt-32 xl:pl-20 font-helvetica xl:text-7xl xl:font-semibold xl:w-3/4"
          >
            my digital tool box.
          </h2>
          <h4
            className="
           pl-10 w-[500px] text-[20px] font-normal pt-5
           sm:w-[700px] sm:text-center xl:text-normal
           xl:pl-20 xl:w-3/4 xl:text-3xl xl:pt-10"
          >
            These are my go to tech stack to make any projects happen. I am
            always eager of learning more about my current stack, and new
            technologies that could expand my horizons.
          </h4>
          <div
            id="border"
            className="xl:hidden w-[420px] ml-10 mt-5 sm:w-[680px] border-2  border-[#bebeb0]"
          ></div>
        </div>

        <div id="col2" className="bg-[#0d0d0c] w-[530px] sm:w-[766px] xl:w-[1000px]">
          <div
            id="stack"
            className="
        text-[40px] font-helvetica font-semibold pl-5 -pt-10
        xl:text-[65px] xl:font-helvetica xl:font-semibold xl:p-10"
          >
            <ul className="relative z-10 p-10">
              <div className="border-b-2 border-b-[#bebeb0]   p-3 w-[400px] 
              sm:flex sm:justify-end sm:w-[700px] sm:gap-10 xl:h-[140px] xl:-mt-10 
             xl:w-full xl:flex xl:gap-28 xl:p-5">
                <li className="relative z-10 ">
                  <div className="link flex p-5 justify-between mix-blend-difference">
                    <span className="block relative xl:-mt-10 -ml-10 text-[#bdbdaf]">
                      JavaScript
                    </span>
                    <div className="hover-reveal absolute w-300 h-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-0 scale-80 transition-all duration-500 ease-out">
                      <img
                        src={image1}
                        alt=""
                        className="hidden-image w-full h-full object-cover relative transition-transform duration-400 ease-out"
                      />
                    </div>
                  </div>
                </li>
                <h3 className="w-[420px] text-xl h-[100px] text-[#9d9995] p-1  -ml-5 xl:-ml-10 font-normal">
                  I bring a website to life with JavaScript, adding interactive
                  features and optimizing performance with clean and efficient
                  code.
                </h3>
              </div>
              <div
                className="border-b-2 border-b-[#bebeb0] p-3 w-[400px] xl:pt-5
                xl:h-[144px] sm:flex sm:gap-32 sm:w-[720px] xl:p-5 xl:w-full xl:flex xl:gap-44"
              >
                <li className="relative z-10 ">
                  <div className="link flex p-5 justify-between mix-blend-difference">
                    <span className="block relative xl:-mt-10 -ml-10 text-[#bdbdaf]">
                      HTML
                    </span>
                    <div className="hover-reveal absolute w-300 h-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-0 scale-80 transition-all duration-500 ease-out">
                      <img
                        src={image2}
                        alt=""
                        className="hidden-image w-full h-full object-cover relative transition-transform duration-400 ease-out"
                      />
                    </div>
                  </div>
                </li>
                <h3 className="  w-[400px] xl:w-[420px] xl:-mt-5 -ml-5 xl:ml-5 text-xl xl:h-[100px] text-[#9d9995] p-1 font-normal ">
                  I craft the foundation of web pages, structuring content in a
                  clear and logical manner to ensure accessibility and
                  compatibility across different devices and platforms.
                </h3>
              </div>
              <div
                className="border-b-2 border-b-[#bebeb0] xl:p-5 sm:flex sm:gap-32 sm:w-[720px] p-3 w-[400px] 
                xl:h-[160px] xl:w-full xl:flex xl:gap-4"
              >
                <li className="relative z-10 ">
                  <div className="link flex p-5 justify-between mix-blend-difference">
                    <span className="block relative xl:-mt-10 -ml-10 text-[#bdbdaf] ">
                      TailwindCSS
                    </span>
                    <div className="hover-reveal absolute w-300 h-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-0 scale-80 transition-all duration-500 ease-out">
                      <img
                        src={image3}
                        alt=""
                        className="hidden-image w-full h-full object-cover relative transition-transform duration-400 ease-out"
                      />
                    </div>
                  </div>
                </li>
                <h3 className=" w-[400px] xl:w-[480px] xl:pl-2 xl:ml-0 -ml-5 mb-4 text-xl h-[100px] text-[#9d9995] p-1 font-normal ">
                  I leverage a utility-first approach to rapidly style and
                  design web interfaces, facilitating responsive layouts and
                  consistent design systems with minimal CSS code
                </h3>
              </div>
              <div
                className="border-b-2 border-b-[#bebeb0] w-[400px]
                sm:flex sm:gap-32 sm:w-[720px] 
                p-3 xl:h-[180px]  xl:w-full xl:flex xl:gap-32"
              >
                <li className="relative z-10 ">
                  <div className="link flex p-5 justify-between mix-blend-difference">
                    <span className="block relative  xl:-mt-10 -ml-10 text-[#bdbdaf] ">
                      GSAP
                    </span>
                    <div className="hover-reveal absolute w-300 h-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-0 scale-80 transition-all duration-500 ease-out">
                      <img
                        src={image4}
                        alt=""
                        className="hidden-image w-full h-full object-cover relative transition-transform duration-400 ease-out"
                      />
                    </div>
                  </div>
                </li>
                <h3 className="w-[420px] xl:w-[480px] -mt-2 text-xl xl:pl-5 xl:ml-10 -ml-5 oapcity-90  text-[#9d9995] p-1 font-normal ">
                  I craft captivating animations and dynamic visual effects,
                  enhancing user experience and engagement on web pages by
                  seamlessly animating elements and creating immersive
                  transitions with precision and creativity.
                </h3>
              </div>
              <div
                className="border-b-2 border-b-[#bebeb0] p-3 w-[400px] 
                sm:flex sm:gap-32 sm:w-[720px] xl:-mt-2
                lg:w-full
                xl:h-[205px]  xl:w-full xl:flex xl:gap-20"
              >
                <li className="relative z-10 ">
                  <div className="link flex p-5 justify-between mix-blend-difference">
                    <span className="block relative  xl:-mt-10 -ml-10 text-[#bdbdaf] ">
                      ReactJs
                    </span>
                    <div className="hover-reveal absolute w-300 h-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-0 scale-80 transition-all duration-500 ease-out">
                      <img
                        src={image5}
                        alt=""
                        className="hidden-image w-full h-full object-cover relative transition-transform duration-400 ease-out"
                      />
                    </div>
                  </div>
                </li>
                <h3 className="  w-[410px] xl:w-[480px] xl:pl-5 -mt-2 xl:ml-9 -ml-5 text-xl  text-[#9d9995] p-1 font-normal ">
                  I architect dynamic and responsive user interfaces, leveraging
                  modular components and state management to build scalable and
                  interactive web applications, ensuring seamless navigation and
                  enhanced user experience through efficient rendering and data
                  handling.
                </h3>
              </div>
            </ul>

            <div className="skiils"></div>
            <div className="skiils"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
