import React, { useEffect, useRef } from "react";

import Links from "./Links";
import Contactform from "./Contactform";
import IntoAnimation from "./IntoAnimation";
import Navbar from "../Header/Navbar";
import Hamburger from "../Header/Hamburger";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Maincontact() {
  

  const ref= useRef(null);
  useEffect(() => {
    const el =ref.current;
    gsap.fromTo(el,{
      y:100,
      opacity:1
    },{
      opacity:1,
      y:-90,
      duration:2,
      scrollTrigger:{
        trigger:el,
        markers:true,
        start:"top=90",
        end:"bottom-=50",
        toggleActions:"play none none reverse"
      }
    })


  } ,[])



  return (
    <>
      <div
        id="parent"
        
        className=" xl:w-full h-screen z-12 overflow-x-hidden"
      >
        <IntoAnimation />
        <Navbar  />
         <div id="hamburger">
          <Hamburger />
         </div>
        

        <div
          id="contact"
          className="bg-[#828E82] w-full xl:h-lvh 
    grid grid-cols-1 
    xl:grid xl:grid-cols-3 "
        >
          <div id="leftDiv" className=" h-screen col-span-1 xl:col-span-2  ">
            <div
              id="contactHeading"
              className=" text-3xl flex flex-col 
      xl:text-7xl xl:font-semibold sm:text-5xl  "
            >
              <h4
                className=" mt-10 ml-16 
            xl:mt-32 xl:ml-36"
              >
                Let's start a
              </h4>
              <h4 className="  mt-15 ml-5 xl:ml-36 ">project together</h4>
            </div>
            <div
              id="divider"
              className="border-2 border-black w-5/6  ml-10 
                      mt-8 opacity-50 xl:opacity-100
                      sm:w-4/4 sm:ml-12 sm:m-10 sm:mt-12
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-10
                      "
            ></div>
            <Contactform/>
          </div>

          <div id="rightdiv" className=" h-screen p-5 mt-22 xl:col-span-1">
            <div
              id="contactDetails "
              className="  absolute mt-16  font-semibold p-10
            sm:mt-72  sm:ml-12
            xl:ml-0 xl:mt-64"
            >
              <h3 className="opacity-40 ">CONTACT DETAILS </h3>
              <h3>yashadoke@gmial.com</h3>
              <h3>+91 9324781464</h3>
            </div>
            <div id="socials" className=" flex xl:mt-64 mt-36 xl:col-span-1">
              <Links  columnDirection={true}/>
            </div>
          </div>
        </div>
        <div id="lastDiv" className="w-full xl:h-3/4  bg-[#828E82]">

        </div>
      </div>


    </>
  );
}

export default Maincontact;
