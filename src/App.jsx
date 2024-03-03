import { useState } from "react";
import "./App.css";
import {  Routes, BrowserRouter, Route } from 'react-router-dom';

import Hero from "./components/Header/Hero";
import Work from "./components/Work/Work";
import Connectfooter from "./components/Contact/Connectfooter";
import Mousefollower from "./components/Animation/Mousefollower";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    
    
    
    
    </BrowserRouter>

      
     
      

      
    </>
  );
}

export default App;
