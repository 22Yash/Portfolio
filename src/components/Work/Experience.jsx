import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCalendarWeek } from "react-icons/fa";

function Experience() {
  const text = "Junior Web Developer";
  const texttwo = "Web Developer Intern ";
  return (
    <div
      className="experience  h-[800px] w-[700px]  sm:w-full xl:w-full "
      id="Resume"
    >
      <div
        id="title"
        className="text-white   font-helvetica  font-semibold
      text-[70px] ml-[40px] pt-[20px]
      xl:text-[90px] xl:ml-[100px] xl:pt-[40px]
       "
      >
        <h3>Experience</h3>
      </div>
      <div id="organisation" className="">
        <div
          id="first"
          className="
        w-full h-[100px]  flex justify-between
        xl:w-full xl:h-[130px] xl:flex xl:justify-between
        text-[#bdbeb0] xl:p-[10px]  font-helvetica font-medium xl:mt-[20px] xl:pl-[40px]"
        >
          <div id="name">
          <h3 className="text-[30px] flex gap-[10px] xl:gap-[30px] pl-[40px] xl:text-[50px]  xl:ml-[20px] ">
            <div className="title relative overflow-hidden group">
              <h1 className="relative inline-block transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-[var(--fs-lg)] font-[var(--fw-light)]">
                <span className="block transition-opacity duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-[hsla(var(--color-white),0.6)] group-hover:opacity-0">
                  {text}
                </span>
                <span className="absolute top-0 left-0 w-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0 text-[hsla(var(--color-white),1)] font-bold">
                  {text}
                </span>
              </h1>
            </div>
            </h3>
            <h5 className='text-[20px]  pl-[40px] xl:ml-[20px] '>Zummit Infolabs</h5>
          </div>

          <div id="duration" className="xl:mr-[60px] mr-[20px] font-helvetica">
            <h4 className="text-[20px] mt-[10px] xl:mt-[20px]">
              July 2024 - Oct 2024
            </h4>
            <h4 className="float-end">Remote</h4>
          </div>
        </div>

        <div
          id="border"
          className="border-b-[3px] border-[#fafaf9] w-[90%] xl:ml-[80px] ml-[40px] mt-[10px]"
        ></div>

        {/* Prodigy Infotech */}
        <div
          id="second"
          className="
         w-full h-[100px]  flex justify-between
        xl:w-full xl:h-[130px] xl:flex xl:justify-between
        text-[#bdbeb0] xl:p-[10px]  font-helvetica font-medium xl:mt-[20px] xl:pl-[40px]"
        >
          <div id="name">
          <h3 className="text-[30px] flex gap-[10px] xl:gap-[30px] pl-[40px] xl:text-[50px]  xl:ml-[20px] ">
            <div className="title relative overflow-hidden group">
              <h1 className="relative inline-block transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-[var(--fs-lg)] font-[var(--fw-light)]">
                <span className="block transition-opacity duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-[hsla(var(--color-white),0.6)] group-hover:opacity-0">
                  {texttwo}
                </span>
                <span className="absolute top-0 left-0 w-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0 text-[hsla(var(--color-white),1)] font-bold">
                  {texttwo}
                </span>
              </h1>
            </div>
            </h3>
            <h5 className="text-[20px] w-[430px] pl-[40px] xl:ml-[20px]">
              Prodigy Intern
            </h5>
          </div>

          <div id="duration" className="xl:mr-[60px] font-helvetica">
            <h4 className="text-[20px] mt-[20px]">Dec 2023</h4>
            <h4 className="float-end">Remote</h4>
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
