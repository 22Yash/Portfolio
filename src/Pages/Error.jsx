import React from 'react'
import heroSVG from "./nnnoise.svg";
import { HashLink as Link } from "react-router-hash-link";


function Error() {
  return (
    <>
    <section>
          <div id="error" className='w-full h-screen bg-[#d6d6d0]  xl:grid xl:grid-cols-2   '
          style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}>
            <div id="colFirst" className='xl:text-[80px] font-bold font-helvetica flex justify-center items-center flex-col'>
                 <h1 className=''>
                    SEEMS LIKE 
                    <br/>
                    YOU GOT LOST :(
                 </h1>
                 <button>
                    
                    <h4 className='xl:text-[18px] xl:w-[300px] bg-[#5f5c57] text-white xl:p-5 xl:rounded-r-full xl:rounded-l-full'>HEAD BACK HOME</h4>
                    <Link to="/" className=""></Link>
                 </button>
            </div>
            <div id="colSecond" className=' flex justify-center items-center font-helvetica font-mediuma'>
                <h2 className='xl:text-[30px] xl:w-[420px]'>
                404 Error. The page you’re looking for does not exist.
                </h2>

            </div>
          </div>

    </section>
    </>
  )
}

export default Error
