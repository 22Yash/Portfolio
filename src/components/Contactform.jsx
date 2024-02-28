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
        w-full h-20  ml-8 text-lg 
        xl:w-full xl:h-28 xl:ml-32 xl:text-2xl'>
          <label htmlFor="name" 
          className='
          block p-1 font-semibold
          xl:block xl:p-4 xl:ml-4 xl:font-semibold' >  What's your name?</label>
          <input type="text" name="user_name" 
          className='
          w-5/6 ml-4 focus:outline-none 
           xl:w-5/6  xl:ml-5 xl:focus:outline-none' />
        </div>
        <div id="email"  
        className='
        w-full  h-20  ml-8 text-lg mt-2
        xl:w-5/6 xl:h-28 xl:ml-32 xl:mt-5 xl:text-2xl'>
          <label htmlFor="email" 
          className='
          block p-1 font-semibold
          xl:block xl:p-4 xl:ml-4 xl:font-semibold'>What's your email?</label>
          <input type="email" name="user_name"
           className='
            ml-4 focus:outline-none 
            xl:w-5/6  xl:ml-5 xl:focus:outline-none'  />
        </div>
        
        <div id="message" 
        className='
        w-full h-28  ml-8 text-lg mt-2
        xl:w-5/6 xl:h-36 xl:ml-32 xl:mt-5 xl:text-2xl' >
          <label htmlFor="message" 
          className='
          block p-1 font-semibold
          xl:block xl:p-4 xl:ml-4 xl:font-semibold'>Your message</label>
          <textarea name="message" 
          className='
          w-5/6 ml-4 h-10 focus:outline-none 
           xl:w-5/6  xl:ml-5 xl:focus:outline-none' />
        </div>

        

        
          <input type="submit" value="Send" 
          className='
          mt-5 bg-black text-white ml-32 p-5
          xl:mt-20  ' />
       
       
      
      
      
    </form>
    </div>
  )
}

export default Contactform
