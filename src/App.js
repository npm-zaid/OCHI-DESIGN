


import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import LocomotiveScroll from 'locomotive-scroll';
import Homepage from "./OCHI/Homepage";
import Aboutpage from "./OCHI/Aboutpage";
import Insight from "./OCHI/Insight";
import Work from "./OCHI/Work";
import Navbar from "./OCHI/Navbar";
import Footer from "./OCHI/Footer.js"

function App() {


  useEffect(() => {
    const scroller = new LocomotiveScroll({
      el: document.querySelector('.loco'),
      smooth: true,
      lerp:0.02
    });
  
    return () => {
      scroller.destroy();
    };
  }, []);

  return (

  <div className="loco overflow-x-hidden">
    
    <Navbar/>

    <Routes>

      <Route path="/OCHI-DESIGN" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/insight" element={<Insight/>}/>

    </Routes>

    <Footer/>
   
  </div>
  )
}

export default App


