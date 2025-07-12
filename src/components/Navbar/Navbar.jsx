import React, { useEffect, useState } from "react";
import './Navbar.css';
import SpotlightCard from "../../Animation/SpotlightCard/SpotlightCard";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from 'react-scroll';
export default function Navbar() {

    const [mob, setMob] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        const HandleScroll = () => {
            if (window.scrollY > 200) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener('scroll', HandleScroll)

        return () => {
            window.removeEventListener('scroll', HandleScroll)
        }
    }, [])
    // console.log(window.scrollY)
    return (
        <>
            <div className="hidden lg:block ">

                {/* Navbar */}
                <div className=" fixed mx-auto left-0 right-0 w-max  z-50 top-10 ">
                    <SpotlightCard className="custom-spotlight-card " spotlightColor="rgba(147,147,147,0.3)">
                        <div className="text-white  flex justify-center items-center gap-8 border p-6 rounded-4xl color" >

                            {/* home */}
                            <ScrollLink to="home" smooth={true} duration={300} offset={-200}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
                                    <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
                                    <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
                                    <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
                                </svg>
                            </ScrollLink>
                            {/* About me */}
                            <ScrollLink smooth={true} duration={300} offset={-150} to="about" className="relative overflow-hidden h-6 group">
                                <span class="block group-hover:-translate-y-full transition-transform duration-300">About Me</span>
                                <span
                                    class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">About Me</span>
                            </ScrollLink>

                            {/* tech stack */}
                            <ScrollLink smooth={true} duration={300} to="tech" offset={-200} class="relative overflow-hidden h-6 group">
                                <span class="block group-hover:-translate-y-full transition-transform duration-300">Tech Stack</span>
                                <span
                                    class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Tech Stack</span>
                            </ScrollLink>
                            {/* projects */}
                            <Link to="/projects" className="relative overflow-hidden h-6 group">
                                <span class="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
                                <span
                                    class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Projects</span>

                            </Link>
                            {/* achievements */}
                            <Link to="/achievements" class="relative overflow-hidden h-6 group">
                                <span class="block group-hover:-translate-y-full transition-transform duration-300">Achievements</span>
                                <span
                                    class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Achievements</span>
                            </Link>
                            {/* contact */}
                            <ScrollLink smooth={true} duration={300} to="contact" offset={-150} class="relative overflow-hidden h-6 group">
                                <span class="block group-hover:-translate-y-full transition-transform duration-300">Contact</span>
                                <span
                                    class="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Contact</span>
                            </ScrollLink>
                            {/* resume */}
                            <div className="ml-12 mr-5 zoom">
                                <a href="/ArjunResume.pdf" download="Resume.pdf">
                                    <button className="text-black glow glowhigh b px-6 py-3 rounded-4xl text-xs bg-white">Resume <i className="fa-solid fa-download text-black ml-2 text-sm" ></i></button>
                                </a>
                            </div>

                            {/* mobile 3 horizontal  line bar */}
                            <div className="lg:hidden">
                                <i class="fa-solid text-3xl fa-bars"></i>
                            </div>

                        </div>
                    </SpotlightCard>



                </div>
            </div>


            {/* Mobile Nav */}
            <div className="relative z-1">
                <div className={`lg:hidden fixed w-full z-1 transition duration-400  ${scroll ? ' mob' : ''}`}>
                    {/* Home and bar */}
                    <div className="text-white flex justify-between  items-center m-8 sm:mx-12 gap-60 " >
                        <ScrollLink to="home" smooth={true} duration={800} offset={-200}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
                                <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
                                <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
                                <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
                            </svg>
                        </ScrollLink>
                        <div className="lg:hidden">
                            <button onClick={() => setMob(true)}>
                                <i class="fa-solid text-4xl fa-bars" style={{ color: "white" }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Over display menu */}
            <div className={`text-black font-semibold flex  flex-col justify-center items-center gap-10 text-2xl bg-white h-screen w-screen fixed  top-0 right-0 z-10 transition duration-300  ${mob ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
                <div className="absolute top-8 right-8">
                    <button onClick={() => setMob(false)}> <i class="fa-solid fa-xmark  text-4xl"></i>
                    </button>
                </div>
                <ScrollLink smooth={true} duration={300} to="about" offset={-110}>  <button onClick={() => setMob(false)}>About Me</button></ScrollLink>
                <ScrollLink smooth={true} duration={300} to="tech" offset={-120}>  <button onClick={() => setMob(false)}>Tech Stack</button></ScrollLink>
                <Link to="/projects" >Projects</Link>
                <Link to="/achievements" >Achievements</Link>
                <ScrollLink smooth={true} duration={300} to="contact" offset={-100} ><button onClick={() => setMob(false)}>Contact</button></ScrollLink>



            </div>



        </>
    )
}