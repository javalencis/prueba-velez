import React, { useContext, useState } from "react";
import { AppContext, AppContextType } from "../context/AppContext";
import "../styles/Cart.css";
import { formatPrice } from "../utils/functions";
import "../styles/Cart.css";

import iconDelete from "../assets/iconDelete.png";
import iconBack from "../assets/back.png";
import { Product } from "../interfaces";
import { updateProductCart } from "../services/updateProductCart";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../apollo/queries";
export const Cart: React.FC = () => {
    const [createOrder] = useMutation(CREATE_ORDER)
  const { productsCart, setProductsCart, isVisibleCart, setIsVisibleCart } =
    useContext(AppContext) as AppContextType;
  const [sale, setSale] = useState<boolean>(true);
  const [userId, setUserId] = useState<number>();


  const handleDeleteProductCart = (product: Product) => {
    const newProductsCart = productsCart.filter(
      (p) => p.productId !== product.productId
    );
    setProductsCart(newProductsCart);
    updateProductCart(newProductsCart);
  };
  const handleOpenCart = () => {
    setIsVisibleCart((value) => !value);
  };

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = parseInt(e.target.value);
    if(isNaN(value)){
        setUserId(undefined);
    }else{
        setUserId(value)
    }
    
  }
  const handleCheckout = async () => {
    if (sale) {
        const orderId = Date.now().toString();
        const productIds = productsCart.map((product) => product.productId);
        const totalPrice = productsCart.reduce(
          (total, product) => total + product.price,
          0
        );
        const quantity = productsCart.length;
        try {
          await createOrder({
            variables: {
              orderId,
              customerDocument: userId,
              productIds,
              quantity,
              totalPrice,
            },
          });
          alert("Compra realizada con éxito");
          setProductsCart([]);
          setUserId(undefined);
        } catch (error) {
          console.error("Error al crear la orden:", error);
          alert("Hubo un error al procesar tu compra");
        }
      
      setSale(false);
    } else {
      setSale(true);
    }
  };

  console.log(userId)

  return (
    <div className={isVisibleCart ? "Cart open" : "Cart closed"}>
      <div className="CartContent">
        <div className="ContentTop">
          <img src={iconBack} alt="" onClick={handleOpenCart} />
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
          {sale && (
            <input type="number" placeholder="Numero de documento" value={userId} onChange={handleUserId} required />
          )}
          <button onClick={handleCheckout}>FINALIZAR COMPRA</button>
        </div>
      </div>
    </div>
  );
};
