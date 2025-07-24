import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "./images/react.png";
import image2 from "./images/java-logo-1.png";
import image3 from './images/JavaScript.png';
import image4 from "./images/node-min.png";
import image5 from "./images/mongodb-min.webp";
import image6 from "./images/MySQL-min.webp";
import image7 from "./images/github-min.webp";
import image9 from "./images/gsap-min.webp";
import image10 from "./images/download-min.webp";
import image11 from "./images/html-min.webp";
import image12 from "./images/css.webp";
import resumeBG from "../assets/Untitled.png"
import { FaLinkedin ,FaSquareGithub  } from "react-icons/fa6";




gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const isMobile = window.innerWidth <= 768;

  

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
      // Animation for desktop/laptop screens
      const tlDesktop = gsap.timeline();

      
      tlDesktop.fromTo(".dev-box h4",{
        opacity:0,
        y: 40,
        stagger: {
          amount: 2
        },
      },
       {
        opacity: 1,
        y:-40,
        
        stagger: {
          amount: 2
        },
        scrollTrigger: {
          trigger: ".dev-box h4 ",
          
          // markers: true,
          start: "-450 top",
          end: "-300 top",
          scrub: 1
        }
      });
  
        tlDesktop.fromTo(".dev-box img",{
          opacity:0,
          y: 20,
          stagger: {
            amount: 2
          },
        },
         {
          opacity: 1,
          y:0,
          
          stagger: {
            amount: 2
          },
          scrollTrigger: {
            trigger: ".dev-box img ",
            
            // markers: true,
            start: "-300 top",
            end: "-100 top",
            scrub: 1
          }
        });
     
    }  else {
      const tlMobile = gsap.timeline();

      tlMobile.fromTo(".dev-box h4",{
        opacity:0,
        y: 40,
        stagger: {
          amount: 2
        },
      },
       {
        opacity: 1,
        y:0,
        
        stagger: {
          amount: 2
        },
        scrollTrigger: {
          trigger: ".dev-box h4 ",
          
          // markers: true,
          start: "-950 top",
          end: "-700 top",
          scrub: 1
        }
      });
  
        tlMobile.fromTo(".dev-box img",{
          opacity:0,
          y: 20,
          stagger: {
            amount: 2
          },
        },
         {
          opacity: 1,
          y:0,
          
          stagger: {
            amount: 2
          },
          scrollTrigger: {
            trigger: ".dev-box img ",
            
            // markers: true,
            start: "-700 top",
            end: "-300 top",
            scrub: 1
          }
        });

     
    }
  }, []);

  const mouseIN = () => {

    gsap.set("#card",{scale:0.9,transformOrigin: "bottom"})
    gsap.to("#card", {
      rotation: -8, 
      ease: "power2.inOut", 
      scale:1
    });

}

const mouseOut = () =>{
  gsap.to("#card", {
    rotation: 0, // Reset rotation to 0 degrees (straight)
    ease: "power2.inOut", // Use ease for smoother animation
  });

}


 

  return (
    <section id="Skills" className="  w-[700px]   sm:w-full xl:w-full "
    
    >
          
      
      <div id="page3" className="w-full fixed "
      
      >

      <h3 className="font-bold text-white  ">Things I'm <span>good</span> at</h3>
      <h5 className="font-bold text-white">skills, interests, passion and hobbies</h5>
      <div className="box dev-box">
        <h4>development</h4>
        <div className="elem-div grid grid-cols-3 sm:grid sm:grid-cols-3 xl:flex  ">
          <img src={image1} alt="React" />
          <img src={image2} alt="Java" />
          <img src={image3} alt="JavaScript" />
          <img src={image4} alt="Node.js" />
          <img src={image7} alt="GitHub" />
          <img src={image6} alt="MySQL" />
          <img src={image5} alt="MongoDB" />
          
          <img src={image9} alt="GSAP" />
          <img src={image10} alt="Download" />
          <img src={image11} alt="HTML" />
          <img src={image12} alt="CSS" />
        </div>
      </div>
    </div>

    <div id="resume" className="w-full h-screen flex justify-center items-center flex-col" 
    style={{
        background: isMobile
          ? "none" // No background on mobile
          : `url(${resumeBG}) left bottom / 100% 150% no-repeat`,
        backgroundPosition: isMobile ? "none" : "0px -400px",
        backgroundAttachment: isMobile ? "none" : "fixed",
        
      }}
    >

      
      <div id="card" className="w-[400px] h-[530px] rounded-[30px] sm:p-[30px]
      xl:p-[30px] bg-white shadow-2xl shadow-gray-500/90"
      onMouseEnter={mouseIN}
      onMouseLeave={mouseOut}>
      <div 
      className="relative z-0 p-12 rounded-2xl md:p-0 sm:p-6 group"
    >
      <div className="relative">
        <div className="text-[30px] font-bold text-red-600  ">YASH DOKE</div>
        <div className="text-lg text-black font-bold">Creative Frontend Developer</div>
        <hr className="my-4 border-gray-500" />
        <p className="text-base text-gray-400 font-semibold text-[20px]">
          I am Yash, a 4th year IT Engineering Student. 
          Successfully building user-friendly websites with ReactJS. 
          I pay attention to small details, enjoy technical problems, and work well in teams. 
          I like learning new technologies and always aim to improve my skills.
        </p>
        <div className="mt-4 flex flex-col">
          <a className="text-blue-400" target="_blank" href="yashadoke@gmail.com">yashadoke@gmail.com</a>
          <span className="text-gray-400">Mumbai , India</span>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="text-xl font-semibold text-black">WORK EXPERIENCE</div>
        <p className="text-base text-gray-400 font-bold">
          Junior Web Developer | Zummit Infolabs <br />
         
        </p>
      </div>
     

     

      

      
    </div>
   

      </div>


      <div id="links" className="flex gap-[20px] mt-[10px]">
              <span className="mt-[5px] text-[60px]"><Link to="www.linkedin.com/in/yashdoke10"><FaLinkedin className="bg-slate-50"/>  </Link></span>
        
            
            <span className="mt-[5px] text-[60px]"><Link to="https://github.com/22Yash"><FaSquareGithub className="bg-slate-50" /></Link>  </span>
            
      </div>
      
            
     </div>

    </section>
    
  );
}

export default Skills;
