import React from 'react'

function Skills() {
  
  return (
    <>
    <div id="skills" className='
    w-[500px] h-[100vh]
    xl:w-full xl:h-[100vh] grid xl:grid-cols-2'>
      <div id="col1" className='bg-yellow-700 '>
           <h2 className='
           pt-10 pl-10 text-5xl font-semibold w-3/4
           xl:pt-32 xl:pl-20 font-helvetica xl:text-7xl xl:font-semibold xl:w-3/4'>
           my digital tool box.
           </h2>
           <h4 className='
           pl-10 w-3/4 text-[20px] font-normal pt-5
           xl:pl-20 xl:w-3/4 xl:text-3xl xl:pt-10'>
           These are my go to tech stack to make any projects happen. 
           I am always eager of learning more about my current stack,
            and new technologies that could expand my horizons.
           </h4>
           <div id="border" className='xl:hidden w-3/4 ml-10 mt-5 border-2  border-black'>

           </div>
      </div>
      
      <div id="col2" className='bg-yellow-600'>
        <div id="stack" className='
        text-[30px] font-helvetica font-semibold pl-10 pt-5
        xl:text-[65px] xl:font-helvetica xl:font-semibold xl:p-10'>
          <h2>JavaScript</h2>
          <h2>HTML</h2>

          <h2>CSS</h2>
          <h2>TailwindCSS </h2>
          <h2>GSAP</h2>
          <h2>ReactJS</h2>
          <h2>wgee</h2>
          <h2></h2>
        </div>

      </div>
    </div>
    
    
    
    </>
  )
}

export default Skills
