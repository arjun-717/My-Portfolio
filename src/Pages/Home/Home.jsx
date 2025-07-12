import React from 'react'
import AboutMe from '../../components/About/AboutMe'
import Squares from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import TechStack from '../../components/TechStack/TechStack'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <>
      <div className='h-screen w-full relative'>
        <Squares
          speed={0.17}
          squareSize={90}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='rgba(147, 147, 147,0.2)'
          hoverFillColor='rgba(183, 183, 183,0.1)'
        />
        <div className=" absolute top-0 w-full h-full flex flex-col">
          <div className='relative z-200' >
            <Navbar />
          </div>
          <div className=' flex-1 flex justify-center items-center z-1'>
            <Hero />
          </div>
        </div>
      </div>


      <div className='relative w-full min-h-screen'>
        <div className="absolute inset-0 z-0 h-full">
          <Squares
            speed={0.17}
            squareSize={90}
            direction='diagonal'
            borderColor='rgba(147, 147, 147,0.2)'
            hoverFillColor='rgba(183, 183, 183,0.1)'
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="relative z-10 w-[92%] mx-auto">
          <AboutMe />
        </div>
      </div>

      <div className='h-screen w-full relative'>
        <Squares
          speed={0.17}
          squareSize={90}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='rgba(147, 147, 147,0.2)'
          hoverFillColor='rgba(183, 183, 183,0.1)'
        />
        <div className=" w-full h-full absolute top-0 left-0 ">
          <div className='relative z-1' >
            <TechStack />

          </div>

          <div className='h-screen w-full relative'>
            <Squares
              speed={0.17}
              squareSize={90}
              direction='diagonal' // up, down, left, right, diagonal
              borderColor='rgba(147, 147, 147,0.2)'
              hoverFillColor='rgba(183, 183, 183,0.1)'
            />
            
            <div className='w-full h-full absolute top-0 left-0'>
              <Contact />
            </div>

          </div>


        </div>
      </div>


    </>
  )
}

export default Home