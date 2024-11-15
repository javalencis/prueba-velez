import React from 'react'
import { Header } from '../components/Header'
import { PrincipalSection } from '../components/PrincipalSection'
import { CategoryTabs } from '../components/CategoryTabs'
import { GiftBannerSection } from '../components/GiftBannerSection'
import { Footer } from '../components/Footer'
import {ProductsList} from '../components/ProductsList'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'

export const Home : React.FC = () => {
  return (
    <ApolloProvider client={client}>
        <Header/>
        <PrincipalSection/>
        <CategoryTabs/>
        <ProductsList/>
        <GiftBannerSection/>
        <Footer/>
    </ApolloProvider>
  )
}
