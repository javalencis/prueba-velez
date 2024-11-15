import React from 'react'
import { Header } from '../components/Header'
import { PrincipalSection } from '../components/PrincipalSection'
import { CategoryTabs } from '../components/CategoryTabs'

export const Home : React.FC = () => {
  return (
    <>
        <Header/>
        <PrincipalSection/>
        <CategoryTabs/>
    </>
  )
}
