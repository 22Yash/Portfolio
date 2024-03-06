import React from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import Work from '../components/Work/Work'
import Connectfooter from '../components/Contact/Connectfooter'
import Hamburger from '../components/Header/Hamburger'

function Home() {
  return (
    <div>
      <Navbar/>
      
      <Hero/>
      <Work/>
      <Connectfooter/>
      <Hamburger/>
    </div>
  )
}

export default Home
