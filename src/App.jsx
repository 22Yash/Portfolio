import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";


import Home from "./Pages/Home";

import Contactform from "./components/Contact/Contactform";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contact" element={<Contactform />} />
          
        </Routes>
        
        
      </BrowserRouter>
    </>
  );
}

export default App;
