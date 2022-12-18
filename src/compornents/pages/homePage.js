import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/homePageStyle.scss'
import { PageTop } from '../views/pageTop'
import { Header } from '../parts/header'
import { NavigaterTab } from '../parts/navigaterTab'
import { Skill } from '../parts/skill'
import { SkillView } from '../views/skillView'


export const HomePage = () => {
  return (
    <div>
        <Header />
        <PageTop /> 
        <NavigaterTab />
        <div className="contentArea">
          <div className="main">
            <h2>Skills</h2>
            <SkillView />
            <h2>Ploducts</h2>
            <SkillView />
            <h2>Experience</h2>
            <Skill/>
          </div>
        </div>
        <Header />
        
    </div>
  )
}
