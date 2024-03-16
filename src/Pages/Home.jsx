import React, { useRef, useEffect } from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Header/Hero";
import Work from "../components/Work/Work";
import Connectfooter from "../components/Contact/Connectfooter";
import Hamburger from "../components/Header/Hamburger";
import Resume from "../components/Work/Resume";
// import LocomotiveScroll from 'locomotive-scroll';

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

  return (
    <div  className="h-screen" >
      <Navbar />

      <Hero />
      
        <Work/>
        

      
        
      
      

      <Resume />
      <Connectfooter />
    </div>
  );
}

export default Home;
