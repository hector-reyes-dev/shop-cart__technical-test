import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <h4 className="product-title">{product.title}</h4>
      <h5 className="product-price">${product.price}</h5>
      <button>Agregar</button>
    </article>
  );
};

export default ProductCard;
