import React from 'react'
import Hero from './Header/Hero'
import Connectfooter from './Contact/Connectfooter'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Hero/>
    <Outlet />
    <Connectfooter/>
    </>
  )
}

export default Layout