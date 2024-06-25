import React, { useEffect, useRef, useState } from "react";

// import image2 from "./images/html.png";
// import image3 from "./images/tailwind.png";
// import image4 from "./images/GSAP.png";
import image1 from "./images/react.png";
import image2 from "./images/java-logo-1.png" 
import image3 from './images/JavaScript.png'
import image4 from "./images/node-min.png"
import image5 from "./images/mongodb-min.webp" 
import image6 from "./images/MySQL-min.webp"
import image7 from "./images/github-min.webp"
import image8 from "./images/barba-min.webp"
import image9 from "./images/gsap-min.webp"
import image10 from "./images/download-min.webp"
import image11 from "./images/html-min.webp"
import image12 from "./images/css-min.webp"


import gsap from "gsap";
import skillSVG from "./images/skill.svg"


function Skills() {
  const tlDesktop = useRef(null);
  const tlMobile = useRef(null);
  const tlTablet = useRef(null);

  useEffect(() => {
    
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      // Animation for desktop/laptop screens
      tlDesktop.current = gsap.timeline();

      tlDesktop.current.from(".box h4", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".box h4",
        
          markers:true,
          start: "-400 top"
        },
        stagger: 0.5
      })


      gsap.from(".dev-box img", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".dev-box img",
          
          markers:true,
          start: "-200 top",
          end:"-150 top",
          scrub:1
          

        },
        y: 20,
        stagger: {
          amount: 2
        }
      
      })
     







      



    }else if (screenWidth <= 1024 && screenWidth > 768) {

      
     
     

      
    } 
    else {
     
    }

    

    

    
  }, []);
    
      
      
      
  

 
  
  return (
    <>
    <div  id="page3">
    <h3 className="font-bold text-white">Things I'm <span>good</span> at</h3>
    <h5 className="font-bold text-white">skills, interests, passion and hobbies</h5>
    <div className="box dev-box">
        <h4>development</h4>
        <div className="elem-div flex ">
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
            <img src={image4} alt=""/>
            <img src={image5} alt=""/>
            <img src={image6} alt=""/>
            <img src={image7} alt=""/>
            <img src={image8} alt=""/>
            <img src={image9} alt=""/>
            <img src={image10} alt=""/>
            <img src={image11} alt=""/>
            <img src={image12} alt=""/>
        </div>
    </div>
    {/* <div className="box des-box">
        <h4>designing</h4>
        <div className="elem-div">
            <img src="./images/xd-min_1.webp" alt=""/>
            <img src="./images/ps-min.webp" alt=""/>
            <img src="./images/premierepro-min.png" alt=""/>
            <img src="./images/illus.png" alt=""/>
            <img src="./images/studio-min.webp" alt=""/>
            <img className="figmaimg" src="./images/figma-min.webp" alt=""/>
        </div>

    </div> */}
</div>
    </>
    
  );
}

export default Skills;