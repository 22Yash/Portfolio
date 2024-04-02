import React, { useState } from 'react';
// Assuming you have some CSS for styling
import heroSVG from "./nnnoise.svg";
import { GoArrowUp } from "react-icons/go";

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
    <div className={`back-to-top ${isVisible ? 'visible' : ''}
   w-[500px]
    xl:w-full  xl:h-[60px]`} onClick={scrollToTop}
    style={{
        backgroundImage: `url(${heroSVG})`,
        backgroundSize: "cover",
      }}>
      <span className='
      opacity-0 xl:opacity-100
      xl:right-0 xl:float-end xl:float xl:mr-10  xl:-pt-5 font-helvetica text-[20px] xl:flex xl:gap-2 '> <GoArrowUp /> Back to Top</span>
    </div>
  );
};

export default BackToTopButton;
