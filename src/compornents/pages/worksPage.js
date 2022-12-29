import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/homePageStyle.scss'
import { Header } from '../parts/header'
import { NavigaterTab } from '../parts/navigaterTab'
import { PageTop } from '../views/pageTop'
import { Works } from '../templates/works'

export const WorksPage = () => {
  return (
    <div className="wrap">
        <Header />
        <PageTop /> 
        <NavigaterTab />
        <div className="contentArea">
          <div className="main">
            <h2>Works</h2>
            <Works/>
          </div>
        </div>
        <Header />
        
    </div>
  )
}
