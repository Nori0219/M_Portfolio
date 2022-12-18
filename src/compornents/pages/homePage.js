import React from 'react'
import { PageTop } from '../pageTop'
import { Header } from '../parts/header'
import { NavigaterTab } from '../parts/navigaterTab'
import { Skill } from '../parts/skill'


export const HomePage = () => {
  return (
    <div>
        <Header />
        <PageTop /> 
        <NavigaterTab />
        <Skill />
    </div>
  )
}
