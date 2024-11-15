import React from "react";
import '../styles/Header.css'
export const Header: React.FC = () => {
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
            <li><img src="https://cuerosvelezco.vtexassets.com/arquivos/miniCart2.svg" alt="" /></li>
            <li><img src="https://cuerosvelezco.vtexassets.com/arquivos/account02.svg" alt="" /></li>
        </ul>
      </nav>
    </header>
  );
};
