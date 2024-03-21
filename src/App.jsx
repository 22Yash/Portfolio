import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Work from "./components/Work/Work";
import Contactform from "./components/Contact/Contactform";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contactform" element={<Contactform />} />
          
        </Routes> */}
        <Home/>
        
      </BrowserRouter>
    </>
  );
}

export default App;
