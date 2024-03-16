import React , { useRef , useEffect }from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import Work from '../components/Work/Work'
import Connectfooter from '../components/Contact/Connectfooter'
import Hamburger from '../components/Header/Hamburger'
import Resume from '../components/Work/Resume'
import { Parallax } from 'react-parallax';




function Home() {
  const scrollContainerRef = useRef(null);
  

  
  return (
    <div ref={scrollContainerRef}
     className='h-screen'>
      <Navbar/>
      
    <Parallax  strength={200}>
        <Hero/>
    </Parallax>
    <Parallax  strength={500} blur={0.5}>
        <Work/>
    </Parallax>
      
      
      
      <Resume/>
      <Connectfooter/>
        


      
      
     
     
      
    </div>
   
  )
}

export default Home
