import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import project1 from "./images/project1.png";
import SlideMenu from "../Header/SlideMenu";


function Work() {
  const workRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
      // Animation for desktop/laptop screens
      const tlDesktop = gsap.timeline();

      
      tlDesktop.to(".slide", {
        scrollTrigger: {
          trigger: ".project",
          start: "50 top",
          end: "200 top",
          scrub: 1,
          // markers: true,
        },
        xPercent: -100,
        duration: 2,
      });

      tlDesktop.to(".work", {
        scrollTrigger: {
          trigger: ".work",
          start: "-630 top",
          end: "-570 top",
          scrub: 2,
          // markers: true,
          pin: true,
        },
        y: -50,
        duration: 0.5,
        borderRadius: "20px",
      });
    } else if (screenWidth <= 1024 && screenWidth > 768) {
      const tlTablet = gsap.timeline();

      tlTablet.to(".slide", {
        scrollTrigger: {
          trigger: ".project",
          start: "-200 top",
          end: "0 top",
          scrub: 1,
          // markers: true,
        },
        xPercent: 0,
        duration: 2,
      });
    } else {
      const tlMobile = gsap.timeline();

      // tlMobile.to(".work", {
      //   scrollTrigger: {
      //     trigger: ".work",
      //     start: "-1020 top",
      //     end: "-570 top",
      //     scrub: 2,
      //     markers: true,
      //     pin: true,
      //   },
      //   y: -650,
      //   duration: 5,
      //   borderRadius: "20px",
      // });
    }
  }, []);

  const mouseIN = () => {

    gsap.set("#img",{scale:0.9,transformOrigin: "bottom"})
    gsap.to("#img", {
      rotation: -8, 
      ease: "power2.inOut", 
      scale:1
    });

}

const mouseOut = () =>{
  gsap.to("#img", {
    rotation: 0, // Reset rotation to 0 degrees (straight)
    ease: "power2.inOut", // Use ease for smoother animation
  });

}

  return (
    <>
    <SlideMenu/>
      
      <section
        id="Work"
        className="work w-[700px]  h-[240vh] sm:h-[280vh] xl:h-screen md:w-full rounded-t-full relative z-4"
        
        
      >
        <div id="work" ref={workRef} className="overflow-x-hidden"
        >
          
          <div
            id="projects"
            className="project w-full  bg-[#0d0d0c]" style={{filter: 'blur(0px)',}}

          >
            
            <div className="cont h-[300vh]  md:h-[350vh] xl:h-[120vh] " 
            
            >
              
              <div
                className="slides grid xl:top-0 xl:left-0 xl:w-full xl:flex h-screen  "
               
              >
                <div className="grid-cols-1 w-1/12 h-[180vh] xl:w-10/12 xl:h-screen xl:flex-shrink-0">
                  <div
                    id="project"
                    className="slide col-span-1 xl:flex xl:m-10 xl:gap-10 xl:mt-[120px]"
                  >
                    <div
                      className="projecttext w-6/12 text-center ml-20 xl:ml-0 flex-none xl:w-6/12 xl:flex-shrink-0"
                    >
                      <h2 
                      style={{
                        background: 'linear-gradient(hsl(var(--color-white)), hsl(200, 60%, 82%))',  // Apply the gradient
                        backgroundClip: 'text',         // Clipping the background to the text
                        WebkitBackgroundClip: 'text',   // For WebKit browsers (Chrome, Safari)
                        WebkitTextFillColor: 'transparent', // Making the text color transparent to show the background
                        backgroundPosition:'fixed'
                      }}
                      className="text-[70px] w-[500px] ml-[80px] font-bold p-8 text-left md:w-[600px] md:text-7xl md:ml-28 xl:text-7xl xl:m-10 xl:font-bold xl:w-76 xl:-ml-20 xl:text-center xl:p-10 text-[#fff]">
                        My Work.
                      </h2>
                      <p className="text-[#cbcaca] text-[40px] text-balance ml-5 font-semibold w-[490px] md:w-[800px] md:-ml-24 xl:m-10 xl:text-5xl xl:w-2/4">
                        "Bringing ideas to life through creativity and code."
                      </p>
                    </div>

                    <div
                      id="project1"
                      onMouseEnter={mouseIN}
                      onMouseLeave={mouseOut}
                      
                      className="slide w-[600px] h-[450px] ml-[60px] m-10 grid grid-cols-2
                      rounded-3xl md:w-[680px] xl:w-6/12 xl:h-[400px] text-white md:grid md:grid-cols-2
                       xl:flex-shrink-0 bg-[#bebeb0] xl:p-4 xl:mt-32 xl:-ml-24 xl:rounded-3xl
                       hover:bg-[#98988C]"
                    >
                      <div id="img" className=" w-[250px] mt-20">
                        <img src={project1} alt="" className="h-[250px]" />
                      </div>
                      <div id="info" className="flex flex-col gap-[20px]  md:gap-[40px] m-[20px] -ml-[0px]">
                        <h4 className="text-black  font-semibold text-[30px] text-center md:text-[20px] mt-[30px]">Cynthia Ugwu Clone</h4>
                        <p className="text-[20px] md:text-[16px] -mt-[20px]">I made Awwwards winning webiste Cynthia Ugwu.
                          It's a website with a lot og animation and interaction.

                        </p>
                        <h4 className=" text-white uppercase  text-center   flex gap-2 ">
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full ">HTML </span>
                          <span className="bg-gray-500 w-[50px] p-2  rounded-full ">CSS </span>

                          <span className="bg-gray-500 w-[120px] p-2 rounded-full ">JavaScript </span>
                          



                          </h4>
                          <h4 className=" text-white uppercase  text-center flex gap-4  md:-mt-[30px]">
                          
                          <span className="bg-gray-500 w-[80px] p-2 rounded-full ">GSAP</span>
                          <span className="bg-gray-500 w-[130px] p-2 rounded-full ">Locomotive </span>



                          </h4>
                          
                      </div>
                    </div>
                    <div
                      id="project2"
                      className="slide w-[430px] h-[400px] ml-[60px] m-10 xl:mt-32 md:w-[680px] rounded-3xl xl:w-6/12 xl:flex-shrink-0 bg-[#bebeb0] xl:rounded-3xl"
                    >
                      project2
                    </div>
                    <div
                      id="project3"
                      className="slide w-[430px] h-[400px] ml-[60px] m-10 xl:mt-32 md:w-[680px] rounded-3xl xl:w-6/12 xl:flex-shrink-0 bg-[#bebeb0] xl:rounded-3xl"
                    >
                      project3
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Work;
