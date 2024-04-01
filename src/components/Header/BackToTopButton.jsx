import React, { useState } from 'react';
// Assuming you have some CSS for styling
import heroSVG from "./nnnoise.svg";

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
    <div className={`back-to-top ${isVisible ? 'visible' : ''} xl:w-full xl:bg-red-300 xl:h-[60px]`} onClick={scrollToTop}
    style={{
        backgroundImage: `url(${heroSVG})`,
        backgroundSize: "cover",
      }}>
      <span className='xl:right-0 xl:float-end xl:float xl:p-5 '>Back to Top</span>
    </div>
  );
};

export default BackToTopButton;
