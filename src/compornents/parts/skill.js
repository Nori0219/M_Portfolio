import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_skillCardStyle.scss'
import html from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SkillSetsSVG/HTML.svg';
export const Skill = (props) => {
  console.log(props);
  return (
    <div className="skillCard">
      <div className="skillItem">
        <div className="skillImage">
            {/* <img  src={html} width="58%" alt=""/>  */}

            <img  src={props.image} width="58%" alt=""/>
        </div>
        
        <hr/>
        <div className="skillName">
            <p>{props.name}</p>
        </div>
      </div>
    </div>
  )
}
