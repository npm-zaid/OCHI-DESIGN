
import logo from 'C:/Users/zaidr/OneDrive/Desktop/React Js/first_/src/Assets/logo001.svg'
import React, { useEffect, useRef ,useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';




function Navbar() {


  const [menu,setmenu] = useState(false)

  const tl = useRef()

const togglemenu =()=>{
  setmenu(!menu)
}

  useGSAP(()=>{
  
tl.current = gsap.timeline({paused:false}).to(".sidebar-wrapper",{
  transform: 'translateX(0%)',
  duration:1,
})

.from('.sidebar-data h5',{
x:100,
opacity:0,
duration:1,
ease: "expo.out",
stagger:.3
})

.from('.sidebar-data i',{
  y:-100,
  opacity:0,
  duration:1,
  ease: "bounce.out",
  })

  })

  useEffect(()=>{
    if(menu){
      tl.current.play()
    }
    else{
      tl.current.reverse()
    }

  },[menu])



  return (
    
      <nav  className='fixed py-6 lg:px-12 px-5  flex justify-between items-center w-[100%] ' >
        <a><img className='lg:w-24  w-20' src={logo}></img></a>
        <div className='nav-links  lg:flex gap-10 font-small hidden text-[1.2rem] ml-[250px] text-[#6e6e6f] capitalize'>
          
        <h5 className='hover:text-[#CDEA68] hover:scale-110 transition-all ease-in-out duration-200 hover:translate-y-2'><Link to = "/">home</Link></h5>
        <h5 className='hover:text-[#CDEA68] hover:scale-110 transition-all ease-in-out duration-200 hover:translate-y-2'><Link to = "/work">our work</Link></h5>
        <h5 className='hover:text-[#CDEA68] hover:scale-110 transition-all ease-in-out duration-200 hover:translate-y-2'><Link to = "/about">about us</Link></h5>
        <h5 className='hover:text-[#CDEA68] hover:scale-110 transition-all ease-in-out duration-200 hover:translate-y-2'><Link to = "/insight">insight</Link></h5>
        </div>
        <h5 className='nav-odd lg:block hidden font-small text-[1.3rem] text-[#CDEA68] capitalize'><Link href=''>contact us</Link></h5>
        <span className='hamburger lg:hidden block'><i onClick={togglemenu}  className="ri-menu-3-line text-[#CDEA68] text-3xl"></i></span>
     
        <div className='lg:hidden sidebar-wrapper absolute bg-[#0000006d] backdrop-blur-lg h-[100vh] translate-x-[100%]  left-0 top-0 w-full z-1 '>
          <div className='sidebar-data p-5 text-[#CDEA68] h-[100%]  flex flex-col justify-center gap-5 text-[15vw] font-[600] relative'>
        <h5><a href="/">home</a></h5>
        <h5><a href="/work">our work</a></h5>
        <h5><a href="/about">About us</a></h5>
        <h5><a href="/insight">insight</a></h5>
        <i onClick={togglemenu}  class="close ri-close-line absolute top-5 right-5 bg-stone-700 rounded-[50%] leading-[4rem] p-2  "></i>
          </div>
        </div>

      </nav>
   
  )
}

export default Navbar
