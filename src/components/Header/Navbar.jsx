import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div id='navBar' className=' hidden xl:flex xl:justify-between  xl:h-12 bg-[#828E82]' >
      <div id="leftNav">
        <Link>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fyd-logo-design_32973513.htm&psig=AOvVaw1ue4_sY1Oooh2Zs5wAxfBA&ust=1709466461636000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDJ1f7A1YQDFQAAAAAdAAAAABAD" alt="" />
        </Link>

      </div>
      <div id="rightNav" className='xl:flex xl:gap-10 xl:mt-5'>
        
        <ul className="flex  mt-4 mr-10  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } 
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    Home
                  </NavLink>
                </li>
                            <li>
                                <NavLink
                                to="/Work"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Work
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
        </ul>
      </div>
    </div>
    </>
    
  )
}

export default Navbar
