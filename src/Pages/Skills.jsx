import React, { useEffect, useRef, useState } from "react";
import image1 from "./JavaScript.png";
import image2 from "./html.png";
import image3 from "./tailwind.png";
import image4 from "./GSAP.png";
import image5 from "./react.png";
import gsap from "gsap";

function Skills() {
  const tl = gsap.timeline();

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseOver = (card) => {
    setHoveredCard(card);
    tl.fromTo(
      ".skills",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: -150,
        ease: "power2.in",
      }
    );
  };
  const handleMouseLeave = () => {
    setHoveredCard(null);
    tl.fromTo(
      ".skills",
      {
        opacity: 1,
        ease: "power1.out",
      },
      {
        opacity: 0,
      }
    );
  };

  return (
    <>
      <div
        id="skills"
        className="
    w-[500px] h-[100vh] text-[#cecec5]
    xl:w-full xl:h-[100vh] grid xl:grid-cols-2"
      >
        <div id="col1" className="bg-black ">
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
            className="xl:hidden w-3/4 ml-10 mt-5 border-2  border-black"
          ></div>
        </div>

        <div id="col2" className="bg-black">
          <div
            id="stack"
            className="
        text-[30px] font-helvetica font-semibold pl-10 pt-5
        xl:text-[65px] xl:font-helvetica xl:font-semibold xl:p-10"
          >
            <div
              onMouseEnter={() => handleMouseOver("JavaScript")}
              onMouseLeave={handleMouseLeave}
              className=" border-b-2 border-b-[#bebeb0] "
            >
              <h2>JavaScript</h2>
              {hoveredCard === "JavaScript" && (
                <div className="skills  bg-[#deded0] gap-5 h-[140px] opacity-1 rounded-3xl p-5 transform translate-x-[-50%] translate-y-[-30%] absolute z-90 flex ">
                  <img src={image1} alt="" className="w-28 h-28" />
                  <h3 className=" w-[400px] text-xl h-[100px] text-[#3b3834] p-1 font-semibold ">
                    I bring a website to life with JavaScript, adding
                    interactive features and optimizing performance with clean
                    and efficient code.
                  </h3>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => handleMouseOver("HTML")}
              onMouseLeave={handleMouseLeave}
              className=" border-b-2 border-b-[#bebeb0] "
            >
              <h2>HTML</h2>
              {hoveredCard === "HTML" && (
                <div className="skills  bg-[#deded0] gap-5 h-[140px] opacity-1 rounded-3xl p-5 transform translate-x-[-50%] translate-y-[-30%] absolute z-90 flex ">
                  <img src={image2} alt="" className="w-28 h-28" />
                  <h3 className=" w-[420px] text-xl h-[100px] text-[#3b3834] p-1 font-normal ">
                    I craft the foundation of web pages, structuring content in
                    a clear and logical manner to ensure accessibility and
                    compatibility across different devices and platforms.
                  </h3>
                </div>
              )}
            </div>
            <div className="skiils border-b-2 border-b-[#bebeb0] opacity-0 absolute z-90 ">
              <h2>CSS</h2>
            </div>
            <div
              onMouseEnter={() => handleMouseOver("Tailwindcss")}
              onMouseLeave={handleMouseLeave}
              className=" border-b-2 border-b-[#bebeb0] "
            >
              <h2>TailwindCSS</h2>
              {hoveredCard === "Tailwindcss" && (
                <div
                  id="js"
                  className="skills  bg-[#deded0] gap-5 h-[140px] rounded-3xl  opacity-0 p-5 transform translate-x-[-50%] translate-y-[-30%] opacity-1 absolute z-90 flex "
                >
                  <img src={image3} alt="" className="w-28 h-28" />
                  <h3 className=" w-[420px] text-xl h-[100px] text-[#3b3834] p-1 font-normal ">
                    I leverage a utility-first approach to rapidly style and
                    design web interfaces, facilitating responsive layouts and
                    consistent design systems with minimal CSS code
                  </h3>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => handleMouseOver("GSAP")}
              onMouseLeave={handleMouseLeave}
              className=" border-b-2 border-b-[#bebeb0] "
            >
              <h2>GSAP</h2>
              {hoveredCard === "GSAP" && (
                <div
                  id="js"
                  className="skills  bg-[#deded0] gap-5 h-[165px]   opacity-0 rounded-3xl p-5 transform translate-x-[-50%] translate-y-[-30%] opacity-1 absolute z-90 flex "
                >
                  <img src={image4} alt="" className="w-28 h-28" />
                  <h3 className=" w-[420px] text-xl  text-[#3b3834] p-1 font-normal ">
                    I craft captivating animations and dynamic visual effects,
                    enhancing user experience and engagement on web pages by
                    seamlessly animating elements and creating immersive
                    transitions with precision and creativity.
                  </h3>
                </div>
              )}
            </div>
            <div 
            onMouseEnter={() => handleMouseOver("Reactjs")}
            onMouseLeave={handleMouseLeave}
            className=" border-b-2 border-b-[#bebeb0] ">
              <h2>ReactJS</h2>
              {hoveredCard === "Reactjs" && (
                <div
                  id="js"
                  className="skills  bg-[#deded0] gap-5 h-[190px] rounded-3xl p-5 transform translate-x-[-50%] translate-y-[-30%] opacity-1 absolute z-90 flex "
                >
                  <img src={image5} alt="" className="w-28 h-28" />
                  <h3 className=" w-[460px] text-xl  text-[#3b3834] p-1 font-normal ">
                    I architect dynamic and responsive user interfaces,
                    leveraging modular components and state management to build
                    scalable and interactive web applications, ensuring seamless
                    navigation and enhanced user experience through efficient
                    rendering and data handling.
                  </h3>
                </div>
              )}
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
