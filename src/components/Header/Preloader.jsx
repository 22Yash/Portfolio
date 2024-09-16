import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MovingCircle from "./MovingCircle";

function Preloader() {
  
  const thirdtext = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    if (window.innerWidth > 768) {
      

      tl.fromTo(
        ".second",
        {
          y: 150,
          opacity: 0,
        },
        {
          y: 10,
          opacity: 1,
          duration: 1,
        }
      );

      tl.fromTo(
        thirdtext.current.children,
        { opacity: 0, y: "+=50" },
        { opacity: 1, y: "0", stagger: 0.1 }
      );

      tl.to(preloaderRef.current, {
        y: "-100%", // Move the preloader div upwards by 100% of its height
        duration: 2,
        delay: 1,
        ease: "power2.out",
        borderBottomLeftRadius: "550px",
        borderBottomRightRadius: "550px",

        onComplete: () => {
          preloaderRef.current.remove(); // Remove the preloader div from the DOM after the animation completes
        },
      });
    } else {
      

      tl.fromTo(
        ".second",
        {
          y: 150,
          opacity: 0,
        },
        {
          y: -50,
          opacity: 1,
          duration: 1,
        }
      );

      tl.fromTo(
        thirdtext.current.children,
        { opacity: 0, y: "+=10" },
        { opacity: 1, y: "-50", stagger: 0.4 }
      );

      tl.to(preloaderRef.current, {
        y: "-100%", // Move the preloader div upwards by 100% of its height
        duration: 2,
        delay: 1,
        ease: "power2.out",
        borderBottomLeftRadius: "150px",
        borderBottomRightRadius: "150px",

        onComplete: () => {
          preloaderRef.current.remove(); // Remove the preloader div from the DOM after the animation completes
        },
      });
    }

    return () => {
      tl.kill(); // Kill the animation when component unmounts
    };
  }, []);
  return (
    <>
    
      <div
        id="preloader"
        ref={preloaderRef}
        className="preloader w-full  fixed z-10 h-[165vh] xl:h-screen
    rounded-b-3xl 
     bg-black text-white font-semibold   "
      >
        <div className="first w-full h-[120px]   ">
       
          
        </div>
        
        <div id="second" className=" h-[100px] mt-[300px] md:mt-0">
          <h2 className="second text-[#cecec4]  ml-0 xl:ml-0 text-[80px] font-bold xl:text-[70px]  flex mt-10 items-center justify-center">
            Welcome to{" "}
          </h2>
        </div>
        <div id="third">
          <h2
            ref={thirdtext}
            className="third text-[#bdbdb0] ml-[250px] 
            md:ml-[300px] 
            xl:ml-0 text-[90px] xl:text-[100px] xl:flex xl:justify-center 
            xl:mt-10 uppercase font-bold"
          >
            <span className="-ml-[30px]  md:ml-0" >y</span>
            <span>A</span>
            <span>S</span>
            <span>h</span>
            <br className=" md:block" />
            <span className=" -ml-[30px] xl:ml-10">d</span>
            <span>o</span>
            <span>k</span>
            <span>e</span>
            <br className=" md:block" />

            <span className=" -ml-[180px] xl:ml-10 ">p</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>f</span>
            <span>o</span>
            <span>l</span>
            <span>i</span>

            <span>o</span>
            <span>.</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Preloader;
