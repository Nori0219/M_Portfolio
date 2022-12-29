import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/homePageStyle.scss'
import { Header } from '../parts/header'
import { NavigaterTab } from '../parts/navigaterTab'
import { PageTop } from '../views/pageTop'
import { Works } from '../templates/works'
import { WorkView } from '../views/workView'

export const WorksPage = () => {
  return (
    <div className="wrap">
        <Header />
        <PageTop /> 
        <NavigaterTab />
        <div className="contentArea">
          <div className="max-widh">
            <h2>Works</h2>
            <WorkView/>
          </div>
        </div>
        <Header />
        
    </div>
  )
}
