import { createContext, Dispatch, SetStateAction } from "react";
import { Product } from "../interfaces";


export interface AppContextType{
    productsCart: Product[]
    setProductsCart: Dispatch<SetStateAction<Product[]>>
}

export const AppContext = createContext<AppContextType | undefined >(undefined)