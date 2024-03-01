import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function IntoAnimation() {
    const contactinfoRef = useRef();
  
    useEffect(() => {
        const el = contactinfoRef.current;

        gsap.to(el,{
            y:-700,
            duration:3,
            ease:"power2.out"
            


        })


    },[])









  return (
    <>
    <div id="contactIntro" 
    ref={contactinfoRef}
    className='w-full  fixed z-40 h-screen bg-black text-white font-semibold text-6xl flex justify-center items-center'>

        <h4>Contact</h4>
    </div>
    
    </>
  )
}

export default IntoAnimation
