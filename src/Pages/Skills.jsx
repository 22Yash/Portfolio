import React, { useEffect, useRef, useState } from "react";
import image1 from "./JavaScript.png";
import image2 from "./html.png";
import image3 from "./tailwind.png";
import image4 from "./GSAP.png";
import image5 from "./react.png";
import gsap from "gsap";

function Skills() {
  const [images] = useState([image1, image2, image3, image4, image5]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorMedias = document.querySelectorAll(".cursor__media");
    const navLinks = document.querySelectorAll(".nav__link");

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const setCursorX = gsap.quickTo(cursor, "x", {
      duration: 0.6,
      ease: "expo",
    });

    const setCursorY = gsap.quickTo(cursor, "y", {
      duration: 0.6,
      ease: "expo",
    });

    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });

    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "expo.inOut",
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
      <div
        id="skills"
        className="
    w-[500px] h-[160vh] text-[#cecec5]
    sm:w-[766px] lg:w-full
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

        <div id="col2" className="bg-black xl:w-[1000px]">
          <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none opacity-0 z-30 cursor">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="absolute inset-0 object-cover w-full h-full cursor__media "
                alt=""
              />
            ))}
          </div>
          <div
            id="stack"
            className="
        text-[40px] font-helvetica font-semibold pl-5 -pt-10
        xl:text-[65px] xl:font-helvetica xl:font-semibold xl:p-10"
          >
            <div
              className="border-b-2 border-b-[#bebeb0]   p-3 w-[440px] 
              sm:flex sm:justify-end sm:w-[700px] sm:gap-10 xl:h-[115px] 
             xl:w-full xl:flex xl:gap-28 xl:p-5"
            >
              <a
                href="#"
                className="relative text-2.6rem font-semibold flex gap-32 text-gray-800 nav__link"
              >
                <span className="text">
                  <h2
                    className="name 
              xl:h-[80px] ml-3 
              xl:-mt-5 text-[#bdbdaf] z-10 "
                  >
                    JavaScript
                  </h2>
                </span>

                <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
              </a>
              <h3 className="xl:w-[400px] text-xl ml-3 h-[100px] text-[#d1d1d7] p-1 font-normal">
                I bring a website to life with JavaScript, adding interactive
                features and optimizing performance with clean and efficient
                code.
              </h3>
            </div>

            <div
              className="border-b-2 border-b-[#bebeb0] p-3 w-[440px] xl:pt-5
            xl:h-[140px] sm:flex sm:gap-32 sm:w-[720px] xl:p-5 xl:w-full xl:flex xl:gap-32"
            >
              <a
                href="#"
                className="relative text-2.6rem font-semibold flex gap-32 text-gray-800 nav__link"
              >
                <span className="text">
                  <h2
                    className="name 
              xl:h-[80px] ml-3
              xl:mt-0 text-[#bdbdaf]  "
                  >
                    HTML
                  </h2>
                </span>

                <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
              </a>
              <h3
                className="  w-[440px] xl:w-[420px]  text-xl ml-3 
              xl:h-[100px] text-[#d1d1d7] p-1 font-normal xl:ml-32 "
              >
                I craft the foundation of web pages, structuring content in a
                clear and logical manner to ensure accessibility and
                compatibility across different devices and platforms.
              </h3>
            </div>

            <div className="border-b-2 border-b-[#bebeb0] xl:p-5 sm:flex sm:gap-32 sm:w-[720px]  p-3 w-[440px] xl:h-[150px]  xl:w-full xl:flex xl:gap-32">
              <a
                href="#"
                className="relative text-2.6rem font-semibold flex gap-32 text-gray-800 nav__link"
              >
                <span className="text">
                  <h2
                    className="name 
              xl:h-[80px] ml-3
              xl:mt-2 text-[#bdbdaf] z-10 "
                  >
                    TailwindCSS
                  </h2>
                </span>

                <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
              </a>
              <h3 className=" w-[440px] xl:w-[600px] sm:-ml-24 xl:pl-2 ml-3 text-xl xl:mt-2 xl:-ml-16  h-[120px] text-[#d1d1d7] p-1 font-normal ">
                I leverage a utility-first approach to rapidly style and design
                web interfaces, facilitating responsive layouts and consistent
                design systems with minimal CSS code .
              </h3>
            </div>

            <div className="border-b-2 border-b-[#bebeb0] w-[440px]
            sm:flex sm:gap-32 sm:w-[720px] 
            p-3 xl:h-[180px]  xl:w-full xl:flex xl:gap-32">
              <a
                href="#"
                className="relative text-2.6rem font-semibold flex gap-32 text-gray-800 nav__link"
              >
                <span className="text">
                  <h2
                    className="name  
              xl:h-[80px] ml-3
              xl:mt-2 text-[#bdbdaf] z-10 "
                  >
                    GSAP
                  </h2>
                </span>

                <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
              </a>
              <h3 className="w-[440px] xl:w-[500px] xl:mt-2 xl:ml-28 ml-3 text-xl xl:pl-5 oapcity-90  text-[#d1d1d7] p-1 font-normal ">
                I craft captivating animations and dynamic visual effects,
                enhancing user experience and engagement on web pages by
                seamlessly animating elements and creating immersive transitions
                with precision and creativity.
              </h3>
            </div>

            <div className="border-b-2 border-b-[#bebeb0] p-3 w-[440px] 
            sm:flex sm:gap-32 sm:w-[720px] 
            lg:w-full
            xl:h-[190px]  xl:w-full xl:flex xl:gap-32">
              <a
                href="#"
                className="relative text-2.6rem font-semibold flex gap-32 text-gray-800 nav__link"
              >
                <span className="text">
                  <h2
                    className="name 
              xl:h-[80px] ml-3
              xl:mt-5 text-[#bdbdaf] z-10 "
                  >
                    ReactJS
                  </h2>
                </span>

                <span className="absolute bottom-[-1.3rem] left-0 right-0 w-2 h-2 bg-gray-600 mx-auto"></span>
              </a>
              <h3 className="  w-[440px] xl:w-[600px]  sm:-ml-5 ml-3 xl:pl-5 xl:ml-10  text-xl  text-[#d1d1d7] p-1 font-normal ">
                I architect dynamic and responsive user interfaces, leveraging
                modular components and state management to build scalable and
                interactive web applications, ensuring seamless navigation and
                enhanced user experience through efficient rendering and data
                handling.
              </h3>
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
