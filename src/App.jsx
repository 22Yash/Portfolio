import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes> */}
        <Home/>
        <Work/>
      </BrowserRouter>
    </>
  );
}

export default App;
