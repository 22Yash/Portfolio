import React, { useState } from 'react';
// Assuming you have some CSS for styling
import heroSVG from "./nnnoise.svg";
import { GoArrowUp } from "react-icons/go";
import VisitorCounter from '../Contact/VisitorCounter';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const breakpoint = 200; // Adjust this value as needed

    setIsVisible(scrollY > breakpoint);
  };

  // Add scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
    <div id="bottom"
    className='bg-red-400 text-white mt-[-300px]'>
      <div id="love" className='xl:flex xl:gap-[520px] xl:text-[20px] font-helvetica  '>
      <div id="first" className='xl:ml-10 xl:mt-10 xl:pt-5 font-bold'><VisitorCounter/></div>
      <div id="second" className='xl:mt-16'>Site designed and coded with ❤️‍🔥</div>
      </div>
      
      <div className={`back-to-top ${isVisible ? 'visible' : ''}
    w-[500px] h-[30px]
    xl:w-full  xl:h-[60px]`} onClick={scrollToTop}
    >
      <span className='
      flex  gap-5
      xl:right-0 xl:float-end xl:float xl:mr-10 xl:-mt-5 xl:-pt-2 0 font-helvetica text-[20px] xl:flex xl:gap-2 '> <GoArrowUp /> Back to Top</span>
    </div>
    </div>
    
    
    </>
  );
};

export default BackToTopButton;
