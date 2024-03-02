import React , {useEffect,useRef} from 'react'
import { gsap } from 'gsap'


function Mousefollower({mouseVisibility}) {

  const Mousefollower = useRef(null)
 useEffect(()=> {
  const el = Mousefollower.current;
  const size=20;

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    gsap.to(el, {
      x: (clientX - size/2 ),
      y: (clientY - size/2 ),
      duration: 0.3,
      ease: 'back.out',
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
 })

  

  

  return (
    <div className={`sm:w-8 z-30 
    sm:h-8 sm:fixed sm:bg-black  sm:rounded-full
    ${mouseVisibility ? "hidden" : "" }`} 
    ref={Mousefollower}>
      
    </div>
  )
}

export default Mousefollower
