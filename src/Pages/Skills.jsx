import React, { useEffect, useRef, useState } from "react";
import image1 from "./JavaScript.png";
import image2 from "./html.png";
import image3 from "./tailwind.png";
import image4 from "./GSAP.png";
import image5 from "./react.png";
import gsap from "gsap";

function Skills() {
  
  const techstackRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const menuItems = document.querySelectorAll(".techstack");

    gsap.defaults({
      duration: 0.55,
      ease: "expo.out",
    });

    menuItems.forEach((item) => {
      const imageWrapper = item.querySelector("img");
      const itemBounds = item.getBoundingClientRect();

      const onMouseEnter = () => {
        gsap.set(imageWrapper, { scale: 0.8, yPercent: 50, rotation: -15 });
        gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
      };

      const onMouseLeave = () => {
        gsap.to(imageWrapper, { opacity: 0, yPercent: -50, scale: 0.8, rotation: -15 });
      };

      const onMouseMove = ({ clientX, clientY }) => {
        const imageWrapperBounds = imageWrapper.getBoundingClientRect();
        let yOffset = itemBounds.top / imageWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
        gsap.to(imageWrapper, {
          duration: 1.25,
          x: Math.abs(clientX - itemBounds.left) - imageWrapperBounds.width / 1.55,
          y: Math.abs(clientY - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
        });
      };

      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
      item.addEventListener("mousemove", onMouseMove);

      return () => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
        item.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []); // Empty dependency array to run only once when the component mounts

  const handleMouseOver = (card) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <div
        id="skills"
        className="
    w-[500px] h-[150vh] text-[#cecec5]
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
            className="xl:hidden w-[420px] ml-10 mt-5 border-2  border-[#bebeb0]"
          ></div>
        </div>

        <div id="col2" className="bg-black">
          <div
            id="stack"
            className="
        text-[40px] font-helvetica font-semibold pl-5 -pt-10
        xl:text-[65px] xl:font-helvetica xl:font-semibold xl:p-10"
          >
              <div
            onMouseEnter={() => handleMouseOver("JavaScript")}
            onMouseLeave={handleMouseLeave}
            className="border-b-2 border-b-[#bebeb0] w-[440px] xl:w-full"
          >
            <h2>JavaScript</h2>
            {hoveredCard === "JavaScript" && (
              <div
                ref={techstackRef}
                className="techstack bg-[#deded0] gap-5 h-[140px] opacity-1 rounded-3xl p-5 transform xl:translate-x-[-50%] xl:translate-y-[-30%] translate-y-[-20%] absolute z-90 flex"
              >
                <img src={image1} alt="" className="w-28 h-28" />
                <h3 className="w-[400px] text-xl h-[100px] text-[#3b3834] p-1 font-semibold">
                  I bring a website to life with JavaScript, adding interactive features and optimizing performance with clean and efficient code.
                </h3>
              </div>
            )}
          </div>
            {/* <div
              onMouseEnter={() => handleMouseOver("HTML")}
              onMouseLeave={handleMouseLeave}
              className=" border-b-2 border-b-[#bebeb0] w-[440px] xl:w-full"
            >
              <h2>HTML</h2>
              {hoveredCard === "HTML" && (
                <div 
                ref={techstackRef}
                className="techstack  bg-[#deded0] gap-5 h-[220px] xl:h-[140px] opacity-1 rounded-3xl p-5 transform 
                xl:translate-x-[-50%] xl:translate-y-[-30%]  absolute z-90 flex ">
                  <img src={image2} alt="" className="w-28 h-28" />
                  <h3 className="  w-[400px] xl:w-[420px]  text-xl xl:h-[100px] text-[#3b3834] p-1 font-normal ">
                    I craft the foundation of web pages, structuring content in
                    a clear and logical manner to ensure accessibility and
                    compatibility across different devices and platforms.
                  </h3>
                </div>
              )}
            </div>
           
            <div
              onMouseEnter={() => handleMouseOver("Tailwindcss")}
              onMouseLeave={handleMouseLeave}
              className=" border-b-2 border-b-[#bebeb0] w-[440px] xl:w-full "
            >
              <h2>TailwindCSS</h2>
              {hoveredCard === "Tailwindcss" && (
                <div
                  ref={techstackRef}
                  className="techstack  bg-[#deded0] gap-5 h-[220px] xl:h-[140px] rounded-3xl 
                   opacity-1 p-5 transform xl:translate-x-[-50%] xl:translate-y-[-30%] opacity-1 absolute z-90 flex "
                >
                  <img src={image3} alt="" className="w-28 h-28" />
                  <h3 className=" w-[400px] xl:w-[420px] text-xl h-[100px] text-[#3b3834] p-1 font-normal ">
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
              className=" border-b-2 border-b-[#bebeb0] w-[440px] xl:w-full "
            >
              <h2>GSAP</h2>
              {hoveredCard === "GSAP" && (
                <div
                  ref={techstackRef}
                  className="techstack  bg-[#deded0] gap-5  h-[220px] xl:h-[165px]   opacity-1 rounded-3xl p-5 
                  transform xl:translate-x-[-50%] xl:translate-y-[-30%] opacity-1 absolute z-90 flex "
                >
                  <img src={image4} alt="" className="w-28 h-28" />
                  <h3 className="w-[420px] xl:w-[420px] text-xl  text-[#3b3834] p-1 font-normal ">
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
            className=" border-b-2 border-b-[#bebeb0] w-[440px] xl:w-full ">
              <h2 >ReactJS</h2>
              {hoveredCard === "Reactjs" && (
                <div
                  ref={techstackRef}
                  className="techstack  bg-[#deded0] gap-5 xl:h-[190px] rounded-3xl p-5 transform 
                  xl:translate-x-[-50%] xl:translate-y-[-160%] opacity-1 absolute z-90 flex "
                >
                  <img src={image5} alt="" className="w-28 h-28" />
                  <h3 className="  w-[410px] xl:w-[460px] text-xl  text-[#3b3834] p-1 font-normal ">
                    I architect dynamic and responsive user interfaces,
                    leveraging modular components and state management to build
                    scalable and interactive web applications, ensuring seamless
                    navigation and enhanced user experience through efficient
                    rendering and data handling.
                  </h3>
                </div>
              )}
            </div> */}
            <div className="skiils"></div>
            <div className="skiils"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
