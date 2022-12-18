import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_skillCardStyle.scss'

export const Skill = () => {
  return (
    <div className="skillCard">
        <div className="skillImage">
            <img  src={this.props.image}/>
        </div>
        <hr />
        <div className="skillName">
            <p>{this.props.name}</p>
        </div>
    </div>
  )
}
