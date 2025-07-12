import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Projects.css';
import ShinyText from '../../Animation/ShinyText/ShinyText';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Projects = () => {
    const [nav, setNav] = useState(false);
    const a ="Live Demo"
    const b="Apk Link"
    //show info
    const HandleInfo =()=>{
        toast.info("Not Available");
    }
    
    // Project Records
    const [project, setProject] = useState([
        {
            "title": "Real Time Chat Application",
            "description": "Built with React, Firebase, and Tailwind CSS, this app allows authenticated users to chat seamlessly in real time.",
            "techUsed": ["React", "Firebase", "Firestore", "Tailwind CSS"],
            "demoLink": "https://real-time-chat-application-six-tawny.vercel.app/",
            "githubLink": "https://github.com/arjun-717/Real-Time-Chat-Application",
            "image": "/Images/pic.jpeg"
        },
             {
            "title": "P2P File Sharing",
            "description": "A web app for sharing files directly between users without any server storage, enabling fast, secure, and private peer-to-peer file transfers easily through the browser.",
            "techUsed": ["Next.js", "TypeScript", "pnpm", "Tailwind CSS"],
            "demoLink": "",
            "githubLink": "https://github.com/arjun-717/P2P-FileSharing",
            "image": "/Images/p2p_project.png"
        },
                {
            "title": "Tech Firm 24 - CSBS Department Symposium",
            "description": "Developed the Tech Firm 24 symposium website using HTML, CSS, and JavaScript, featuring event details, registration forms, and responsive design to enhance departmental outreach and engagement.",
            "techUsed": ["HTML", "CSS", "JavaScript"],
            "demoLink": "https://tech-firm24.vercel.app/",
            "githubLink": "https://github.com/arjun-717/TechFirm24",
            "image": "/Images/techfirm24.png"
        },
         {
            "title": "Simple Hand Cricket Game - ReactJS",
            "description": "Built a simple Hand Cricket game using ReactJS, Tailwind CSS, and JavaScript, allowing users to play against the computer with interactive score updates and UI.",
            "techUsed": ["ReactJS", "TailwindCSS", "JavaScript"],
            "demoLink": "https://hand-cricket-simple.vercel.app/",
            "githubLink": "https://github.com/arjun-717/Hand-Cricket-Simple",
            "image": "/Images/cricket.png"
        },
         {
            "title": "Simple NoteBook",
            "description": "Developed a simple online Notebook app using HTML, CSS, and JavaScript to add, edit, and delete notes efficiently with a clean, responsive user interface.",
              "techUsed": ["HTML", "CSS", "JavaScript"],
            "demoLink": "https://simple-note-book.vercel.app/",
            "githubLink": "https://github.com/arjun-717/Simple-Note-Book",
            "image": "/Images/NoteBook.png"
        },
           {
            "title": "Freedom Fighters - Independence Day Competition",
            "description": "Created an informative website showcasing Indian freedom fighters for an Independence Day competition, using HTML, CSS, and JavaScript with a clean, responsive design layout.",
              "techUsed": ["HTML", "CSS", "JavaScript"],
            "demoLink": "https://freedom-fighters-psi.vercel.app/",
            "githubLink": "https://github.com/arjun-717/Freedom_Fighters",
            "image": "/Images/ff.png"
        },
         {
            "title": "Dairy Milk 3D Model - Blender",
            "description": "Designed a realistic 3D model of a Dairy Milk chocolate using Blender, focusing on accurate modelling, texturing, and rendering for product visualization and presentation.",
              "techUsed": ["Blender"],
            "demoLink": "https://sketchfab.com/3d-models/dairy-milk-43b3229f1f184014a9f535cf8a383382",
            "githubLink": "",
            "image": "/Images/dairymilkoutput.png"
        },
              {
            "title": "KitKat 3D Model - Blender",
            "description": "Designed a realistic 3D model of a KitKat using Blender, focusing on accurate modelling, texturing, and rendering for product visualization and presentation.",
              "techUsed": ["Blender"],
            "demoLink": "https://sketchfab.com/3d-models/kitkat-78e6cadf588b448b80049742f91e2944",
            "githubLink": "",
            "image": "/Images/Kitkat.png"
        },
             {
            "title": "Bottle 3D Model - Blender",
            "description": "Designed a realistic 3D model of a Bottle using Blender, focusing on accurate modelling, texturing, and rendering for product visualization and presentation.",
              "techUsed": ["Blender"],
            "demoLink": "",
            "githubLink": "",
            "image": "/Images/bottle finish work.png"
        },
             {
            "title": "Buggy Rider - Rescue Civilians Unity 2D Game",
            "description": "Developed Buggy Rider: Rescue Civilians, a 2D game built using Unity where players navigate a buggy to rescue civilians while overcoming obstacles and challenges. This project strengthened my skills in game design, 2D physics, player controls, and creating engaging gameplay mechanics with Unity.",
              "techUsed": ["Unity","C#"],
            "demoLink": "",
            "githubLink": "",
            "image": "/Images/buggy.jpg",
            "apkLink" :"https://www.mediafire.com/file/qik8smhq1cewxc7/Rescue_Civilians_1.1.apk/file"
        },
           {
            "title": "Flappy Bird Unity 2D Game",
            "description": "Developed a fun Flappy Bird 2D game in Unity with C#, featuring day and night modes and using friends’ facial assets for personalized gameplay enjoyment.",
               "techUsed": ["Unity","C#"],
            "demoLink": "",
            "githubLink": "",
            "image": "/Images/flap.png",
            "apkLink" :"https://www.mediafire.com/file/m7gz5g8if4dqr0g/One_Last_Flap.apk/file"
        },
            {
            "title": "GOW 2D Pixel Art FanMade Game",
            "description": "Developed a 2D pixel art fan-made God of War game in Unity with C#, featuring Stage 1 gameplay, character animations, and an engaging retro aesthetic.",
               "techUsed": ["Unity","C#"],
            "demoLink": "",
            "githubLink": "",
            "image": "/Images/gow.jpg",
            "apkLink" :"https://www.mediafire.com/file/o8dvqu5v02tfr6v/2D+Gow+FanMade.apk/file"
        },
        
        
        
        
        
        
       
    ]);



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



    // Fetch projects from backend API
    //   useEffect(() => {
    //     const fetchProjects = async () => {
    //       try {
    //         const res = await fetch(process.env.REACT_APP_API_URL + '/projects');
    //         const data = await res.json();
    //         setProject(data);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     };

    //     fetchProjects();
    //   }, []);
    //     useEffect(() => {
    //         const fetchProjects = async () => {
    //     const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
    //     const data = await res.json(); // <-- ensure .json() is called as function
    //     setProject(data.projects); // <-- update to access data.projects
    // };

    //         fetchProjects();
    //     }, []);
    // console.log("API URL:", import.meta.env.VITE_API_URL);




    return (
        <div className='projects'>

            <div className={`flex items-center  justify-around py-3 sticky w-full  transition-all duration-500 top-0  z-100 ${nav ? 'scroll' : ''}`}>
                <h1 className=' text-3xl lg:text-4xl pt-5 font-semibold text-center inline-block after:block after:h-[2px] after:bg-gray-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 '>
                    <ShinyText text="PROJECTS" disabled={false} speed={3} className='custom-class mb-3' />
                </h1>
                <div className='hover:scale-[1.4] transition-transform duration-300 active:scale-95'>
                    <Link to="/"><i className="fa-solid fa-house text-3xl text-gray-300"></i></Link>
                </div>
            </div>

            <div className='flex flex-col w-[85%]  lg:grid grid-cols-2 gap-10 lg:w-[75%] mx-auto py-10 zoom-in ' >
                {project.map((proj, index) => (
                    <div key={index} className='border rounded-3xl active:scale-90 lg:hover:scale-105 transition duration-300 gray' style={{ borderColor: "rgb(147, 147, 147)", backdropFilter: "blur(3px)" }}>
                        <img className=' lg:w-full h-auto rounded-t-3xl' src={proj.image} alt={proj.title} />
                        <div className='mx-4 lg:mx-8 my-4'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-sm lg:text-lg font-semibold'>{proj.title}</h1>
                              { proj.githubLink ? 
                                  <a href={proj.githubLink} target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-github text-2xl lg:text-4xl cursor-pointer hover:scale-115 transition duration-300"></i>
                                </a>
                                :
                                 <a onClick={HandleInfo} target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-github text-2xl lg:text-4xl cursor-pointer hover:scale-115 transition duration-300"></i>
                                </a>
                              }
                            </div>
                            <div className='flex flex-col lg:gap-5 gap-2 justify-center items-start'>
                                <h1><span className='text-sm lg:text-md font-semibold text-green-400'>Tech Used : </span>
                                    {proj.techUsed.map((tech, index) => (<span className='text-xs lg:text-lg' key={index}>{tech} ,&nbsp;</span>))}
                                </h1>
                                <p className='text-sm'>{proj.description}</p>

                            {
                                proj.demoLink ?
                                       <div className='mx-auto '>
                                <a href={proj.demoLink}>     <button type='submit' 
                                        className='my-3 btn px-6 py-2 rounded-md text-sm text-gray-100  font-semibold hover:scale-105 active:scale-105 transition duration-150'>
                                       {proj.apkLink ? b : a}  &nbsp;{proj.apkLink ? <i class="fa-brands fa-android"></i> :<i class="fa-solid fa-laptop-code"></i>}
                                    </button></a>
                                </div>
                                :
                                       <div className='mx-auto '>
                              {
                                proj.apkLink?
                                  <a  href={proj.apkLink} >     <button type='submit' 
                                        className={`my-3  px-6 py-2 rounded-md text-sm text-gray-100  font-semibold hover:scale-105 active:scale-105 transition duration-150 ${proj.apkLink ? 'bg-green-500' :'btn'}` }>
                                        {proj.apkLink ? b : a} &nbsp; {proj.apkLink ? <i class="fa-brands fa-android"></i> :<i class="fa-solid fa-laptop-code"></i>}
                                    </button></a>
                                    :
                                      <a onClick={HandleInfo}  >     <button type='submit' 
                                        className={`my-3  px-6 py-2 rounded-md text-sm text-gray-100  font-semibold hover:scale-105 active:scale-105 transition duration-150 ${proj.apkLink ? 'bg-green-500' :'btn'}` }>
                                        {proj.apkLink ? b : a} &nbsp; {proj.apkLink ? <i class="fa-brands fa-android"></i> :<i class="fa-solid fa-laptop-code"></i>}
                                    </button></a>
                              }
                                </div>
                            }
                                {/* <h2 className='text-xs lg:text-md'><span className='text-green-400 font-semibold text-xs lg:text-md'>Demo Link : </span  >{proj.demoLink}</h2> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Projects;
