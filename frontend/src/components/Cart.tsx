import React, { useContext, useState } from "react";
import { AppContext, AppContextType } from "../context/AppContext";
import "../styles/Cart.css";
import { formatPrice } from "../utils/functions";
import "../styles/Cart.css";

import iconDelete from "../assets/iconDelete.png";
import iconBack from "../assets/back.png";
import { Product } from "../interfaces";
import { updateProductCart } from "../services/updateProductCart";
export const Cart: React.FC = () => {
  const { productsCart, setProductsCart, isVisibleCart,setIsVisibleCart } = useContext(
    AppContext
  ) as AppContextType;
  const handleDeleteProductCart = (product: Product) => {
    const newProductsCart = productsCart.filter(
      (p) => p.productId !== product.productId
    );
    setProductsCart(newProductsCart);
    updateProductCart(newProductsCart);
  };
  const handleOpenCart = ()=>{
    setIsVisibleCart(value =>!value)
  }

  return (
    <div className={isVisibleCart ? "Cart open" : "Cart closed"}>
      <div className="CartContent">
        <div className="ContentTop">
          <img src={iconBack} alt="" onClick={handleOpenCart}/>
          <p>BOLSA DE COMPRAS</p>
        </div>
        <div className="ProductsCart">
          {productsCart.map((product) => (
            <div key={product.productId} className="ProductCart">
              <div className="productImg">
                <img src={product.imageUrl} alt="" />
              </div>
              <div className="productInfo">
                <div className="info">
                  <p className="title">VELÉZ</p>
                  <p className="name">{product.productName}</p>
                </div>
                <div className="priceAndOptions">
                  <p className="price">{formatPrice(product.price)}</p>
                  <img
                    onClick={() => handleDeleteProductCart(product)}
                    src={iconDelete}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ButtonCheckout">
          <button>FINALIZAR COMPRA</button>
        </div>
      </div>
    </div>
  );
};
