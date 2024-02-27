import React from 'react'
import Connectfooter from './Connectfooter'
import Links from './Links'

function Contact() {
  return (
    <>
    <div id="contact" className='bg-[#828E82] w-full h-2screen 
    grid grid-cols-1 
    xl:grid xl:grid-cols-3 '>
      <div id="leftDiv" className=' col-span-1 xl:col-span-2 '>
         <div id="contactHeading" 
      className=' text-3xl flex flex-col 
      xl:text-7xl xl:font-semibold sm:text-5xl  '>
        <h4 className='mt-32 ml-36'>Let's start a</h4>
        <h4 className=' ml-36 '>project together</h4>
      </div>
      <div
        id="divider"
        className="border border-[#3A606E] w-5/6  ml-10 
                      -mt-24
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-20
                      "
      ></div>
      <div id="name" className='h-32 w-5/6 bg-gray-300
       xl:ml-36 xl:flex xl:gap-5 xl:p-10 xl:text-lg '>
        <h3>01 </h3>
        <h3 className='font-semibold'>What's your name?</h3>
      </div>
      <div
        id="divider"
        className="border border-[#3A606E] w-5/6  ml-10 
                      -mt-24
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-20
                      "
      ></div>
      <div id="name" className='h-32 w-5/6 bg-gray-300 xl:ml-36'>
        <h3>02 </h3>
        <h3>What's your name?</h3>
      </div>
      <div
        id="divider"
        className="border border-[#3A606E] w-5/6  ml-10 
                      -mt-24
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-20
                      "
      ></div>
      <div id="name" className='h-32 w-5/6 bg-gray-300 xl:ml-36'>
        <h3>01 </h3>
        <h3>What's your name?</h3>
      </div>
      <div
        id="divider"
        className="border border-[#3A606E] w-5/6  ml-10 
                      -mt-24
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-20
                      "
      ></div>
      <div id="name" className='h-32 w-5/6 bg-gray-300 xl:ml-36'>
        <h3>01 </h3>
        <h3>What's your name?</h3>
      </div>
      <div
        id="divider"
        className="border border-[#3A606E] w-5/6  ml-10 
                      -mt-24
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-3/4 xl:ml-36 xl:m-10 xl:mt-20
                      "
      ></div>
      <div id="name" className='h-32 w-5/6 bg-gray-300 xl:ml-36'>
        <h3>01 </h3>
        <h3>What's your name?</h3>
      </div>
       

      </div>
     

      <div id="rightdiv" className=' xl:col-span-1'>

        <div id="img" className='bg-red-200 w-36 h-36 mt-36 rounded-full'>
          <img src="" alt=""  />
        </div>
        <div id="contactDetails " className='p-10'>
          <h3>yashadoke@gmial.com</h3>
          <h3>+91 9324781464</h3>
        </div>
        <div id="socials" flexDirection="column">
           <Links columnDirection={true} />
        </div>
       






      </div>
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
    </>
  )
}

export default Contact
