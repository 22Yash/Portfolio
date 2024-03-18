import React, { useRef, useEffect } from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Header/Hero";
import Work from "../components/Work/Work";
import Connectfooter from "../components/Contact/Connectfooter";
import Hamburger from "../components/Header/Hamburger";
import Resume from "../components/Work/Resume";
import Horizontal from "../components/Work/HorizontalSlides";
// import LocomotiveScroll from 'locomotive-scroll';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Parallax from "../components/Header/Parallax";

function Home() {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   console.log("hii");
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true, 
  //     tablet:{smooth:true},
  //     smartphone:{smooth:true}
      
  //   });

    
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log("jii");
  })

  return (
    <>
    
      { /* content */ }
      <div  className="h-screen " >
      
       <Parallax/>
      {/* <Hero /> */}
      
        {/* <Work/> */}
        
          {/* <Horizontal/> */}
      
        
      
      

      {/* <Resume />
      <Connectfooter /> */}
    </div>
    </>
    
  );
}

export default Home;





