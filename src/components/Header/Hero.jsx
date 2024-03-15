import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'





function Hero() {

  
  return (
    <>
    <div id="hero" className='w-full h-screen bg-[#d6d6d0]'>
         <div id="heroHeading" className='
         sm:ml-28
         xl:ml-10 xl:tracking-wide xl:pt-20'>
          <h1 className='
          text-6xl font-bold  text-center  pt-20  
          sm:text-8xl sm:font-bold sm:font-helvetica sm:text-left sm:ml-20
          xl:text-9xl xl:font-bold xl:text-left xl:p-0 xl:ml-72 font-helvetica'>I'm Yash</h1>
         </div>
         <div id="heroRole" className='xl:tracking-wide'>
          <h1 className='
          text-6xl font-bold  text-center font-helvetica p-20 
          sm:text-8xl sm:w-5/6 sm:text-center sm:flex sm:p-0 sm:ml-20
          xl:text-9xl xl:ml-44 xl:w-3/4  xl:p-0 xl:text-center xl:font-bold '>Creative Frontend Developer.</h1>
         </div>
      
      

    </div>
    </>
  )
}

export default Hero
