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
    <ReactLenis root>
      { /* content */ }
      <div  className="h-screen" >
      

      <Hero />
      
        {/* <Work/> */}
        
          <Horizontal/>
      
        
      
      

      {/* <Resume />
      <Connectfooter /> */}
    </div>
    </ReactLenis>
    
  );
}

export default Home;





