import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Experience() {
  const firstBlockRef = useRef(null);
  const secondBlockRef = useRef(null);

  const handleMouseEnter = (blockRef) => {
    gsap.to(blockRef.querySelector(".base-text"), {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(blockRef.querySelector(".hover-text"), {
      y: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (blockRef) => {
    gsap.to(blockRef.querySelector(".base-text"), {
      opacity: 1,
      duration: 0.5,
      ease: "power3.in",
    });
    gsap.to(blockRef.querySelector(".hover-text"), {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    });
  };

  const text = "Junior Web Developer";
  const texttwo = "Web Developer Intern";

  return (
    <div
      className="experience h-[800px] w-[700px] sm:w-full xl:w-full"
      id="experience"
    >
      <div
        id="title"
        className="text-white font-helvetica font-bold text-[70px] ml-[40px] pt-[20px] 
        
        xl:text-[70px] xl:ml-[100px] xl:pt-[40px]"
      >
        <h3 className="opacity-60">Experience</h3>
        <h3>History</h3>
      </div>
      <div id="organisation">
        {/* First Block */}
        <div
          ref={firstBlockRef}
          id="first"
          className="group w-full h-[210px] flex flex-col mt-[40px] sm:flex-col justify-between 
          xl:mt-[60px] xl:w-full xl:h-[130px] xl:flex xl:flex-row xl:justify-between text-[#bdbeb0] 
          xl:p-[10px] font-helvetica font-medium xl:pl-[40px]"
          onMouseEnter={() => handleMouseEnter(firstBlockRef.current)}
          onMouseLeave={() => handleMouseLeave(firstBlockRef.current)}
        >
          <div id="name">
            <h3 className="text-[55px] flex flex-col gap-[10px] 
            sm:flex sm:text-[50px]
            xl:gap-[30px] pl-[40px] xl:text-[40px] xl:ml-[20px]">
              <div className="title relative overflow-hidden">
                <h1 className="relative inline-block">
                  <span className="base-text block text-[hsla(var(--color-white),0.6)]">
                    {text}
                  </span>
                  <span className="hover-text absolute top-0 left-0 w-full translate-y-full opacity-0 text-[hsla(var(--color-white),1)] font-bold">
                    {text}
                  </span>
                </h1>
              </div>
            </h3>
            <h5 className="text-[30px] pl-[40px]  xl:ml-[20px]">
              Zummit Infolabs
            </h5>
          </div>

          <div id="duration" className="xl:mr-[60px] mr-[20px] font-helvetica">
            <h4 className="text-[30px] ml-[40px] xl:ml-[0px] mt-[0px] xl:mt-[20px]">
              July 2024 - Oct 2024
            </h4>
            <h4 className="ml-[40px] text-[30px] xl:float-end">Remote</h4>
          </div>
        </div>

        <div
          id="border"
          className="border-b-[3px] border-[#fafaf9] w-[90%] xl:ml-[80px] ml-[40px] mt-[10px]"
        ></div>

        {/* Second Block */}
        <div
          ref={secondBlockRef}
          id="second"
          className="group w-full h-[210px] flex flex-col mt-[40px] sm:flex-col 
           justify-between xl:mt-[60px] xl:w-full xl:h-[130px] xl:flex xl:flex-row
            xl:justify-between text-[#bdbeb0] xl:p-[10px] font-helvetica font-medium xl:pl-[40px]"
          onMouseEnter={() => handleMouseEnter(secondBlockRef.current)}
          onMouseLeave={() => handleMouseLeave(secondBlockRef.current)}
        >
          <div id="name">
            <h3 className="text-[55px] flex gap-[10px] xl:gap-[30px] sm:text-[50px] pl-[40px] xl:text-[50px] xl:ml-[20px]">
              <div className="title relative overflow-hidden">
                <h1 className="relative inline-block">
                  <span className="base-text block text-[hsla(var(--color-white),0.6)]">
                    {texttwo}
                  </span>
                  <span className="hover-text absolute top-0 left-0 w-full translate-y-full opacity-0 text-[hsla(var(--color-white),1)] font-bold">
                    {texttwo}
                  </span>
                </h1>
              </div>
            </h3>
            <h5 className="text-[30px] pl-[40px] xl:ml-[20px]">
              Prodigy Intern
            </h5>
          </div>

          <div id="duration" className="xl:mr-[60px] font-helvetica">
          <h4 className="text-[30px] ml-[40px] xl:ml-[0px] mt-[0px] xl:mt-[20px]">
          Dec 2023</h4>
          <h4 className="ml-[40px] text-[30px] xl:float-end">Remote</h4>
          </div>
        </div>

        <div
          id="border"
          className="border-b-[3px] border-[#fafaf9] w-[90%] xl:ml-[80px] ml-[40px] mt-[10px]"
        ></div>
      </div>
    </div>
  );
}

export default Experience;
