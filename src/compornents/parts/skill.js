import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_skillCardStyle.scss'
export const Skill = (props) => {
  console.log(props);
  return (
    <div className="skillCard">
      <div className="skillItem">
        <div className="skillImage">
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
