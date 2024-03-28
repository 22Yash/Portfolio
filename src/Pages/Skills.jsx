import React, { useEffect, useRef, useState } from "react";
import image1 from "./JavaScript.png";
import image2 from "./html.png";
import image3 from "./tailwind.png";
import image4 from "./GSAP.png";
import image5 from "./react.png";
import gsap from "gsap";

function Skills() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    const images = [
      image1,
      image2,
      image3,
      image4,
      image5
    ];

    const techstacks = document.querySelectorAll(".techstack");
    

    techstacks.forEach((stack, index) => {
      const image = stack.querySelector("img");
      const name = stack.querySelector(".techstackname");

      stack.addEventListener("mouseenter", () => {
        gsap.to(name, { opacity: 0, duration: 0.3 });
        gsap.to(image, { opacity: 1, duration: 0.3 });
      });

      stack.addEventListener("mouseleave", () => {
        gsap.to(name, { opacity: 1, duration: 0.3 });
        gsap.to(image, { opacity: 0, duration: 0.3 });
      });
    });

    return () => {
      techstacks.forEach((stack) => {
        stack.removeEventListener("mouseenter", () => {});
        stack.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  
  

  

  return (
    <>
      <div
        id="skills"
        className="
    w-[500px] h-[150vh] text-[#cecec5] 
    xl:w-full xl:h-[130vh] grid xl:flex xl:justify-between"
      >
        <div id="col1" className="bg-black xl:w-[700px] ">
          <h2
            className="
           pt-10 pl-10 text-5xl font-semibold w-3/4
           xl:pt-32 xl:pl-20 font-helvetica xl:text-7xl xl:font-semibold xl:w-3/4"
          >
            my digital tool box.
          </h2>
          <h4
            className="
           pl-10 w-3/4 text-[20px] font-normal pt-5
           xl:pl-20 xl:w-3/4 xl:text-3xl xl:pt-10"
          >
            These are my go to tech stack to make any projects happen. I am
            always eager of learning more about my current stack, and new
            technologies that could expand my horizons.
          </h4>
          <div
            id="border"
            className="xl:hidden w-[420px] ml-10 mt-5 border-2  border-[#bebeb0]"
          ></div>
        </div>

        <div id="col2" className="bg-black xl:w-[1000px]">
          <div
            id="stack"
            className="
        text-[40px] font-helvetica font-semibold pl-5 -pt-10
        xl:text-[65px] xl:font-helvetica xl:font-semibold xl:p-10"
          >
            
            <div className="border-b-2 border-b-[#bebeb0] w-[440px] xl:h-[130px]  xl:w-full xl:flex xl:gap-32">
              <h2 className="techstackname xl:-mt-5 text-[#bdbdaf] hover:opacity-0 transition-opacity duration-500 ">JavaScript</h2>
              <h3 className="w-[400px] text-xl h-[100px] text-[#9d9995] p-1 font-semibold">
                  I bring a website to life with JavaScript, adding interactive
                  features and optimizing performance with clean and efficient
                  code.
                </h3>
              <div
                className="techstack  gap-5 w-[400px] h-[100px] xl:w-[420px] 
                opacity-0 rounded-3xl p-5 absolute  z-10 flex"
              >
                <img src={image1} alt="" className="w-28 h-28 -mt-10 ml-72" />
               
              </div>
              
            </div>
            <div className="border-b-2 border-b-[#bebeb0] w-[440px] 
            xl:h-[130px] xl:mt-5  xl:w-full xl:flex xl:gap-64">
              <h2 className="techstackname xl:-mt-5 text-[#bdbdaf]">HTML</h2>
              <h3 className="  w-[400px] xl:w-[420px]  text-xl xl:h-[100px] text-[#9d9995] p-1 font-normal ">
                    I craft the foundation of web pages, structuring content in
                    a clear and logical manner to ensure accessibility and
                    compatibility across different devices and platforms.
                  </h3>
                  <div
                className="techstack  gap-5 w-[400px] h-[100px] xl:w-[420px] opacity-0 rounded-3xl p-5 absolute z-10 flex"
              >
                <img src={image2} alt="" className="w-32 h-32 ml-48 -mt-5" />
               
              </div>
            </div>
            <div className="border-b-2 border-b-[#bebeb0] w-[440px] 
            xl:h-[130px] xl:mt-5  xl:w-full xl:flex xl:gap-16">
              <h2 className="techstackname xl:-mt-5 text-[#bdbdaf] ">TailwindCSS</h2>
              <h3 className=" w-[400px] xl:w-[420px] xl:pl-2 text-xl h-[100px] text-[#9d9995] p-1 font-normal ">
                    I leverage a utility-first approach to rapidly style and
                    design web interfaces, facilitating responsive layouts and
                    consistent design systems with minimal CSS code
                  </h3>
                  <div
                className="techstack  gap-5 w-[400px] h-[100px] xl:w-[420px] opacity-0 rounded-3xl p-5 absolute z-10 flex"
              >
                <img src={image3} alt="" className="w-32 h-32" />
               
              </div>
            </div>
            <div className="border-b-2 border-b-[#bebeb0] w-[440px] 
            xl:h-[160px] xl:mt-5  xl:w-full xl:flex  xl:gap-60">
              <h2 className="techstackname xl:-mt-5 text-[#bdbdaf]">GSAP</h2>
              <h3 className="w-[420px] xl:w-[480px]  text-xl xl:pl-5 oapcity-90  text-[#9d9995] p-1 font-normal ">
                    I craft captivating animations and dynamic visual effects,
                    enhancing user experience and engagement on web pages by
                    seamlessly animating elements and creating immersive
                    transitions with precision and creativity.
                  </h3>
                  <div
                className="techstack  gap-5 w-[400px] h-[100px] xl:w-[420px] opacity-0 rounded-3xl p-5 absolute z-10 flex"
              >
                <img src={image4} alt="" className="w-32 h-32" />
               
              </div>
            </div>
            <div className="border-b-2 border-b-[#bebeb0] w-[440px] 
            xl:h-[180px] xl:mt-5  xl:w-full xl:flex xl:gap-44">
              <h2 className="techstackname xl:-mt-5 text-[#bdbdaf]">ReactJS</h2>
              <h3 className="  w-[410px] xl:w-[460px] xl:pl-5  text-xl  text-[#9d9995] p-1 font-normal ">
                    I architect dynamic and responsive user interfaces,
                    leveraging modular components and state management to build
                    scalable and interactive web applications, ensuring seamless
                    navigation and enhanced user experience through efficient
                    rendering and data handling.
                  </h3>
                  <div
                className="techstack  gap-5 w-[400px] h-[100px] xl:w-[420px] opacity-0 rounded-3xl p-5 absolute z-10 flex"
              >
                <img src={image5} alt="" className="w-32 h-32" />
               
              </div>
            </div>


            
            <div className="skiils"></div>
            <div className="skiils"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
