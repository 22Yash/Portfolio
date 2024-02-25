import { useState } from "react";
import "./App.css";
import Connectfooter from "./components/Connectfooter";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Mousefollower from "./components/Mousefollower";
import Magneticeffect from "./components/Magneticeffect";

function App() {
  return (
    <>
      {/* <Mousefollower/> */}

      <Hero />
      <Work />

      <Connectfooter />
    </>
  );
}

export default App;
