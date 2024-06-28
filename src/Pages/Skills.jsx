import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "./images/react.png";
import image2 from "./images/java-logo-1.png";
import image3 from './images/JavaScript.png';
import image4 from "./images/node-min.png";
import image5 from "./images/mongodb-min.webp";
import image6 from "./images/MySQL-min.webp";
import image7 from "./images/github-min.webp";
import image8 from "./images/barba-min.webp";
import image9 from "./images/gsap-min.webp";
import image10 from "./images/download-min.webp";
import image11 from "./images/html-min.webp";
import image12 from "./images/css-min.webp";


gsap.registerPlugin(ScrollTrigger);

function Skills() {

  useEffect(() => {
    

    gsap.fromTo(".dev-box h4",{
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
        
        markers: true,
        start: "-250 top",
        end: "-200 top",
        scrub: 1
      }
    });

      gsap.fromTo(".dev-box img",{
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
          
          markers: true,
          start: "-200 top",
          end: "-100 top",
          scrub: 1
        }
      });
    
  }, []);

  return (
    <section id="Skills" className="  w-[700px] xl:-mt-32 sm:w-full xl:w-full">
      <div id="page3">
      <h3 className="font-bold text-white">Things I'm <span>good</span> at</h3>
      <h5 className="font-bold text-white">skills, interests, passion and hobbies</h5>
      <div className="box dev-box">
        <h4>development</h4>
        <div className="elem-div flex">
          <img src={image1} alt="React" />
          <img src={image2} alt="Java" />
          <img src={image3} alt="JavaScript" />
          <img src={image4} alt="Node.js" />
          <img src={image5} alt="MongoDB" />
          <img src={image6} alt="MySQL" />
          <img src={image7} alt="GitHub" />
          <img src={image8} alt="Barba.js" />
          <img src={image9} alt="GSAP" />
          <img src={image10} alt="Download" />
          <img src={image11} alt="HTML" />
          <img src={image12} alt="CSS" />
        </div>
      </div>
    </div>

    </section>
    
  );
}

export default Skills;
