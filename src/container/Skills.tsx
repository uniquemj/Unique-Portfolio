import React from 'react'
import { SKILLS } from '@/constants/skill'
import SkillCard, { type SkillCardType } from '@/components/SkillCard'

const Skills = () => {
  return (
    <section id="skills">
        {
            SKILLS.map((item: SkillCardType)=>(
                <SkillCard id={item.id} icon={item.icon} skill={item.skill}/>
            ))
        }
    </section>
  )
}

export default Skills