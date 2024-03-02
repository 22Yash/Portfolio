import React, { useEffect, useRef } from 'react'
import {gsap, }  from 'gsap'


function IntoAnimation() {
    const contactinfoRef = useRef();
  
    useEffect(() => {
        const el = contactinfoRef.current;

        
        
        // gsap.from(el,{
        //     y:-700,
        //     duration:.5,
        //     ease:"power2.out",
            
            


        // })

        gsap.to(el,{
          y:-1400,
          duration:5,
          ease:"power.in",

        })


    },[])









  return (
    <>
    <div id="contactIntro" 
    ref={contactinfoRef}
    className='w-full  fixed z-40 h-screen
    rounded-b-3xl 
     bg-black text-white font-semibold text-6xl flex justify-center items-center'>

        <h4>Contact</h4>
    </div>
    
    </>
  )
}

export default IntoAnimation
