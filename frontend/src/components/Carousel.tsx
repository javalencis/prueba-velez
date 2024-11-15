import React, { useContext, useState } from "react";
import "../styles/Carousel.css";
import { formatPrice } from "../utils/functions";
import { Product } from "../interfaces";
import { addProductCart } from "../services/addProductCart";
import { AppContext, AppContextType } from "../context/AppContext";



interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3;
  const maxIndex = Math.min(products.length, 6) - visibleItems;
  const {setProductsCart} = useContext(AppContext) as AppContextType

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 3
    );
  };

  const handleAddProductCart = (product:Product) =>{
    setProductsCart((products:Product[]) => [...products,product])
    addProductCart(product)

  }

  return (
    <div className="Carousel">
      <button onClick={handlePrev} disabled={currentIndex=== 0} className="Carousel-button prev">
        &lt;
      </button>
      <div className="Carousel-track-container">
        <div
          className="Carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {products.slice(0, 6).map((product) => (
            <div className="Carousel-item" key={product.productId}>
              <img src={product.imageUrl} alt={product.productName} />
              <div className="item-info">
                <div>
                  <h3>{product.productName}</h3>
                  <p>{formatPrice(product.price)}</p>
                </div>
                <div className="item-addcart" onClick={()=>handleAddProductCart(product)}>
                  <img
                    src="https://cuerosvelezco.vtexassets.com/arquivos/miniCart2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} disabled={currentIndex=== maxIndex} className="Carousel-button next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
