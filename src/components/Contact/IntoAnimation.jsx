import React, { useEffect, useRef } from 'react'
import {gsap, }  from 'gsap'


function IntoAnimation() {
    const contactinfoRef = useRef();
  
    useEffect(() => {
      const tl = gsap.timeline();

  
      tl.to(contactinfoRef.current, {
        y: -1 ,
        duration: 2,
        ease: 'power2.in',
      });   


        tl.to(contactinfoRef.current,{
          opacity: 1,
          y: -800, // Change the distance as needed
          duration: 2,
          ease: 'power2.inOut',
           

        })

       


    },[])









  return (
    <>
    <div id="contactIntro" 
    ref={contactinfoRef}
    className='w-full  fixed z-10 h-screen
    rounded-b-3xl 
     bg-black text-white font-semibold text-6xl flex justify-center items-center'>

        <h4>Contact</h4>
        
    </div>

    
    </>
  )
}

export default IntoAnimation
