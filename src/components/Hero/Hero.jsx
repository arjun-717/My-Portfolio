import React, { useEffect, useState } from 'react'
import './Hero.css'
import { Link as ScrollLink, Element } from 'react-scroll';
import Typewriter from "typewriter-effect";
import GradientText from '../../Animation/GradientText/GradientText';
import ShinyText from '../../Animation/ShinyText/ShinyText';
import SpotlightCard from '../../Animation/SpotlightCard/SpotlightCard';
import TiltedCard from '../../Animation/TitleCard/TiltedCard';
const Hero = () => {
  const [dim, setDim] = useState({
    h: '350px',
    w: '350px',
    color: 'rgba(147,147,147,0.3)'
  })

  useEffect(() => {
    const HandleScreen = () => {
      if (window.innerWidth < 1024) {
        setDim({ h: '300px', w: '300px', color: 'rgba(147,147,147,0)' })
      } else {
        setDim({ h: '350px', w: '350px' })
      }
    }

    window.addEventListener('resize', HandleScreen);

    return () => window.removeEventListener('resize', HandleScreen)
  }, [])

  return (
    <>
      <Element name='home'>
        <div className="container mx-auto flex  justify-center items-center gap-8 lg:mt-45 xl:mt-35 mt-20 ">
          {/* for Desktop */}
          <SpotlightCard className="custom-spotlight-card  hidden lg:block" spotlightColor={dim.color}>
            <div className=' flex flex-col-reverse  lg:flex lg:flex-row w-full  gap-14  border-white lg:border-1  p-3 lg:p-12 cursor-pointer zoom-in rounded-4xl lg:backdrop-blur-[3px]' style={{ borderColor: " rgb(147, 147, 147)" }}>
              <div className='mb-7 mx-auto hidden lg:block'>
                <TiltedCard
                  imageSrc="me.jpg"
                  containerHeight={dim.h}
                  containerWidth={dim.w}
                  imageHeight={dim.h}
                  imageWidth={dim.w}
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                />
              </div>
              <div className='text-white my-auto flex flex-col gap-3 w-[80%] mx-auto '>
                <h2 className='text-3xl relative overflow-hidden h-8 group'>
                  <span className='block absolute group-hover:-translate-y-full transition-transform duration-300'>
                    Hi There!
                  </span>
                  <span className='block absolute top-full group-hover:translate-y-[-100%] transition-transform duration-300'>
                    Hi There!
                  </span>
                </h2>
                <h1 className='text-6xl'>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                  >
                    I'm Arjun
                  </GradientText>

                </h1>

                <div className='text-2xl mt-10'>

                  <Typewriter
                    options={{
                      strings: [
                        "MERN Stack Developer",
                        "UNITY Game Developer",
                        " Computer Engineer"
                      ],
                      loop: true,
                      autoStart: true,
                      deleteSpeed: 50,
                    }}
                  />

                  <h3 className='text-sm mt-2'>   <ShinyText text="Transforming ideas into powerful web applications." disabled={false} speed={3} className='custom-class' /></h3>
                </div>

              </div>
            </div>
          </SpotlightCard>


          {/* for Mobile */}
          <div className="lg:hidden" >
            <div className=' flex flex-col-reverse  lg:flex lg:flex-row w-full  gap-14  border-white lg:border-1  p-3 lg:p-12 cursor-pointer zoom-in rounded-4xl lg:backdrop-blur-[3px]' style={{ borderColor: " rgb(147, 147, 147)" }}>



              <div className='mb-7 mx-auto hidden lg:block'>
                <TiltedCard
                  imageSrc="me.jpg"
                  containerHeight={dim.h}
                  containerWidth={dim.w}
                  imageHeight={dim.h}
                  imageWidth={dim.w}
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                />
              </div>



              <div className='text-white my-auto flex flex-col gap-3 w-[80%] mx-auto '>
                <h2 className='text-3xl relative overflow-hidden h-8 group'>
                  <span className='block absolute group-hover:-translate-y-full transition-transform duration-300'>
                    Hi There!
                  </span>
                  <span className='block absolute top-full group-hover:translate-y-[-100%] transition-transform duration-300'>
                    Hi There!
                  </span>
                </h2>
                <h1 className='text-6xl'>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                  >
                    I'm Arjun
                  </GradientText>

                </h1>

                <div className='text-2xl mt-10'>

                  <Typewriter
                    options={{
                      strings: [
                        "MERN Stack Developer",
                        "UNITY Game Developer",
                        " Computer Engineer"
                      ],
                      loop: true,
                      autoStart: true,
                      deleteSpeed: 50,
                    }}
                  />

                  <h3 className='text-sm mt-2'>   <ShinyText text="Transforming ideas into powerful web applications." disabled={false} speed={3} className='custom-class' /></h3>
                </div>
                <div className='lg:hidden my-10'>
                  <div className='flex items-center justify-start gap-6 text-3xl text-gray-200 '>
                    <a href='https://www.linkedin.com/in/arjun-b-b5ba9928b/'><i class="fa-brands fa-linkedin active:scale-110 transition duration-150"></i></a>
                    <a href='https://github.com/arjun-717'>  <i class="fa-brands fa-github active:scale-110 transition duration-150"></i></a>
                    <a href='https://www.reddit.com/user/AjuuDev/'> <i class="fa-brands fa-reddit active:scale-110 transition duration-150"></i></a>
                    <a href="mailto:arjun7172003@gmail.com?subject=Contact%20via%20Portfolio&body=Hello%20Arjun,">
                      <i class="fa-solid fa-envelope active:scale-110 transition duration-150"></i>
                    </a>

                    <a href="https://wa.me/919342429886?text=Hello%20Arjun,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-whatsapp active:scale-110 transition duration-150"></i>
                    </a>

                  </div>
                  <div className='flex items-center gap-5 mt-10 ' >

                    <ScrollLink to='contact' smooth={true} offset={-100} duration={800}> <button className='btn border border-black p-3 text-sm rounded-xl cursor-pointer btn text-gray-100 font-semibold active:scale-105 transition duration-150'>Contact Me &nbsp; <i class="fa-solid fa-address-book"></i></button></ScrollLink>
                    <div className='font-semibold text-sm active:scale-105 transition duration-150 border border-white p-3 rounded-xl' style={{ borderColor: "rgba(147,147,147,0.8)" }}>
                      <a href="/ArjunResume.pdf" download="Resume.pdf"> <button><ShinyText text="Resume" disabled={false} speed={3} className='custom-class' /> &nbsp;<i class="fa-solid fa-download text-gray-300"></i></button></a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </Element>

    </>
  )
}

export default Hero