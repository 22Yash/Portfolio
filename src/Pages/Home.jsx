import React from "react";
import Hero from "../components/Header/Hero";
import Work from "../components/Work/Work";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Preloader from "../components/Header/Preloader";
import Contactform from "../components/Contact/Contactform";
import Skills from "./Skills";

import Experience from "../components/Work/Experience";


function Home() {
  

  return (
    <>
      <ReactLenis root>
        <div id="home" className="bg-black w-[700px] sm:w-full xl:w-full">
          <Preloader />

          <Hero />
          <Work />
          

          <Skills />

          <Experience />
          <Contactform />
          
        </div>

        
      </ReactLenis>
    </>
  );
}

export default Home;
