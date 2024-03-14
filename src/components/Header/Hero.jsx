import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'





function Hero() {

  
  return (
    <>
    <div id="hero" className='w-full h-screen bg-[#828E82]'>
      <div id="heroMyName" className="xl:flex xl:justify-center xl:p-10 xl:gap-2 xl:text-5xl xl:font-semibold">
        <h3>  👋myself , </h3>
        <h3>Yash</h3>
      </div>
      <div id="myRole" className="xl:text-8xl 
      xl:mt-10
      xl:font-bold xl:flex xl:flex-col xl:justify-center xl:items-center">
        <h1 className='xl:h-28 '>Front-end developer</h1>
        <h2 className='xl:h-28 '>& UI-UX Designer</h2>
      </div>
      
      

    </div>
    </>
  )
}

export default Hero
