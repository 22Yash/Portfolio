import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    const textWidth = marquee.offsetWidth;
    const containerWidth = marquee.parentElement.offsetWidth;

    // Calculate the duration based on the difference between text width and container width
    const duration = (textWidth + containerWidth) / 50; // Adjust speed as needed

    // GSAP animation
    gsap.to(marquee, {
      x: -textWidth,
      duration: duration,
      repeat: -1, // Infinite loop
      ease: 'linear',
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={marqueeRef} className="inline-block font-bold outline-4 whitespace-nowrap border border-red-400  text-[100px] ">
        {/* Add your text content here */}
        Contact Contact COntact Contact Contact Contact COntact Contact   
      </div>
    </div>
  );
};

export default Marquee;
