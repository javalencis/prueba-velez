import { Product } from "../interfaces";

export const updateProductCart = (products: Product[]) => {
  const cart = localStorage.getItem("cart");
  if (cart) {

    localStorage.setItem("cart", JSON.stringify(products));
  }
};
