import React from 'react'
import { Header } from '../components/Header'
import { PrincipalSection } from '../components/PrincipalSection'
import { CategoryTabs } from '../components/CategoryTabs'
import { GiftBannerSection } from '../components/GiftBannerSection'
import { Footer } from '../components/Footer'

export const Home : React.FC = () => {
  return (
    <>
        <Header/>
        <PrincipalSection/>
        <CategoryTabs/>
        <GiftBannerSection/>
        <Footer/>
    </>
  )
}
