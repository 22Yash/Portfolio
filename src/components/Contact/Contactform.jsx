import React, { useRef } from "react";
import emailjs from "emailjs-com";
import GetInTouch from "./GetInTouch";

function Contactform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qvyaxa3",
        "template_bovjcmd",
        form.current,
        "L0dMxQ0f9HRuIqNte"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className="flex flex-col lg:space-y-5
     xl:space-y-5 "
    >
      <form ref={form} onSubmit={sendEmail}>
     
        <div
          id="name"
          className="
        w-full h-20  ml-8 text-lg -mt-36 
        md:w-full md:h-10 md:-ml-12 md:text-3xl md:-mt-32
        xl:w-full xl:h-15 xl:ml-32 xl:text-2xl xl:-mt-32 "
        >
          <label
            htmlFor="name"
            className="
          block p-1 font-semibold 
          md:w-full md:h-10 md:ml-32 md:text-3xl md:mt-12 
          xl:block xl:p-0 xl:ml-4 xl:font-semibold"
          >
            {" "}
            What's your name?
          </label>
          <input
            type="text"
            name="user_name"
            className="
          w-5/6 ml-4 focus:outline-none bg-[#828E82] 
          md:w-full md:h-10 md:ml-32 md:text-3xl md:opacity-0 md:mt-44
           xl:w-5/6  xl:ml-5 xl:focus:outline-none"
          />
        </div>
        <div
          id="divider"
          className="border-2 border-black w-full ml-10 
                      -mt-5 opacity-70 
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32 
                      md:w-4/4 md:ml-16 md:m-10 md:mt-22
                      xl:w-full xl:ml-36 xl:m-10 xl:mt-10 xl:opacity-50
                      "
        ></div>
        <div
          id="email"
          className="
        w-full  h-20  ml-8 text-lg mt-7 
        md:w-full md:h-10 md:ml-16 md:text-3xl md:mt-12 
        xl:w-5/6 xl:h-15 xl:ml-32 xl:mt-5 xl:text-2xl"
        >
          <label
            htmlFor="email"
            className="
          block p-1 font-semibold
          md:w-full md:h-10 md:ml-5 md:text-3xl md:mt-5 
          xl:block xl:p-4 xl:ml-4 xl:font-semibold"
          >
            What's your email?
          </label>
          <input
            type="email"
            name="user_name"
            className="
            ml-4 focus:outline-none bg-[#828E82] 
            xl:w-5/6  xl:ml-5 xl:focus:outline-none"
          />
        </div>
        <div
          id="divider"
          className="border-2 border-black w-full ml-10 
                      -mt-2 opacity-70
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32 
                      md:w-4/4 md:ml-16 md:m-10 md:mt-22
                      xl:w-full xl:ml-36 xl:m-10 xl:mt-20 xl:opacity-50
                      "
        ></div>

        <div
          id="message"
          className="
        w-full h-28  ml-8 text-lg mt-2 
        md:w-full md:h-10 md:ml-16 md:text-3xl md:-mt-5
        xl:w-5/6 xl:h-15 xl:ml-32 xl:mt-5 xl:text-2xl"
        >
          <label
            htmlFor="message"
            className="
          block p-1 font-semibold
          md:p-2
          xl:block xl:p-4 xl:ml-4 xl:font-semibold"
          >
            Your message
          </label>
          <textarea
            name="message"
            className="
          w-5/6 ml-4 h-10 focus:outline-none bg-[#828E82] 
           xl:w-5/6  xl:ml-5 xl:focus:outline-none"
          />
        </div>
        <div
          id="divider"
          className="border-2 border-black w-full  ml-10 
                      -mt-5 opacity-70 xl:opacity-50
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      md:mt-12
                      xl:w-full xl:ml-36  xl:mt-10
                      "
        ></div>

        <div
          id="sendCircle"
          className="w-44 h-44 text-white  mt-10 bg-black rounded-full
         justify-center items-center  md:mt-52
        xl:ml-32"
        >
          <input type="submit" value="send" className=" pl-12 p-20 text-2xl" />
        </div>
      </form>
    </div>
  );
}

export default Contactform;
