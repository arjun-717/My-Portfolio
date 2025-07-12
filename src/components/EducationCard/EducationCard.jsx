import React from 'react'
import './EducationCard.css';
import Assets from '../../assets/Images/Assets'


const EducationCard = (props) => {

  const {
    image,
    degree = "B.TECH",
    university = "Francis Xavier Engineering College, Tirunelveli",
    dept = "B.Tech in Computer Science and Business Systems",
    precent = "CGPA: 9.34",
    year = "2022 - Expected May 2026"
  } = props;

  return (
    <div className='flex justify-center items-center gap-3 border border-white p-5 rounded-4xl grey up ' style={{ borderColor: " rgb(147, 147, 147)", borderRadius: "40px", backdropFilter: "blur(3px)" }}>
      <div className="img w-1/4 h-auto basis-[25%]">
        <img src={image} alt="" />
      </div>
      <div className='basis-[75%]'>
        <h1 className='text-md md:text-xl font-bold mb-0 lg:mb-2 text-center text-blue-400'>{degree}</h1>
        <h1 className='text-[10px] md:text-[16px] mb-1 text-center'>{university}</h1>
        <h2 className='text-[8px] md:text-xs mb-2 text-center'><i>{dept}</i></h2>
        <h2 className=' text-xs md:text-[18px] font-semibold text-center mb-0.5 text-amber-300'>{precent}</h2>
        <h1 className='text-[10px]  md:text-[16px] font-semibold text-center text-green-300'>{year}</h1>
      </div>
    </div>
  )
}

export default EducationCard