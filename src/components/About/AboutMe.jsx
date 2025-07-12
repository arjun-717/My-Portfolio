import React, { useState } from 'react'
import './AboutMe.css'
import SpotlightCard from '../../Animation/SpotlightCard/SpotlightCard'
import EducationCard from '../EducationCard/EducationCard'
import Assets from '../../assets/Images/Assets'
import Typewriter from 'typewriter-effect'
import ShinyText from '../../Animation/ShinyText/ShinyText'
import { tr } from 'motion/react-client'
import { Link as ScrollLink, Element } from 'react-scroll';

const AboutMe = () => {
    const [change, setChange] = useState(false);
    const [show, setShow] = useState(false);

    const HandleShow = () => {
        //     if(show){
        //         setShow(false);
        //     }
        //     else{
        //         setShow(true);
        //     }
        setShow(!show);
    }


    return (
        <Element name="about" data-aos="fade-right" >
                  {/* <Element name="about up" className='zoom-in'  > */}
            <div className="container mx-auto min-h-screen about-bg lg:flex  justify-center items-center gap-15 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-48 pt-0 lg:pt-50 xl:pt-0">
                <SpotlightCard data-aos="fade-right" className="custom-spotlight-card min-w-[48%] relative" spotlightColor="rgba(255, 216, 109, 0.215)">
                    <div className="border border-white p-6 lg:p-10 xl:p-12 rounded-4xl" style={{ borderColor: "rgb(147, 147, 147)", backdropFilter: "blur(3px)" }}>
                        <h1 className="text-2xl lg:text-4xl font-bold mb-6">
                            <ShinyText text="WHO I AM?" disabled={false} speed={3} className="custom-class" />
                        </h1>

                        <h2
                            className="text-[10px] lg:text-sm text-justify leading-6 lg:leading-9"
                            onMouseEnter={() => setChange(true)}
                            onMouseLeave={() => setChange(false)}
                        >
                            I am{" "}
                            <span
                                className={`font-bold text-lg change-text cursor-pointer ${change ? "change-color" : ""}`}
                            >
                                Arjun
                            </span>
                            , a motivated B.Tech Computer Science and Business Systems student with a strong foundation in ReactJS web development and Unity game development.
                            I am passionate about crafting intuitive user interfaces and creating engaging digital experiences.
                            I am always eager to learn, adapt quickly to new technologies, and contribute effectively to collaborative tech projects.
                            I have skills in frontend development using{" "}
                            <i className="font-semibold">
                                HTML, CSS, ReactJS, and TailwindCSS, along with experience in game development with Unity.
                            </i>
                            I also explore database technologies like MySQL and MongoDB and use design tools such as Adobe Photoshop and Premiere Pro to enhance my work.
                            I believe in writing clean, efficient code and constantly improving my knowledge to become a versatile and impactful developer.
                        </h2>
                    </div>

                    {/* Image Toggle Button */}
                    <div
                        className={`absolute top-28 right-4 w-[100px] md:w-[150px] lg:w-[200px] transition duration-300 ease-in-out ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                            }`}
                    >
                        <button onClick={HandleShow}>
                            <img src={Assets.user} alt="User" className="w-full h-auto object-contain rounded-full" />
                        </button>
                    </div>

                    {/* Eye Icon Button */}
                    <div
                        className={`absolute bottom-6 right-8 z-10 cursor-pointer ${show ? "hidden" : ""
                            }`}
                    >
                        <button onClick={HandleShow}>
                            <i className="fa-solid fa-eye text-2xl"></i>
                        </button>
                    </div>
                </SpotlightCard>

                {/* Academic Profile Section */}
                <div className="min-w-[50%] mt-10 lg:mt-0" >
                    <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-center">
                        <ShinyText text="Academic Profile" disabled={false} speed={3} className="custom-class mb-3" />
                    </h1>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <EducationCard image={Assets.fx} />
                        <EducationCard
                            image={Assets.knhss}
                            degree="HSC"
                            university="Karapettai Nadar Higher Secondary School"
                            dept="Maths Biology (Higher Secondary Certificate)"
                            precent="Percentage: 80.33%"
                            year="2020 - 2022"
                        />
                        <EducationCard
                            image={Assets.knhss}
                            degree="SSLC"
                            university="Karapettai Nadar Higher Secondary School"
                            dept="Maths Biology (Higher Secondary Certificate)"
                            precent="Percentage: 90%"
                            year="2019 - 2020"
                        />
                    </div>
                </div>
            </div>


        </Element>


    )
}

export default AboutMe