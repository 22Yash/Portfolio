import React from 'react'
import Navbar from './Navbar'


function Hero() {
  return (
    <>
    <div id="hero" className='w-full h-screen bg-[#828E82]'>
      <div id="heroMyName" className="xl:flex xl:justify-center  xl:gap-5 xl:text-5xl xl:font-semibold">
        <h3> Myself, </h3>
        <h3>Yash</h3>
      </div>
      <div id="myRole" className="xl:text-7xl">
        <h2>Front-end developer</h2>
      </div>
      

    </div>
    </>
  )
}

export default Hero
