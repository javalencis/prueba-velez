import { Product } from "../interfaces";

export const addProductCart = (product: Product) => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const newCart: Product[] = [...JSON.parse(cart), product];

    localStorage.setItem("cart", JSON.stringify(newCart));
  }
};
