import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Links from "./Links";
import heroSVG from "../Header/background.png"

import { HashLink as Link } from "react-router-hash-link";
import BackToTopButton from "../Header/BackToTopButton";
import gsap from "gsap";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

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

  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    const enterMouse = (e) => {
      const { clientX, clientY } = e;

      const dx =
        clientX - circle.getBoundingClientRect().left - circle.clientWidth / 2;
      const dy =
        clientY - circle.getBoundingClientRect().top - circle.clientHeight / 2;

      gsap.to(circle, {
        x: dx / 1.5, // Adjust the division factor for the strength of the effect
        y: dy / 1.5,
        ease: "power4.out",
        duration: 0.3,
        backgroundColor: "#544f49",
      });
    };

    const leaveMouse = () => {
      gsap.to(circle, {
        x: 0,
        y: 0,
        ease: "power1.out",
        duration: 0.3,
        backgroundColor: "#544f49",
        color: "white",
      });
    };

    if (circle) {
      circle.addEventListener("mousemove", enterMouse);
      circle.addEventListener("mouseleave", leaveMouse);
    }

    return () => {
      if (circle) {
        circle.removeEventListener("mousemove", enterMouse);
        circle.removeEventListener("mouseleave", leaveMouse);
      }
    };
  }, []);



  return (
    <div id="Contact"
     className=" w-[700px] xl:h-[150vh] h-[250vh]  
     md:w-full xl:w-full xl:grid xl:grid-cols-2 
     md:h-[170vh] p-[40px] flex flex-col justify-center items-center "
     style={{
      background: `
        url(${heroSVG}) left bottom / 280% 200% no-repeat`,
      backgroundPosition: 'left bottom', // Consistent positioning
      backgroundAttachment: 'fixed', // Optional: use if you want a parallax effect
    }}
     
    >
      
      <div id="first" className=" w-[700px] mt-[20px] xl:mt-[0px] ">
      <div
        id="contactHeading" className="ml-[-240px]"
      
        
       
      >
        <h1 className=" text-[60px] ml-[30px] flex justify-center font-helvetica    mt-0 pt-10 
         xl:text-[85px] text-white opacity-50
         xl:flex xl:justify-center font-semibold xl:ml-[-50px] xl:pt-5 xl:mt-0 "
        >
          Let's 
          <br />  
          
        </h1>
        <h1 className=" text-[60px] ml-[30px] flex justify-center font-helvetica    mt-0 pt-10 
          xl:text-[85px] text-white 
         xl:flex xl:justify-center font-semibold xl:ml-20 xl:pt-0 xl:mt-[-30px] "
        >
          Connect
          <br />  
          
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <div id="conactform" className=" h-[700px] p-[40px] rounded-[50px] mt-[40px] 
      border-[1px] border-[#544f49] shadow-xl  text-white
       md:w-[600px] md:ml-[10px] md:mt-[60px] md:h-[480px]  xl:ml-[20px]  xl:flex xl:flex-col
       xl:p-[20px] xl:h-[600px] flex justify-around flex-col gap-[10px]  "
        >

        <div id="rowOne" className="flex flex-col justify-center xl:flex-col md:gap-[40px] 
        xl:-mt-[180px] md:h-[300px]    h-[400px] xl:h-[350px]">
        <div
              id="name"
              className="
        w-full h-20  ml-8  mt-0 -pt-[80px]  text-[35px]
        md:w-5/6 md:h-10 md:-ml-12 md:text-3xl md:pt-0 md:-mt-[200px]
        xl:w-full xl:h-15 xl:ml-0 xl:text-4xl xl:mt-[px] xl:pt-0 "
            >
              <label
                htmlFor="name"
                className="
          block p-1 font-semibold 
          md:w-5/6 md:h-10 md:ml-28 md:text-3xl md:mt-0
          xl:block xl:pt-10 xl:ml-4 xl:font-semibold"
              >
                {" "}
                What's your name?
              </label>
              <input
                type="text"
                name="user_name"
                className="
          w-[400px] ml-2 focus:outline-none bg-[#e6e6e1] border-2 rounded-l-full rounded-r-full border-[#989893] pt-10 mt-5 pb-8 pl-10 h-1/4
          md:w-[400px] md:h-10 md:ml-28 md:text-3xl  md:mt-4 
           xl:w-[520px]  xl:ml-0 xl:mt-12  xl:focus:outline-none xl:bg-[#d6d6d0]"
                style={{
                  backgroundImage: `url(${heroSVG})`,
                  backgroundSize: "cover",
                }}
              />
            </div>

            <div
              id="email"
              className="
        w-full  h-20  ml-8 text-[35px] mt-36
        md:w-5/6 md:h-10 md:ml-16 md:text-3xl md:mt-[100px]
        xl:w-5/6 xl:h-15 xl:ml-0 xl:mt-[120px] xl:text-3xl"
            >
              <label
                htmlFor="email"
                className="
          block p-1 font-semibold -mt-[40px]
          md:w-full md:h-10 md:ml-2 md:text-3xl md:-mt-8 
          xl:block xl:p-4 xl:ml-0 xl:font-semibold"
              >
                What's your email?
              </label>
              <input
                type="email"
                name="user_name"
                className="w-[400px]
            ml-2 focus:outline-none mt-0 pt-8  border-2 rounded-l-full rounded-r-full bg-[#e6e6e1] border-[#989893] pb-8 pl-10  h-10 xl:h-[20px]
            md:w-5/6 md:h-10 md:ml-2 md:text-3xl  md:mt-4 xl:w-[520px]
             xl:mt-8  xl:ml-2 xl:focus:outline-none xl:bg-[#d6d6d0]"
                style={{
                  backgroundImage: `url(${heroSVG})`,
                  backgroundSize: "cover",
                }}
              />
            </div>
        </div>
        <div id="rowTwo" className="mt-[10px] md:-mt-[100px] xl:-mt-[480px]  ">
        <div
              id="message"
              className="
        w-full h-28  ml-8 text-[35px] -mt-[120px]
        md:w-5/6 md:h-10 md:ml-16 md:text-3xl md:-mt-[90px]
        xl:w-5/6 xl:h-15 xl:ml-[80px] xl:mt-[10px] xl:text-3xl"
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
          w-[400px] ml-4 h-20 mt-3 focus:outline-none border-2  rounded-[40px] bg-[#e6e6e1] border-[#989893]
          md:w-5/6 md:h-[100px] md:ml-2 md:text-3xl  md:mt-4
           xl:w-full  xl:-ml-16 xl:focus:outline-none xl:h-[120px] xl:bg-[#d6d6d0]"
                style={{
                  backgroundImage: `url(${heroSVG})`,
                  backgroundSize: "cover",
                }}
              />
            </div>

        </div>

        
        




        

      </div>

      <div
              id="sendCircle"
              ref={circleRef}
              className="
          w-[160px] h-[90px] ml-[240px] mt-[40px]
          md:w-[160px] md:h-[90px] md:mt-[20px] md:ml-[260px]
          xl:w-[160px] xl:h-[90px] text-white rounded-[40px] bg-[#544f49]
          justify-center items-center xl:mt-2 xl:ml-[-200px]
           
        "
            >
              <input
                type="submit"
                value="send"
                className=" text-center ml-[40px] text-[35px]  mt-[20px] xl:text-[35px] 
                      xl:mt-[20px] md:ml- md:text-3xl
          "
              /> 
            </div>
            </form>
        
      </div>
     
           
      <div
          id="second"
          className=" w-[600px]   h-screen flex  mt-[40px] xl:mt-[330px]  flex-col xl:flex-col xl:justify-between
            "
          
        >
          

          <div id="two" 
          className="flex gap-[30px] flex-col xl:flex-row " 
          >
          <div id="skills" className="  xl:w-[900px] p-[10px] ">
          <Link to="#Skills" className=" text-[22px] text-white">Skills</Link>
            <h3 className="text-[20px] text-white opacity-60">Check out the things I'm good at, from building websites to design and more.</h3>
          </div>
            <div id="experience" className=" xl:w-[900px] p-[10px]">
            <Link to="#experience" className=" text-[20px] text-white">Experience</Link>
            <h3 className="text-[20px] text-white opacity-60">Check out the things I'm good at, from building websites to design and more.</h3>
            </div>
            
          </div>


          
            

          {/* <div id="div" className="flex  ml-[80px] justify-center flex-col md:flex md:flex-col">
          <h3 className="  text-[35px] xl:text-[45px]  mt-[20px] xl:-mt-20 font-semibold font-helvetica  underline underline-offset-8 text-black w-[320px]">
        Contact details
      </h3>
          <h3 className="xl:text-[20px] pt-5 text-[30px] xl:w-[350px] xl:h-[50px] xl:mt-5 xl:-ml-10  flex xl:justify-center xl:items-center
          md:-mt-[40px]">
          <CgMail />  <span className="ml-[20px] font-helvetica md:-mt-[10px] -mt-[10px]"> - yashadoke@gmail.com</span>
            </h3>
            <h3 className="xl:text-[20px] text-[28px] mt-2 xl:w-[350px] xl:h-[50px] flex xl:-ml-16 xl:justify-center xl:items-center">
            <FaPhoneAlt /> <span className="ml-[20px] font-helvetica -mt-[5px]">93247871464</span>
            </h3>
          </div>
          <div id="links" className="ml-[80px] md:mt-[40px] md:ml-[110px] xl:mt-[0px] xl:ml-[0px]">
          <Links columnDirection={true}/>
          </div> */}
          
            
          

          
        </div>
      
      
    </div>
  );
}

export default Contactform;
