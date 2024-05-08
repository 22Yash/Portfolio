import React, { useEffect } from "react";
import image1 from "./images/html.png";
import react from "./images/react.png";
import javascript from "./images/JavaScript.png";
import gsapIMG from "./images/GSAP.png";
import tailwind from "./images/tailwind.png";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";

function Skill() {
  
  const tl = gsap.timeline;

  useEffect(()=>{
    gsap.set(".techImg",{scale:0.9})

    const hoverFunction = () => {
      tl.toString("#gridContainer",{
        rotation:40,
        transformOrigin:"center",
        scale:1.2
      })
    }

    


  },[])
  return (
    <section className="w-[560px] h-[250vh] xl:h-[145vh] xl:w-full bg-zinc-800 mt-20">
      <div id="bentoGrid" className="px-[100px] -mt-[80px]        ">
        <div className=" h-[100px] bento">
          <div className="rounded-full w-full h-full p-6 flex flex-col group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50">
            <h3>my digital tool box.</h3>
          </div>
        </div>
        <div
          id="gridContainer"
          onMouseEnter={hoverFunction}
          className="flex flex-col gap-6 pt-10 lg:grid lg:grid-cols-3 "
          style={{ gridAutoRows: `126px` }}
        >
          <div className="row-start-1 row-end-4  bentoMobile bento">
            <div
              className="rounded-full w-full h-full p-6 flex flex-col 
                    items-center 
                    group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-pink-50 group-hover:to-yellow-50"
            >
              <h3 className=" text-[25px] font-bold">GSAP</h3>
 
              <img
                src={gsapIMG}
                alt=""
                className="w-[130px] h-[130px] rounded-xl techImg"
              />
              <p className="techInfo">
                I craft captivating animations and dynamic visual effects,
                enhancing user experience and engagement on web pages by
                seamlessly animating elements and creating immersive transitions
                with precision and creativity.
              </p>
            </div>
          </div>
          <div className=" row-start-1 row-end-3 bentoMobile   bento">
            <div className="innerContainer items-center ">
              <div className="image">
                <h3 className="text-[25px] font-bold">JavaScript </h3>
                <img
                  src={javascript}
                  alt=""
                  className="w-[130px] h-[130px] rounded-xl"
                />
              </div>
              <div className="info">
                <p className="techInfo ">
                  I bring a website to life with JavaScript, adding interactive
                  features and optimizing performance with clean and efficient
                  code.
                </p>
              </div>
            </div>
          </div>
          <div className=" row-start-1 row-end-3  bentoMobile bento">
            <div className=" innerContainer items-center ">
              <div className="image">
                <h3 className="text-[25px] font-bold">ReactJs </h3>
                <img
                  src={react}
                  alt=""
                  className="w-[145px] h-[120px] rounded-xl"
                />
              </div>
              <div className="info">
                <p className="-mt-4 techInfo ">
                  I architect dynamic and responsive user interfaces, leveraging
                  modular components and state management to build scalable and
                  interactive web applications .
                </p>
              </div>
            </div>
          </div>
          <div className="row-start-3 row-end-5 h-[230px] bentoMobile col-span-1 bento">
            <div className="innerContainer items-center ">
              <div className="image">
                <h3 className="text-[25px] font-bold">HTML5 </h3>
                <img
                  src={image1}
                  alt=""
                  className="w-[100px] h-[100px] rounded-xl"
                />
              </div>
              <div className="info">
                <p className="techInfo">
                  I craft the foundation of web pages, structuring content in a
                  clear and logical manner to ensure accessibility and
                  compatibility across different devices and platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="row-start-3 row-end-5 h-[230px] bentoMobile bento">
            <div className="innerContainer items-center ">
              <div className="image">
                <h3 className="text-[25px] font-bold">Tailwind CSS </h3>
                <img
                  src={tailwind}
                  alt=""
                  className="w-[100px] h-[100px] rounded-xl"
                />
              </div>
              <div className="info">
                <p className="techInfo -mt-4">
                  I leverage a utility-first approach to rapidly style and
                  design web interfaces, facilitating responsive layouts and
                  consistent design systems with minimal CSS code
                </p>
              </div>
            </div>
          </div>

          <div className="row-start-4 row-end-6 h-[270px] bentoMobile bento">
            <div className="innerContainer items-center ">
              <div className="image">
                <h3 className="text-[25px] font-bold">HTML5 </h3>
                <img
                  src={image1}
                  alt=""
                  className="w-[100px] h-[100px] rounded-xl"
                />
              </div>
              <div className="info">
                <p className="techInfo">
                  I craft the foundation of web pages, structuring content in a
                  clear and logical manner to ensure accessibility and
                  compatibility across different devices and platforms.
                </p>
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
  );
}

export default Skill;
