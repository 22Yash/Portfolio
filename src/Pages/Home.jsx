import React from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Header/Hero";
import Work from "../components/Work/Work";
import Connectfooter from "../components/Contact/Connectfooter";
import Hamburger from "../components/Header/Hamburger";
import Resume from "../components/Work/Resume";

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Parallax from "../components/Header/Parallax";

function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log("jii");
  })

  return (
    <>
     <ReactLenis root>
     <Hero /> 
      <Work/>
      <Resume/>
      <Connectfooter />
    </ReactLenis>
      
    </>
    
  );
}

export default Home;
