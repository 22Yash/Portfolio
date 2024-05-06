import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";


import Home from "./Pages/Home";

import Contactform from "./components/Contact/Contactform";
import Error from "./Pages/Error";
import Work from "./components/Work/Work";
import Skills from "./Pages/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Skills" element={<Skills />} />

          
          <Route path="/contact" element={<Contactform />} />
          <Route  path="*" element={<Error />} />
          
        </Routes>
        
        
      </BrowserRouter>
    </>
  );
}

export default App;
