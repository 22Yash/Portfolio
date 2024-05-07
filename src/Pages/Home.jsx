import React from "react";
import Hero from "../components/Header/Hero";
import Work from "../components/Work/Work";
import Resume from "../components/Work/Resume";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Preloader from "../components/Header/Preloader";
import Contactform from "../components/Contact/Contactform";
import Skills from "./Skills";
import Mousefollower from "../components/Animation/Mousefollower";
import BackToTopButton from "../components/Header/BackToTopButton";
import Error from './Error'
import Skill from "./Skill";

function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log("jii");
  });

  return (
    <>
      <ReactLenis root>
        {/* <Mousefollower />
        <Preloader /> */}

        <Hero />
        <Work />
       
        <Skill/>

        <Resume />
        <Contactform />
        {/* <BackToTopButton /> */}
        
      </ReactLenis>
    </>
  );
}

export default Home;
