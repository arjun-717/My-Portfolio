import React from 'react'
import './Achievements.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ShinyText from '../../Animation/ShinyText/ShinyText'



const Achievements = () => {
    const [nav, setNav] = useState(false);


    // Sticky navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setNav(true);
            } else {
                setNav(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // for bg for each element
    const [color, setColor] = useState(false);

    // api -> rewards
    // const [rewards, setRewards] = useState([]);
    const [rewards, setRewards] = useState([

        //nptel
    {
        "title": "NPTEL - HR Analytics",
        "date": " Jul-Oct 2024",
        "organizer": "NPTEL",
        "description": "Successfully completed the NPTEL HR Analytics course with 85% marks obtained, gaining insights into human resource data analysis and practical organizational decision-making skills.",
        "image": "/Rewards/nptel-hr.png"
    },
      {
        "title": "NPTEL - Introduction to Internet of Things",
        "date": " Jul-Oct 2024",
        "organizer": "NPTEL",
        "description": "Successfully completed the NPTEL Introduction to Internet of Things course with 82% marks, gaining strong foundational knowledge in IoT concepts and applications.",
         "image": "/Rewards/iot.png"
    },
      {
        "title": "NPTEL -  Cloud Computing",
        "date": " Jul-Oct 2023",
        "organizer": "NPTEL",
        "description": "Completed the NPTEL Cloud Computing course with 66% marks, learning key concepts in virtualization, cloud services, deployment models, and practical implementation aspects.",
         "image": "/Rewards/cloud.png"
    },
     {
        "title": "Smart steps with sensor support for visually impaired peoples",
        "date": " Feb 2023",
        "organizer": "ICFTA-24",
        "description": "Published a research paper titled “Smart Steps with Sensor Support for Visually Impaired Peoples” in ICFTA-24, focusing on assistive walking technologies using sensors.",
         "image": "/Rewards/icfta24.png"
    },
      {
        "title": "First Rank – II Year CSBS (9.18 CGPA)",
        "date": " March 2024",
        "organizer": "Francis Xavier Engineering College",
        "description": "Secured First Rank in II year B.Tech Computer Science and Business Systems with a 9.18 CGPA at Francis Xavier Engineering College, awarded for outstanding academic performance.",
         "image": "/Rewards/2024.png"
    },
        {
        "title": "Frozen Fest 2024 - CSBS Department",
        "date": " Nov 2023",
        "organizer": "Francis Xavier Engineering College",
        "description": "Participated in the dance competition at Frozen Fest 2023, organized by Francis Xavier Engineering College, showcasing talent, confidence, and cultural participation.",
         "image": "/Rewards/frozen23.jpg"
    },
      {
        "title": "Frozen Fest 2025 - CSBS Department",
        "date": " Jan 2025",
        "organizer": "Francis Xavier Engineering College",
        "description": "Participated in the dance competition at Frozen Fest 2025, organized by Francis Xavier Engineering College, showcasing talent, confidence, and cultural participation.",
         "image": "/Rewards/frozen25.jpg"
    },
      {
        "title": "First Rank – III Year CSBS (9.725 CGPA)",
        "date": " April 2025",
        "organizer": "Francis Xavier Engineering College",
        "description": "Secured First Rank in III year B.Tech Computer Science and Business Systems with a 9.725 CGPA at Francis Xavier Engineering College, recognizing academic excellence.",
         "image": "/Rewards/pic2.jpg"
    },
        {
        "title": "Participation – Dhatchan Academy Hackathon",
        "date": " Aug 2024",
        "organizer": "Dhatchan Academy",
        "description": "Participated in the Hackathon organized by Dhatchan Academy in August 2024, enhancing problem-solving skills and practical application of programming and development concepts.",
         "image": "/Rewards/Dhatchan.jpg"
    },
       {
        "title": "First Prize – Hackathon 1.0",
        "date": " Aug 2023",
        "organizer": "Embedded IOT and Machine Learning Applied Labs",
        "description": "Won First Prize in Hackathon 1.0, organized by Embedded IoT and Machine Learning Applied Labs, for innovative problem-solving and project development skills in August 2024.",
         "image": "/Rewards/ai-ml.jpg"
    },
      {
        "title": "Participation – Dance Performance, 23rd College Day",
        "date": " April 2023",
       "organizer": "Francis Xavier Engineering College",
        "description": "Participated in the dance performance during the 23rd College Day celebrations at Francis Xavier Engineering College in April 2023, showcasing cultural talent and teamwork.",
         "image": "/Rewards/23rd.jpg"
    },
    
    
    ]);
 


    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_API_URL}/achievements`).then(res=>res.json()).then(res => setRewards(res.rewards));
    // },[])

    // console.log(rewards)

    return (
        <div className='achievements'>
            {/* navbar */}
            <div className={`flex items-center mb-10 justify-around py-3 sticky w-full  transition-all duration-500 top-0  z-100 ${nav ? 'scroll' : ''}`}>
                <h1 className=' text-3xl lg:text-4xl pt-5 font-semibold text-center inline-block after:block after:h-[2px] after:bg-gray-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 '>
                    <ShinyText text="ACHIEVEMENTS" disabled={false} speed={3} className='custom-class mb-3' />
                </h1>
                <div className='hover:scale-[1.4] transition-transform duration-300 active:scale-95'>
                    <Link to="/"><i className="fa-solid fa-house text-3xl text-gray-300"></i></Link>
                </div>
            </div>
            {/* contents */}

            {/* <div className='p-6 '>
                <div onMouseEnter={() => setColor(true)}
                    onMouseLeave={() => setColor(false)}
                    className={`border hover:scale-105 rounded-xl w-[80%] mx-auto  transition duration-300 active:scale-110  flex-row xl:flex justify-center items-center gap-6 ${color ? 'bg' : ''}`} style={{ borderColor: "rgba(147,147,147,0.8)" }}>
                    <div className='basis-[60%]'>
                        <img src="/Rewards/pic1.jpg" alt="" className='xl:rounded-l-xl rounded-t-xl xl:rounded-r-[0px] w-full h-full object-cover' />
                    </div>
                    <div className='w-[100%] xl:w-2/5  flex flex-col justify-center items-start gap-3 p-4 text-white'>
                        <h1 className='font-bold text-sm md:text-2xl'>Title of the Achievement</h1>
                        <p className='text-lg'>DATE: 11/12/2025</p>
                        <p className='text-md'>Organized by IIT Madras</p>
                        <p className='text-sm'>Description: Developed a full stack web app in a 24-hour hackathon solving real-time transport issues. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet incidunt libero cupiditate nihil sapiente doloribus neque, cumque non quasi!</p>
                    </div>
                </div>
            </div> */}


            {
                rewards.map((reward, index) => (
                    <div className='p-6 zoom-in' key={index}>
                        <div
                            onMouseEnter={() => setColor(true)}
                            onMouseLeave={() => setColor(false)}
                            className={`border hover:scale-105 rounded-xl w-[85%] max-w-4xl mx-auto transition duration-300 active:scale-110 flex flex-col xl:flex-row justify-center items-center gap-1 xl:gap-6 overflow-hidden ${color ? 'bg' : ''}`}
                            style={{ borderColor: "rgba(147,147,147,0.8)" }}
                        >
                            {/* Image */}
                            <div className='w-full xl:w-3/5'>
                                <img
                                    src={reward.image}
                                    alt={reward.title}
                                    className=' w-full h-full object-cover'
                                />
                            </div>

                            {/* Text */}
                            <div className='w-full xl:w-2/5 flex flex-col justify-center items-start gap-3 p-4 text-white'>
                                <h1 className='font-bold text-green-400 text-sm md:text-2xl'>{reward.title}</h1>
                                <p className='text-lg'> {reward.date}</p>
                                <p className='text-md text-yellow-400'>{reward.organizer}</p>
                                <p className='text-sm'>{reward.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Achievements