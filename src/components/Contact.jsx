import React, { useState } from "react";

import Connectfooter from "./Connectfooter";
import Links from "./Links";
import Contactform from "./Contactform";
import IntoAnimation from "./IntoAnimation";

function Contact() {
  return (
    <>
    <IntoAnimation/>
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
            <h4 className=" mt-10 ml-16 
            xl:mt-32 xl:ml-36">Let's start a</h4>
            <h4 className="  mt-15 ml-5 xl:ml-36 ">project together</h4>
          </div>
          <div
            id="divider"
            className="border-2 border-black w-5/6  ml-10 
                      mt-8 opacity-50 xl:opacity-100
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-10
                      "
          ></div>
          <div id="form" className=" mt-40 xl:mt-36 absolute xl:w-6/12">
            <Contactform/>
          </div>
          
        </div>

        <div id="rightdiv" className=" h-screen bg-[#828E82]  xl:col-span-1">
          <div id="img" className="bg-red-200 opacity-0
          w-10 h-10 mt-18   ml-4 rounded-full 
          xl:w-36 xl:h-36 xl:mt-36 xl:rounded-full  ">
            <img src="" alt="" />
          </div>
          <div id="contactDetails " 
          className="  absolute  xl:mt-0 font-semibold p-10">
            <h3 className="opacity-40">CONTACT DETAILS </h3>
            <h3>yashadoke@gmial.com</h3>
            <h3>+91 9324781464</h3>
          </div>
          <div id="socials"  className="translate-y-full ">
            <Links columnDirection={true}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;