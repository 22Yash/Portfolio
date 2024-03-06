import React , { useRef , useEffect }from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import Work from '../components/Work/Work'
import Connectfooter from '../components/Contact/Connectfooter'
import Hamburger from '../components/Header/Hamburger'
import LocomotiveScroll from 'locomotive-scroll';

function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true, // Enable smooth scrolling
      // Add more options as needed
    });

    // Ensure to destroy the scroll instance when the component unmounts
    return () => {
      
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);
  return (
    <div ref={scrollContainerRef}>
      <Navbar/>
      
      <Hero/>
      <section data-scroll data-scroll-speed="1">
       <Work/> 
      </section>
      
      <Connectfooter/>
      
    </div>
  )
}

export default Home
