import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Achievements from "./Pages/Achievements/Achievement";
import { ToastContainer, toast } from 'react-toastify';
import ScrollToTop from './ScrollToTop';

function App() {
    
useEffect(() => {
  AOS.init({
    duration: 800, // animation duration in ms
    once: true,    // animate only once when scrolled into view
    offset: 120,   // (optional) offset from trigger point
    easing: 'ease-in-out', // (optional) smoother easing
    mirror: false, // (optional) disable mirror animation on scroll up
  });
}, []);

    return (
        <>
        <ToastContainer/>
        <BrowserRouter>
              <ScrollToTop /> {/* Works for ALL routes */}
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/projects" element={<Projects/>}/>
                <Route path="/achievements" element={<Achievements/>}/>
            </Routes>
        </BrowserRouter>
            

        </>
    )
}

export default App
