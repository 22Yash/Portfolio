import React from 'react';
import image1 from './images/html.png';
import react from './images/react.png';
import javascript from './images/JavaScript.png';
import gsap from './images/GSAP.png';
import tailwind from './images/tailwind.png';


function Skill() {
  return (
    <section className='w-[560px] xl:h-[145vh] xl:w-full bg-blue-200 mt-20'>
        <div id="bentoGrid" className='px-[100px] -mt-[80px]         '>
            <div id="gridContainer" className='flex flex-col gap-6 pt-20 lg:grid lg:grid-cols-3' style={{gridAutoRows:`126px`}}>
                <div className="row-start-1 row-end-4 w-[400px] lg:w-full bento">
                    <div className="rounded-full w-full h-full p-6 flex flex-col 
                    items-center 
                    group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
                        <h3 className=' text-[25px] font-bold'>GSAP</h3>
                        
                        <img src={gsap} alt=""  className='w-[130px] h-[130px] rounded-xl'/>
                        <p className='p-1  text-center'>I craft captivating animations and dynamic visual effects, enhancing user experience and engagement on web pages by seamlessly animating elements and creating immersive transitions with precision and creativity.</p>
                    </div>

                </div>
                <div className=" row-start-1 row-end-3 bento">
                    <div className=" rounded-full w-full h-full p-6 flex gap-12 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
                       <div className="image">
                       <h3 className='text-[25px] font-bold'>JavaScript </h3>
                        <img src={javascript} alt="" className='w-[130px] h-[130px] rounded-xl'/>
                       </div>
                       <div className="info">
                       <p className=''>I bring a website to life with JavaScript, adding interactive features and optimizing performance with clean and efficient code.</p>

                       </div>
                        
                    </div>

                </div>
                <div className=" row-start-1 row-end-3 bento">
                    <div className=" rounded-full w-full h-full p-6 flex gap-12 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
                       <div className="image">
                       <h3 className='text-[25px] font-bold'>ReactJs </h3>
                        <img src={react} alt="" className='w-[145px] h-[120px] rounded-xl'/>
                       </div>
                       <div className="info">
                       <p className='-mt-4'>I architect dynamic and responsive user interfaces, leveraging modular components and state management to build scalable and interactive web applications, ensuring seamless navigation and enhanced user experience through efficient rendering and data handling.</p>
                       </div>
                        
                    </div>

                </div>
                <div className="row-start-3 row-end-5 h-[230px] col-span-1 bento">
                    <div className="rounded-full w-full h-full p-6 flex gap-12 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
                       
                    <div className="image">
                       <h3 className='text-[25px] font-bold'>HTML5 </h3>
                        <img src={image1} alt="" className='w-[100px] h-[100px] rounded-xl'/>
                       </div>
                       <div className="info">
                       <p>I craft the foundation of web pages, structuring content in a clear and logical manner to ensure accessibility and compatibility across different devices and platforms.</p>

                       </div>
                    </div>

                </div>
                <div className=" rounded-2xl  row-start-3 row-end-5 h-[230px]  bg-red-800 bento">
                    <div className="rounded-full w-full h-full p-6 flex gap-7 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
                    <div className="image">
                       <h3 className='text-[25px] font-bold'>Tailwind CSS </h3>
                        <img src={tailwind} alt="" className='w-[100px] h-[100px] rounded-xl'/>
                       </div>
                       <div className="info">
<p>
I leverage a utility-first approach to rapidly style and design web interfaces, facilitating responsive layouts and consistent design systems with minimal CSS code
</p>
                       </div>
                    </div>

                </div>
                
                <div className="row-start-4 row-end-6 h-[270px]  bg-red-400  bento">
                    <div className="rounded-full w-full h-full p-6 flex gap-12 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
                       
                    <div className="image">
                       <h3 className='text-[25px] font-bold'>HTML5 </h3>
                        <img src={image1} alt="" className='w-[100px] h-[100px] rounded-xl'/>
                       </div>
                       <div className="info">
                       <p>I craft the foundation of web pages, structuring content in a clear and logical manner to ensure accessibility and compatibility across different devices and platforms.</p>

                       </div>
                    </div>

                </div>

                <div className=" bg-green-300 col-start-2 -mt-10 col-end-4 bento">
                    <div className="rounded-full w-full h-full p-6 flex flex-col group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
                        <h3>HTML5</h3>
                        <img src="" alt="" />
                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Skill
