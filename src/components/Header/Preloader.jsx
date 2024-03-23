import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Preloader() {
  const textRef = useRef(null);
  const thirdtext = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    
        if(window.innerWidth > 768){
        tl.fromTo(
            textRef.current.children,
            { opacity: 0, y: '+=50' },
            {delay:.5,
              opacity: 1,
               y: '0',
                stagger: 0.1 }
          ).to(textRef.current, { opacity: 0, duration: 1, onComplete: () => {
              textRef.current.remove(); // Remove the preloader div from the DOM
            }});
      
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
                { opacity: 0, y: '+=50' },
                { opacity: 1, y: '0', stagger: 0.1 }
              )
      
              tl.to(preloaderRef.current, {
                  y: '-100%', // Move the preloader div upwards by 100% of its height
                  duration: 2,
                  delay: 1,
                  ease:"power2.out",
                  borderBottomLeftRadius:"550px",
                  borderBottomRightRadius:"550px",
                   
                  onComplete: () => {
                    preloaderRef.current.remove(); // Remove the preloader div from the DOM after the animation completes
                  }
                });
            }else{
    
        
        tl.fromTo(
            textRef.current.children,
            { opacity: 0, y: '+=50' },
            {delay:.5,
              opacity: 1,
               y: '-10',
                stagger: 0.1 }
          ).to(textRef.current, { opacity: 0, duration: 1, onComplete: () => {
              textRef.current.remove(); // Remove the preloader div from the DOM
            }});
      
          tl.fromTo(
            ".second",
            {
              y: 150,
              opacity: 0,
            },
            {
              y:-50,
              opacity: 1,
              duration: 1,
            }
          );
      
          tl.fromTo(
                thirdtext.current.children,
                { opacity: 0, y: '+=10' },
                { opacity: 1, y: '-50', stagger: 0.4}
              )
      
              tl.to(preloaderRef.current, {
                  y: '-100%', // Move the preloader div upwards by 100% of its height
                  duration: 2,
                  delay: 1,
                  ease:"power2.out",
                  borderBottomLeftRadius:"150px",
                  borderBottomRightRadius:"150px",
                   
                  onComplete: () => {
                    preloaderRef.current.remove(); // Remove the preloader div from the DOM after the animation completes
                  }
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
        className="preloader w-full  fixed z-10 h-screen
    rounded-b-3xl 
     bg-black text-white font-semibold   "
      >
        <div className="first w-full h-[120px]   ">
          <h1
            ref={textRef}
            className="firsttext ml-20 mt-20 text-[50px] text-[#d0d0c6]   xl:text-[100px]  xl:mt-40  xl:flex  xl:flex-row   xl:justify-center xl:items-center"
          >
            
            <span>U</span>
            <span>n</span>
            <span>v</span>
            <span>e</span>
            <span>i</span>
            <span>l</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            
            <br className="hidden md:block" /> {/* Add line break for mobile screens */}
           
           <span className=" ml-0 xl:ml-10">C</span>
            <span>r</span>
            <span>e</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>v</span>
            <span>i</span>
            <span>t</span>
            <span>y</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
           

            
          </h1>
        </div>
        <div id="second" className=" h-[100px]">
          <h2 className="second text-[#cecec4]  ml-0 xl:ml-0 text-[50px] xl:text-[70px]  flex mt-10 items-center justify-center">
            Welcome to{" "}
          </h2>
        </div>
        <div id="third">
          <h2 
          ref={thirdtext}
          className="third text-[#bdbdb0] ml-28 -mt-20 xl:ml-0 text-[60px] xl:text-[100px] xl:flex xl:justify-center xl:mt-10 uppercase font-bold">
            
            <span>y</span>
            <span>A</span>
            <span>S</span>
            <span>h</span>
            <br className=" md:block" />
            <span className=" ml-0 xl:ml-10">d</span>
            <span>o</span>
            <span>k</span>
            <span>e</span>
            <br className=" md:block" />
           
           <span className=" -ml-20 xl:ml-10 ">p</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>f</span>
            <span>o</span>
            <span>l</span>
            <span>i</span>
            
            <span>o</span>
         
            
          </h2>
        </div>
      </div>
    </>
  );
}

export default Preloader;
