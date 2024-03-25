import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";

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
    <div id="contactform" className="xl:grid xl:grid-cols-2 xl:gap-4">
      <div
        className="xl:w-[900px] bg-[#d6d6d0] w-[800px] pt-28 text-[#3a3733] h-[200vh]
      font-helvetica xl:col-span-1
     xl:space-y-5  xl:h-[200vh]"
      >
        <form ref={form} onSubmit={sendEmail}>
          <div
            id="name"
            className="
        w-full h-20  ml-8 text-5xl mt-0 pt-20  
        sm:w-full sm:h-10 sm:-ml-12 sm:text-3xl sm:-mt-52
        xl:w-full xl:h-15 xl:ml-16 xl:text-4xl xl:-mt-20 xl:pt-0 "
          >
            <label
              htmlFor="name"
              className="
          block p-1 font-semibold
          sm:w-full sm:h-10 sm:ml-28 sm:text-3xl sm:mt-12 
          xl:block xl:pt-10 xl:ml-4 xl:font-semibold"
            >
              {" "}
              What's your name?
            </label>
            <input
              type="text"
              name="user_name"
              className="
          w-5/6 ml-2 focus:outline-none bg-[#e6e6e1] border-4 rounded-lg border-[#989893] pt-10 mt-5 pb-8 pl-10  h-3/4
          sm:w-full sm:h-10 sm:ml-28 sm:text-3xl  sm:mt-4 
           xl:w-5/6  xl:ml-5 xl:mt-12  xl:focus:outline-none xl:bg-[#d6d6d0]"
            />
          </div>

          <div
            id="email"
            className="
        w-full  h-20  ml-8 text-5xl mt-52
        sm:w-full sm:h-10 sm:ml-16 sm:text-3xl sm:mt-12 
        xl:w-5/6 xl:h-15 xl:ml-16 xl:mt-48 xl:text-3xl"
          >
            <label
              htmlFor="email"
              className="
          block p-1 font-semibold 
          sm:w-full sm:h-10 sm:ml-2 sm:text-3xl sm:-mt-8 
          xl:block xl:p-4 xl:ml-0 xl:font-semibold"
            >
              What's your email?
            </label>
            <input
              type="email"
              name="user_name"
              className="
            ml-4 focus:outline-none mt-5 pt-8  border-4 rounded-lg bg-[#e6e6e1] border-[#989893] pb-8 pl-10  w-5/6 h-20
            sm:w-full sm:h-10 sm:ml-2 sm:text-3xl  sm:mt-4
             xl:mt-8  xl:ml-5 xl:focus:outline-none xl:bg-[#d6d6d0]"
            />
          </div>

          <div
            id="message"
            className="
        w-full h-28  ml-8 text-5xl mt-32 
        sm:w-full sm:h-10 sm:ml-16 sm:text-3xl sm:-mt-5
        xl:w-5/6 xl:h-15 xl:ml-32 xl:mt-32 xl:text-3xl"
          >
            <label
              htmlFor="message"
              className="
          block p-1 font-semibold
          md:p-2
          xl:block xl:p-4 xl:-ml-16 xl:font-semibold"
            >
              Your message
            </label>
            <textarea
              name="message"
              className="
          w-5/6 ml-4 h-20 mt-6 focus:outline-none border-4 rounded-lg bg-[#e6e6e1] border-[#989893]
          sm:w-full sm:h-10 sm:ml-2 sm:text-3xl  sm:mt-4
           xl:w-5/6  xl:-ml-10 xl:focus:outline-none xl:h-20"
            />
          </div>

          <div
            id="sendCircle"
            className="
          w-1/4 h-2/4 ml-12 mt-20
          sm:w-36 sm:h-36 sm:-mt-2 sm:ml-16
          xl:w-44 xl:h-44 text-white   bg-black rounded-full
         justify-center items-center xl:mt-44
           
        xl:ml-32"
          >
            <input
              type="submit"
              value="send"
              className=" pl-12 p-20 text-5xl mt-0 -ml-2
                      sm:-mt-4 sm:-ml-2
          "
            />
          </div>
        </form>
      </div>
      <div id="second" className=" bg-[#d6d6d0] w-[620px] xl:col-span-1 xl:ml-32">

      </div>
    </div>
  );
}

export default Contactform;
