import React from "react";
import Hero from "../components/Header/Hero";
import Work from "../components/Work/Work";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Preloader from "../components/Header/Preloader";
import Contactform from "../components/Contact/Contactform";
import Skills from "./Skills";
import Mousefollower from "../components/Animation/Mousefollower";
import Experience from "../components/Work/Experience";
import About from "./About";

function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log("jii");
  });

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

        {/* <BackToTopButton /> */}
      </ReactLenis>
    </>
  );
}

export default Home;
