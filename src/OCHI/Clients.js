import React from 'react'
import Button3 from './Button3'
import Button1 from './Button1'
import Table_generator from './Table_generator'
import pic from 'C:/Users/zaidr/OneDrive/Desktop/React Js/final/src/Assets/star.png'
import pic2 from 'C:/Users/zaidr/OneDrive/Desktop/React Js/final/src/Assets/rating.png'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Clients() {
    

    useGSAP(()=>{
        gsap.from('.client1 .pic',{
            y:60,
            duration:1,
            opacity:0,
            scrollTrigger:{
              trigger:'.client1',
              scroller:'body',
              start:'top 60%',
              end:'top 40%',
             
              scrub:2
            }
          });

          gsap.from('.client2 .pic',{
            x:100,
            opacity:0,
            duration:1,
            scrollTrigger:{
              trigger:'.client2',
              scroller:'body',
              start:'top 60%',
              end:'top 40%',
              scrub:2
            }
          });
    })


    const data =[
        {
            title:'Karman Ventures'
        },
        {
            title:'investor deck'
        },
        {
            title:'sales deck'
        },
    ]


    const row = [
        {
            row1:{btn1:'Planet ily',p:'nina walloch',btn2:'read'}
        },
        {
            row1:{btn1:'Workiz ivy',p:'tomer levy',btn2:'read'}
        },
        {
            row1:{btn1:'Hypercare ',p:' kimkarde',btn2:'read'}
        },
        {
            row1:{btn1:'Officevibe',p:'bredangoss',btn2:'read'}
        },
        {
            row1:{btn1:'berlin pot',p:'labriegrey',btn2:'read'}
        },
        {
            row1:{btn1:'Orderlion ',p:'stefin king',btn2:'read'}
        },
        {
            row1:{btn1:'Black Book',p:'jacci smith',btn2:'read'}
        },
        {
            row1:{btn1:'Trawa grey',p:'david budde',btn2:'read'}
        },

       

    ]


  return (
    <div className='min-h-screen w-full bg-black '>
         <div className='heading lg:p-14 p-7 border-b-[1px] border-stone-700 '><h1 className='font-small lg:text-6xl text-3xl font-[300] text-stone-500 capitalize'>clients review's</h1></div>
      <div className='lg:grid grid-cols-12 gap-4 lg:p-14 p-7 text-lg text-stone-100'>
        <div className='client1 col-span-3 bg-stone-900 lg:h-[70vh] lg:mb-0 mb-5 rounded-xl  shadow-2xl flex flex-col items-center justify-center gap-5 lg:p-0 p-5'><img className='pic lg:w-[40%] w-[30vw]' src={pic2}></img><div><Button3 Title={data[0].title}></Button3></div>
        </div>

        
        <div className='col-span-3 bg-stone-900 lg:h-[70vh] lg:mb-0 mb-5 rounded-xl flex flex-col lg:pl-5 lg:pt-5 gap-5 p-5 '>
            <p className='pb-10 text-stone-300'>Services :</p>
            <Button1 Title={data[2].title}></Button1>
            <Button1 Title={data[1].title}></Button1>
            </div>

        <div className='client2 col-span-6 bg-stone-900 lg:h-[70vh]  rounded-xl p-5  text-stone-300 '>
            <p className='pb-10 lg:text-xl text-2xl lg:text-start text-center'>William Barnes</p>
            <img className='pic lg:w-[8vw] w-[50vw] lg:mx-0 mx-auto rounded-lg' src='https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png'></img>
<p className='pt-9 text-md '>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding clients through the process and like I can introduce them to someone who needs to put a sales deck together from scratch, and they would able to handhold a client experience from 0 to 100 effectively from story to design.
</p>
        </div>
      </div>

      <div className='client-data  bg-stone-800 rounded-xl lg:mx-14 mx-7 text-stone-300 p-3'>
      <div className='flex justify-center items-center p-2'><img data-scroll data-scroll-speed=".1" className='lg:w-[40vh] w-[30vh]' src={pic}></img></div>
    <Table_generator ROW={row[0]}></Table_generator>
    <Table_generator ROW={row[1]}></Table_generator>
    <Table_generator ROW={row[2]}></Table_generator>
    <Table_generator ROW={row[3]}></Table_generator>
    <Table_generator ROW={row[4]}></Table_generator>
    <Table_generator ROW={row[5]}></Table_generator>
    <Table_generator ROW={row[6]}></Table_generator>
    <Table_generator ROW={row[7]}></Table_generator>
    
      </div>

    </div>
  )
}

export default Clients
