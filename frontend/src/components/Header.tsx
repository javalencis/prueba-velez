import React, { useContext } from "react";
import '../styles/Header.css'
import { AppContext, AppContextType } from "../context/AppContext";
export const Header: React.FC = () => {
  const {productsCart,setIsVisibleCart} = useContext(AppContext) as AppContextType

  const totalCart = productsCart.length
  const handleOpenCart = () => {
    setIsVisibleCart(value => !value)
  }
  return (
    <header className="Header">
      <nav className="Header-menu">
        <ul>
            <li><a href="/">MUJER</a></li>
            <li><a href="/">HOMBRE</a></li>
        </ul>
      </nav>
      <div className="Header-logo">
        <img src="https://cuerosvelezco.vtexassets.com/assets/vtex/assets-builder/cuerosvelezco.storetheme/1.0.17/svgs/logo-velez___809b118a59d617f3ad6fbebb950fdb8f.svg" alt="Logo Velez" />
      </div>

      <nav className="Header-menuOptions">
        <ul>
            <li className="Header-ButtonCart" onClick={handleOpenCart}>
              <img src="https://cuerosvelezco.vtexassets.com/arquivos/miniCart2.svg" alt="" />
              {totalCart>0 &&  <p className="TotalCart">{totalCart}</p>}
             
              </li>
            <li >
              <img src="https://cuerosvelezco.vtexassets.com/arquivos/account02.svg" alt="" />
              
              </li>
        </ul>
      </nav>
    </header>
  );
};
