import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/homePageStyle.scss'
import { PageTop } from '../views/pageTop'
import { Header } from '../parts/header'
import { NavigaterTab } from '../parts/navigaterTab'
import { SkillView } from '../views/skillView'
import { Expense } from '../views/expense'
import { Products } from '../templates/products'


export const ResumePage = () => {
  return (
    <div className="wrap">
        <Header />
        <PageTop /> 
        <NavigaterTab />
        <div className="contentArea">
          <div className="main">
            <h2>Ploducts</h2>
            <Products />
            <h2>Skills</h2>
            <SkillView />
            <h2>Experience</h2>
            <Expense/>
          </div>
        </div>
        <Header />
        
    </div>
  )
}
