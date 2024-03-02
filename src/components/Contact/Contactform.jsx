import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import GetInTouch from './GetInTouch';



function Contactform() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qvyaxa3', 
                'template_bovjcmd', 
                form.current, 
         'L0dMxQ0f9HRuIqNte'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        
      );
      e.target.reset()
  };

  return (
    <div className='flex flex-col 
     xl:space-y-5 '>
      <form ref={form} onSubmit={sendEmail}>
        <div id="name" className='
        w-full h-20  ml-8 text-lg -mt-36 
        xl:w-full xl:h-15 xl:ml-32 xl:text-2xl xl:-mt-32 '>
          <label htmlFor="name" 
          className='
          block p-1 font-semibold 
          xl:block xl:p-0 xl:ml-4 xl:font-semibold' >  What's your name?</label>
          <input type="text" name="user_name" 
          className='
          w-5/6 ml-4 focus:outline-none bg-[#828E82] 
           xl:w-5/6  xl:ml-5 xl:focus:outline-none' />
        </div>
        <div
            id="divider"
            className="border-2 border-black w-full ml-10 
                      -mt-5 opacity-70 
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-full xl:ml-36 xl:m-10 xl:mt-2 xl:opacity-50
                      "
          ></div>
        <div id="email"  
        className='
        w-full  h-20  ml-8 text-lg mt-7
        xl:w-5/6 xl:h-15 xl:ml-32 xl:mt-5 xl:text-2xl'>
          <label htmlFor="email" 
          className='
          block p-1 font-semibold
          xl:block xl:p-4 xl:ml-4 xl:font-semibold'>What's your email?</label>
          <input type="email" name="user_name"
           className='
            ml-4 focus:outline-none bg-[#828E82] 
            xl:w-5/6  xl:ml-5 xl:focus:outline-none'  />
        </div>
        <div
            id="divider"
            className="border-2 border-black w-full ml-10 
                      -mt-2 opacity-70
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-full xl:ml-36 xl:m-10 xl:mt-10 xl:opacity-50
                      "
          ></div>
        
        <div id="message" 
        className='
        w-full h-28  ml-8 text-lg mt-2
        xl:w-5/6 xl:h-15 xl:ml-32 xl:mt-5 xl:text-2xl' >
          <label htmlFor="message" 
          className='
          block p-1 font-semibold
          xl:block xl:p-4 xl:ml-4 xl:font-semibold'>Your message</label>
          <textarea name="message" 
          className='
          w-5/6 ml-4 h-10 focus:outline-none bg-[#828E82] 
           xl:w-5/6  xl:ml-5 xl:focus:outline-none' />
        </div>
        <div
            id="divider"
            className="border-2 border-black w-full  ml-10 
                      -mt-5 opacity-70 xl:opacity-50
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:-mt-32
                      xl:w-full xl:ml-36  xl:mt-10
                      "
          ></div>

        

        <div id="sendCircle" 
        className='w-44 h-44 text-white  mt-10 bg-black rounded-full
         justify-center items-center
        xl:ml-32'>
               <input type="submit" value="send" className=' pl-12 p-20 text-2xl' />
        </div>
          
       
       
      
      
      
    </form>
    </div>
  )
}

export default Contactform
