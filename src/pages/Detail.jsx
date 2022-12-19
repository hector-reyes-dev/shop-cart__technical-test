import React from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";
import ProductsRow from "@components/ProductsRow";
import "@styles/Detail.scss";

const Detail = () => {
  let { id } = useParams();
  const API = `https://fakestoreapi.com/products/${id}`;

  const product = useGetProducts(API);

  return (
    <>
      <main className="product-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src={product.image}
            alt={`Imágen de ${product.title}`}
          />
        </div>
        <section className="product-info-container">
          <div>
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.title}</h1>
            <div className="product-rating-container">
              <h3 className="product-rate">
                {product.rating?.rate} <span>/ 5</span>
              </h3>
              <p>Reviews: {product.rating?.count}</p>
            </div>
          </div>
          <p className="product-description">
            {product.description} - <span>ID: {product.id}</span>
          </p>
          <div className="product-price-container">
            <h2 className="product-price">${product.price} MXN</h2>
          </div>
          <div className="product-buttons-container">
            <button className="btn-secondary">Agregar a la bolsa</button>
            <button className="btn-primary">Comprar ahora</button>
          </div>
        </section>
      </main>
      <ProductsRow
        title="Productos Recomendados"
        category={product?.category || "electronics"}
      />
    </>
  );
};

export default Detail;
