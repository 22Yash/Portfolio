import React from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Header/Hero";
import Work from "../components/Work/Work";
import Connectfooter from "../components/Contact/Connectfooter";
import Hamburger from "../components/Header/Hamburger";
import Resume from "../components/Work/Resume";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Parallax from "../components/Header/Parallax";
import Preloader from "../components/Header/Preloader";
import SlideMenu from "../components/Header/SlideMenu";
import Contactform from "../components/Contact/Contactform";
import Skills from "./Skills";
import Mousefollower from "../components/Animation/Mousefollower";
import Menu from "./Menu";
import Hover from "./Hover";


function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log("jii");
  });

  return (
    <>
      <ReactLenis root>
        {/* <Preloader /> */}
        
        {/* <Hero />
        <Work /> */}
       <Skills/>
       
        {/* <Resume />
        <Connectfooter /> */}
        
      </ReactLenis>
    </>
  );
}

export default Home;
