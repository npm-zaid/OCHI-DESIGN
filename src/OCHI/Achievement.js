import React from 'react'
import logo from 'C:/Users/zaidr/OneDrive/Desktop/React Js/final/src/Assets/logo001.svg'
import Button1 from './Button1'


const data=[
    {
        title:'©️ 2019-2022'
    },
    {
        title:'rating 5.0 on cluth' 
    },
    {
        title:'business bootcamp alumni'
    }
   
  ]

function Achievement() {
  return (
    <div className='min-h-[100vh]  bg-[#000000] lg:grid grid-cols-12 lg:px-16 px-7 gap-6 items-center lg:justify-center lg-py:0 py-10'>
      <div data-scroll data-scroll-speed=".1" className='col-span-6 lg:h-[70vh] h-[30vh] bg-[#004D43] rounded-2xl flex flex-col  justify-end lg:gap-36 gap-12'><img className='lg:w-[12vw] w-[30vw] self-center' src={logo}></img> <div className='ml-4 mb-4 '><Button1 Title={data[0].title}></Button1></div></div>
      <div data-scroll data-scroll-speed=".3" className='col-span-3 lg:h-[70vh] h-[30vh] bg-[#212121] rounded-2xl flex flex-col items-center justify-end lg:gap-32 gap-12 lg:my-0 my-7'><img className='lg:w-[12vw] w-[30vw]' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img><div className='mb-4'><Button1 Title={data[1].title}></Button1></div></div>
      <div data-scroll data-scroll-speed=".5" className='col-span-3 lg:h-[70vh] h-[30vh] bg-[#212121] rounded-2xl  flex flex-col items-center justify-end lg:gap-28 gap-8'><img className='lg:w-[10vw] w-[30vw] ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img><div className='mb-4'><Button1 Title={data[2].title}></Button1></div></div>
   
    </div>
  )
}

export default Achievement
