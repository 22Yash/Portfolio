import React ,{useEffect , useRef} from 'react'
import gsap from 'gsap'

function Experience() {
  

  return (
    <div className='resume  h-[800px] w-[700px]  sm:w-full xl:w-full bg-[#333333]' id='Resume'>
      <div id="title" className='text-white   font-helvetica  font-semibold
      xl:text-[90px] xl:ml-[100px] xl:pt-[40px]
       '>
        <h3>Experience</h3>
        
      </div> 
      <div id="organisation" className=''>
        <div id="first" className='xl:w-full xl:h-[130px] xl:flex xl:justify-between
        text-[#bdbeb0] xl:p-[10px]  font-helvetica font-medium xl:mt-[20px] xl:pl-[40px]' >
         <div id="name">
         <h3 className='text-[50px]  ml-[50px] '>Junior web devloper intern</h3>
          <h5 className='text-[20px] ml-[60px] '>Zummit Infolabs</h5>
          
         </div>
          
          <div id="duration" className='xl:mr-[60px] font-helvetica'>
            <h4 className='text-[20px] mt-[20px]'>July 2024 - October 2024</h4>
            <h4 className='float-end'>Remote</h4>

          </div>
        </div>

        <div id="border" className='border-b-[3px] border-[#bcbcaf] w-[90%] ml-[80px] mt-[10px]'></div>



        {/* Prodigy Infotech */}
        <div id="second" className='xl:w-full xl:h-[130px] xl:flex xl:justify-between
        text-[#bdbeb0] xl:p-[10px]  font-helvetica font-medium xl:mt-[20px] xl:pl-[40px]' >
         <div id="name">
         <h3 className='text-[50px]  ml-[50px]'>Intern at Prodigy Infotech</h3>
         <h5 className='ml-[50px]'>Enhanced my Web Development skills through this Internship.</h5>
        
          
         </div>
          
          <div id="duration" className='xl:mr-[60px] font-helvetica'>
            <h4 className='text-[20px] mt-[20px]'>December 2023</h4>
            <h4 className='float-end'>Remote</h4>

          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Experience
