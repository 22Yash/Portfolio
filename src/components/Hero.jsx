import React from 'react'


function Hero() {
  return (
    <div className='w-full h-screen bg-slate-500'>
      <div id="navbar" className='sm:flex sm:justify-between sm:bg-red-500 h-20' >
        <div id="navLogo" className='sm:p-8'> hiii</div>
        <div id="navContent" className='sm:p-8 sm:font-sans sm:text-xl sm:font-medium'>
                <ul className='sm:flex sm:gap-10'>
                    <li><a href="">Work</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
