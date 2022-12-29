import React from 'react'
import { Skill } from '../parts/skill'
import htmlCss from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SkillSetsSVG/HTML CSS.svg';
import JavaScript from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SkillSetsSVG/JavaScript.svg';
import Flutter from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SkillSetsSVG/Flutter.svg';
import react from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SkillSetsSVG/React.svg';
import Git from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SkillSetsSVG/Git.svg';
import Canva from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SkillSetsSVG/Canva.svg';



export const SkillCards = () => {

    const skillList = [
        {
          name: 'Flutter',
          image: Flutter,
        },
        {
          name: 'React',
          image: react,
        },
        {
          name: 'JavaScript',
          image: JavaScript,
        },
        {
          name: 'HTML＆CSS',
          image: htmlCss,
        },
        {
          name: 'Git',
          image: Git,
        },
        {
          name: 'Canva',
          image: Canva,
        },
       
      ];

  return (
    <div className="skillCards">
        {skillList.map((skillItem) => {            
              return (         
                <Skill            
                  name={skillItem.name}            
                  image={skillItem.image}            
                />    
              );            
            })}
        <div>
        </div>
    </div>
  )
}
