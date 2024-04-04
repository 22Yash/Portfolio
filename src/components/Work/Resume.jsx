import React ,{useEffect , useRef} from 'react'
import gsap from 'gsap'

function Resume() {
  // const tlDesktop = useRef(null);
  // const tlMobile = useRef(null);
 
  // useEffect(() => {
    

  //   // Check if the screen width is greater than the mobile breakpoint (e.g., 768px)
  //   const isLaptopScreen = window.innerWidth > 768;

  //   if (isLaptopScreen) {
  //     // Animation for desktop/laptop screens
  //     tlDesktop.current = gsap.timeline();

      

  //     tlDesktop.current.to(".resume", {
  //       scrollTrigger: {
  //         trigger: ".work",
  //         start: "-550 top ",
  //         end: "300 top ",
  //         scrub: 2,
  //         markers:true
          
  //       },
  //       yPercent: -100,
  //       duration:5
  //     });



    
        
      


       
      

  //   } else {
  //     // Animation for mobile screens
  //     tlMobile.current = gsap.timeline();
          
      
  //   }
  // }, []);

  return (
    <div className='resume mt-[840px] h-[800px] w-[500px] xl:-mt-32 sm:w-full xl:w-full bg-yellow-300' id='Resume'>
     
    </div>
  )
}

export default Resume
