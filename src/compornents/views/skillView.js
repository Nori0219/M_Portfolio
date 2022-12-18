import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_skillViewStyle.scss'
import { Example } from '../parts/example'
import { Skill } from '../parts/skill'
import { SkillCards } from '../templates/skillCards'

export const SkillView = () => {
  const name='位次';
  return (
    <div className="skill-wrapper">
      <div className="title">
        {/* <h2>Skills</h2> */}
      </div>
      <div className="skillList">
      <SkillCards/>
      </div>
    </div>
    
  )
}
