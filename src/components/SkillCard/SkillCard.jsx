import React, { useState } from 'react'
import Assets from '../../assets/Images/Assets'
import './SkillCard.css'
const SkillCard = ({name,img}) => {
    const [hover,setHover] = useState(false);
    return (
        <div>
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={`inline-flex px-8 py-5 flex-col justify-center items-center gap-2.5  text-white border transition duration-500 hover:scale-90  origin-center ${hover?'effect':''}`}  style={{ borderColor: " rgb(147, 147, 147)", borderRadius: "20px", backdropFilter: "blur(3px)" }}>
                <img src={img} className='max-w-15 max-h-15' alt="" />
                <h1 className='text-md' style={{fontSize:"15px",fontWeight:"500",letterSpacing:"1px"}}>{name}</h1>
            </div>
            
        </div>
    )
}

export default SkillCard