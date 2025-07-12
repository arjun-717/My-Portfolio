import React from 'react'
import SkillCard from '../SkillCard/SkillCard'
import Assets from '../../assets/Images/Assets'
import './TechStack.css'
import ShinyText from '../../Animation/ShinyText/ShinyText'
import { Link as ScrollLink, Element } from 'react-scroll';
const TechStack = () => {
   const Skills = [
    { name: 'HTML', img: Assets.html },
    { name: 'CSS', img: Assets.css },
    { name: 'JavaScript', img: Assets.js },
    { name: 'React', img: Assets.react },
     { name: 'C', img: Assets.c },
      { name: 'Java', img: Assets.java },
    { name: 'Tailwind', img: Assets.tailwind },
    { name: 'Node', img: Assets.node },
    { name: 'Express', img: Assets.express },
    { name: 'MongoDB', img: Assets.mongodb },
    { name: 'Git', img: Assets.git },
    { name: 'GitHub', img: Assets.github },
    { name: 'PhotoShop', img: Assets.ps },
    { name: 'Firebase', img: Assets.firebase },
    { name: 'Unity', img: Assets.unity },
     { name: 'Illustrator', img: Assets.ai },
      { name: 'Blender', img: Assets.blender },
        { name: 'MS Office', img: Assets.ms },
          { name: 'Canva', img: Assets.canva },
          
  ];
    return (
        <>
        <Element name='tech' data-aos="fade-up">
                {/* <Element name='tech' className='zoom-in'> */}

                  <div className='container mx-auto'>
                <div className='text-white mb-4 text-xl font-semibold'><h1 className='text-2xl lg:text-4xl text-center my-14 lg:my-10'>
                      <ShinyText text="TECH STACK" disabled={false} speed={3} className='custom-class mb-3 ' /></h1></div>
            
                <div className='marquee ' style={{ width: '80%', margin:'0 auto' }}>
                    <div className='marquee-content flex gap-12 overflow-y-visible '>
                        {Skills.map((skill, index) => (
                            <SkillCard key={index} name={skill.name} img={skill.img} />
                        ))}
                        {/* Duplicate items for seamless scroll */}
                        {Skills.map((skill, index) => (
                            <SkillCard key={index + Skills.length} name={skill.name} img={skill.img} />
                        ))}
                    </div>
                </div>
            </div>
        </Element>
          

        </>
    )
}

export default TechStack