import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import pic from 'C:/Users/zaidr/OneDrive/Desktop/React Js/final/src/Assets/Top-Viewbbcbv-1-scaled.jpg'
import Button2 from './Button2';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Eyes() {


  useGSAP(()=>{
    gsap.from('.eye-wrapper .eyeball',{
      y:-150,
      duration:2,
      stagger:.7,
      ease: "bounce.out",
      scrollTrigger:{
        trigger:'.eye-wrapper',
        scroller:'body',
        start:'top 65%',
        end:'top 45%',
      }
    })
  })


   
    const eyeLeft = useRef(null);
    const eyeRight = useRef(null);
  
    useEffect(() => {
    
  
      const handleMouseMove = (e) => {
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
     
  
      gsap.to(eyeLeft.current, { x: x *.04, y: y *.1, duration: 0.3 });
        gsap.to( eyeRight.current, { x: x *.04, y: y *.1, duration: 0.3 });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);


    const eyeLeftpuple = useRef(null);
    const eyeRightpuple = useRef(null);

    useEffect(() => {
    
  
        const handleMouseMove = (e) => {
          const x = e.clientX - window.innerWidth / 2;
          const y = e.clientY - window.innerHeight / 2;
          
    
        gsap.to(eyeLeftpuple .current, { x: x *.07, y: y *.15, duration: 0.3 });
          gsap.to( eyeRightpuple .current, { x: x *.07, y: y *.15, duration: 0.3 });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  


  return (
<div  className='eye-wrapper w-full lg:min-h-screen min-h-[80vh] overflow-hidden bg-[#CDEA68] rounded-2xl py-[5vw]'>
  
    <div className=' flex items-start justify-center lg:mt-0 mt-14 '>
        <div className='flex lg:gap-14 gap-7'>
            <div className='eyeball lg:h-[17vw] lg:w-[17vw] h-[22vh] w-[22vh] bg-slate-100 rounded-full  flex items-center justify-center shadow-black shadow-2xl '>
                <div ref={eyeLeft} className='bg-black w-2/3 h-2/3 rounded-full  flex items-center justify-center'>
                <div ref={eyeLeftpuple} className='bg-slate-100 w-1/4 h-1/4 rounded-full  '></div>
                </div>
            </div>

            <div className='eyeball lg:h-[17vw] lg:w-[17vw] h-[22vh] w-[22vh] bg-slate-100 rounded-full  flex items-center justify-center  shadow-black shadow-2xl'>
            <div ref={eyeRight} className='bg-black w-2/3 h-2/3 rounded-full flex items-center justify-center '>
            <div ref={eyeRightpuple} className='bg-slate-100 w-1/4 h-1/4 rounded-full  '></div></div>
            </div>
        </div>

        </div>

        <div className='flex lg:pt-10 pt-20 items-center justify-center flex-col font-big lg:text-[13vw] text-[20vw] text-black uppercase lg:leading-[10vw] leading-[15vw] font-[900]'>
            <h1>Ready</h1>
            <h1>to start</h1>
            <h1>the project ?</h1>
        </div>
        <div className=' w-fit m-auto mt-10'><Button2></Button2></div>
    </div>
  )
}

export default Eyes
