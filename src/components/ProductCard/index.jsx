import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <Link to={`product/${product.id}`}>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <h4 className="product-title">{product.title}</h4>
      <h5 className="product-price">${product.price}</h5>
      <Link to={`product/${product.id}`}>
        <button>Agregar</button>
      </Link>
    </article>
  );
};

export default ProductCard;
