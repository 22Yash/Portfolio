import React , { useRef , useEffect }from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import Work from '../components/Work/Work'
import Connectfooter from '../components/Contact/Connectfooter'
import Hamburger from '../components/Header/Hamburger'




function Home() {
  const scrollContainerRef = useRef(null);

  
  return (
    <div ref={scrollContainerRef}
     className='h-screen'>
      <Navbar/>
      
      <Hero/>
      <section >
       <Work/> 
      </section>
      
      
      
      <Connectfooter/>
      
      
    </div>
   
  )
}

export default Home
