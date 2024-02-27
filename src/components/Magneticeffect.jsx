import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Magneticeffect = () => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnet = magnetRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Calculate the distance from the mouse pointer
      const dx = clientX - magnet.offsetLeft - magnet.clientWidth / 2;
      const dy = clientY - magnet.offsetTop - magnet.clientHeight / 2;

      // Apply GSAP animation to attract the element towards the mouse pointer
      gsap.to(magnet, {
        x: dx / 5, // Adjust the division factor for the strength of the effect
        y: dy / 5,
        ease: 'power4.out',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      // Reset the element's position when the mouse leaves
      gsap.to(magnet, { x: 0, y: 0, ease: 'power1.out', duration: 0.3 });
    };

    magnet.addEventListener('mousemove', handleMouseMove);
    magnet.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      magnet.removeEventListener('mousemove', handleMouseMove);
      magnet.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
    
    
    <div
    ref={magnetRef}
    className="sm:w-6/6 
    h-16 font-semibold z-9 
    rounded-full flex justify-center items-center sm:mt-5
    border-2 border-[#3A606E] hover:bg-[#AAAE8E] sm:text-lg xl:w-1/4 
    sm:rounded-full sm:h-16 sm:flex sm:justify-center sm:items-center"
     >
    yashadoke@gmail.com
  </div>
    <div
      ref={magnetRef}
      className="sm:w-6/6 sm:mt-5
      h-16 font-semibold  rounded-full flex justify-center items-center border-2 border-[#3A606E] hover:bg-[#AAAE8E] sm:text-lg xl:w-1/4 sm:rounded-full sm:h-16 sm:flex sm:justify-center sm:items-center"
       >
      +91 9324781464
    </div>
    
    </>
  );
};

export default Magneticeffect;
