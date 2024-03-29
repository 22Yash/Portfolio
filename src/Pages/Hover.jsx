import React, { useEffect } from 'react'
import image1 from "./JavaScript.png";
import image2 from "./html.png";

function Hover() {

  useEffect(() => {
    const link = document.querySelectorAll('.link');
    const linkHoverReveal = document.querySelectorAll('.hover-reveal');
    const linkImages = document.querySelectorAll('.hidden-img');

    for(let i = 0; i < link.length; i++) {
      link[i].addEventListener('mousemove', (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
        linkImages[i].style.transform = 'scale(1, 1)';
        linkHoverReveal[i].style.left = e.clientX + "px";
      })
      
      link[i].addEventListener('mouseleave', (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        linkImages[i].style.transform = 'scale(0.8, 0.8)';
      })
    }
  })
  return (
    <>
    <div id="hover" className='w-full h-screen bg-red-300 overflow-hidden p-20'>
      <ul className='relative z-10 p-10'>
        <li className='relative z-10 '>
          <div className="link flex p-5 justify-between mix-blend-difference">
            <span className='block relative text-8xl font-bold '>JavaScript</span>
            <div className="hover-reveal absolute w-300 h-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-0 scale-80 transition-all duration-500 ease-out">
              <img src={image1} alt="" className='hidden-image w-full h-full object-cover relative transition-transform duration-400 ease-out' />
            </div>
          </div>
        </li>
        <li className='relative z-10 '>
          <div className="link flex p-5 justify-between mix-blend-difference">
            <span className='block relative text-8xl font-bold '>HTML</span>
            <div className="hover-reveal absolute w-300 h-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden opacity-0 scale-80 transition-all duration-500 ease-out">
              <img src={image2} alt="" className='hidden-image w-full h-full object-cover relative transition-transform duration-400 ease-out' />
            </div>
          </div>
        </li>
      </ul>




    </div>
    
    </>
  )
}

export default Hover
