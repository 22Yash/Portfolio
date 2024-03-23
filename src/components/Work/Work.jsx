import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import Mousefollower from "../Animation/Mousefollower";
import LocomotiveScroll from "locomotive-scroll";
import Resume from "./Resume";

function Work() {

  

  const mousefollowerRef = useRef(null);
  const viewRef = useRef(null);
  const workRef = useRef(null);
  const scrollRef = useRef(null);

  const projectRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    const el = mousefollowerRef.current;
    const work = workRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(el, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "back.out",
      });
    };

    work.addEventListener("mousemove", handleMouseMove);

    return () => {
      work.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const mouseIn = () => {
    gsap.to(mousefollowerRef.current, {
      scale: 1.5,
      backgroundColor: "black",
      opacity: 1,
    });
  };

  const mouseOut = () => {
    gsap.to(mousefollowerRef.current, {
      scale: 0,
      backgroundColor: "black",
    });
  };


  
    const tlDesktop = useRef(null);
  const tlMobile = useRef(null);


  useEffect(() => {
    

    // Check if the screen width is greater than the mobile breakpoint (e.g., 768px)
    const isLaptopScreen = window.innerWidth > 768;

    if (isLaptopScreen) {
      // Animation for desktop/laptop screens
      tlDesktop.current = gsap.timeline();

      tlDesktop.current.to(".slide", {
        scrollTrigger: {
          trigger: ".project",
          start: "-300 top ",
          end: "100 top ",
          scrub: 1,
          markers:true,
          
          
          
          
          
        },
        xPercent: -100,
        duration:2
      });

      
      
        tlDesktop.current.to(".work", {
          scrollTrigger: {
            trigger: ".work",
            start: "-580 top ",
            end: "-570 top ",
            scrub: 2,
            markers:true,
            pin:true,
            
            
          },
          
          y: -150,
          duration:5,
     
  
          
          
          
          
          
        });
      
      



    
        
      


       
      

    } else {
      // Animation for mobile screens
      tlMobile.current = gsap.timeline();
          
      tlMobile.current.to(".slide",{

        
      }

      );
    }
  }, []);

  
 
  

  

  

  

  return (
    
      <>
      <section id="Work" className="work w-full relavtive rounded-t-3xl">
        {/* <Mousefollower /> */}
        <div id="work" ref={workRef} className="overflo-x-hiddden">
          <div
            ref={mousefollowerRef}
            id="view"
            className="w-12 h-12 justify-center opacity-0 text-sm flex items-center absolute bg-black text-white rounded-full"
          >
            view
          </div>
          <div id="projects" className="project w-full  ">
            <div className="cont  h-[400vh] xl:h-[120vh] bg-[#0a0a09]">
              <div 
              className="slides grid 
              xl:sticky xl:top-0 xl:left-0  xl:w-full xl:flex h-screen bg-[#0a0a09]">
                <div className="  grid-cols-1 w-10/12 h-screen
                xl:w-10/12 xl:sticky xl:h-screen  xl:flex-shrink-0 bg-[#0a0a09] ">
                  <div id="project" 
                  className=" slide 
                  col-span-1 
                  xl:flex xl:m-10  xl:gap-10">
                    <div className="projecttext w-6/12 text-center flex-none
                    xl:w-6/12 xl:flex-shrink-0">
                    <h2 className="
                    text-6xl w-11/12 font-bold p-8 text-left
                    xl:text-7xl xl:m-10  xl:font-bold xl:w-12 xl:text-center xl:p-10 text-[#bebeb0]">
                    My Work
                  </h2>
                  <p className="text-[#7b736a] text-2xl text-balance ml-5 font-semibold w-full
                  xl:m-10 xl:text-3xl xl:w-2/4 xl:text-center">"Bringing ideas to life through creativity and code."</p>

                    </div>
                  
                  <div id="project1" className=" slide  w-[330px]  h-[400px] ml-10 m-10   rounded-3xl
                  xl:w-6/12 xl:h-[400px] text-white xl:flex-shrink-0 bg-[#bebeb0] xl:p-20 xl:mt-32 xl:-ml-24 xl:rounded-3xl" >project1</div>
                  <div id="project2" className=" slide w-[330px]  h-[400px] ml-10 m-10 xl:mt-32    rounded-3xl
                  xl:w-6/12 xl:flex-shrink-0  bg-[#bebeb0] xl:rounded-3xl"> project2</div>
                <div id="project3" className=" slide w-[330px]  h-[400px] ml-10 m-10 xl:mt-32  rounded-3xl
                 xl:w-6/12  xl:flex-shrink-0  bg-[#bebeb0] xl:rounded-3xl"> project3</div>
                <div id="project4" className=" slide w-[330px]  h-[400px] ml-10 xl:mt-32   rounded-3xl
                xl:w-6/12  xl:flex-shrink-0  bg-[#bebeb0] xl:rounded-3xl"> project4</div>
                

                  </div>
                  
                </div>
                
                
               
                
              </div>
            </div>
            {/* <div
            ref={viewRef}
            onMouseEnter={mouseIn}
            onMouseLeave={mouseOut}
            id="firstproject"
            className="lg:bg-red-400 lg:w-1/4 lg:h-2/4 lg:p-5 lg:m-10 "
          ></div> */}
          </div>
          
        </div>
        
      </section>
      
      
    </>
    
    
  );
}

export default Work;
