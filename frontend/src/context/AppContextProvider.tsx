import React, { ReactNode, useEffect, useState } from 'react'
import { Product } from '../interfaces'
import { AppContext } from './AppContext'
import { getProductsCart } from '../services/getProductCart';


interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider:React.FC<AppContextProviderProps> = ({children}) => {

  const [productsCart, setProductsCart] = useState<Product[]>([])
  const [isVisibleCart, setIsVisibleCart] = useState<boolean>(true)


  useEffect(()=>{
    setProductsCart(getProductsCart())
  },[])

  return (
    <AppContext.Provider value={{productsCart,setProductsCart,isVisibleCart,setIsVisibleCart}}>
      {children}
    </AppContext.Provider>
  )
}
