import React from "react";
import "../styles/Footer.css";
export const Footer: React.FC = () => {
  return (
    <footer className="FooterSection">
      <div className="FooterSocial">
        <img
          src="https://cuerosvelezco.vtexassets.com/assets/vtex/assets-builder/cuerosvelezco.storetheme/1.0.17/svgs/home/outline-instagram___617fd1332ff0715da96f9446696122f7.svg"
          alt="Instagram"
        />
        <img
          src="https://cuerosvelezco.vtexassets.com/assets/vtex/assets-builder/cuerosvelezco.storetheme/1.0.17/svgs/home/outline-facebook___6e1615d55aac55794435fe8d695c0a7e.svg"
          alt="Facebook"
        />
        <img
          src="https://cuerosvelezco.vtexassets.com/assets/vtex/assets-builder/cuerosvelezco.storetheme/1.0.17/svgs/home/outline-tiktok___572da0db9892477e37214a7a21ae0490.svg"
          alt="TikTok"
        />
        <img
          src="https://cuerosvelezco.vtexassets.com/assets/vtex/assets-builder/cuerosvelezco.storetheme/1.0.17/svgs/home/outline-youtube___263827c4c87b0364f40c7d6f68fefab5.svg"
          alt="Youtube"
        />
        <img
          src="https://cuerosvelezco.vtexassets.com/assets/vtex/assets-builder/cuerosvelezco.storetheme/1.0.17/svgs/home/outline-linkedin___420948e38707c9909ee65de29cdbca49.svg"
          alt="Linkedin"
        />
        <img
          src="https://cuerosvelezco.vtexassets.com/assets/vtex/assets-builder/cuerosvelezco.storetheme/1.0.17/svgs/home/outline-pinterest___fcd9ac31e61143fec4a187d0bdc23098.svg"
          alt="Pinterest"
        />
      </div>
      <div className="FooterCopy">
        <p>
          Producto hecho a mano, uno a uno, con alma, con <br /> historia, por
          valoramos la esencia de lo artesanal
        </p>
      </div>
      <div className="FooterLegales">
        <p>@Copyright</p>
        <img src="https://cuerosvelezco.vtexassets.com/arquivos/logo-sic.png" alt="" />
      </div>
    </footer>
  );
};
