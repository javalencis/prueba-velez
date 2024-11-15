import { Product } from "../interfaces";


export const getProductsCart= (): Product[] => {
  const myCart= localStorage.getItem('cart');
  if (!myCart) {
    const newMyCart:Product[] = [];
    localStorage.setItem('cart', JSON.stringify(newMyCart));
    return newMyCart;
  }

  return JSON.parse(myCart);
};
