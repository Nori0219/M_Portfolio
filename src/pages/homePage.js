import React from 'react'
import { Header } from '../compornents/header'
import { NavigaterTab } from '../compornents/navigaterTab'
import { PageTop } from '../compornents/pageTop'

export const HomePage = () => {
  return (
    <div>
        <Header />
        <PageTop /> 
        <NavigaterTab />
    </div>
  )
}
