import React from "react";
import useGetProducts from "@hooks/useGetProducts";
import ProductCard from "@components/ProductCard";
import "./ProductsRow.scss";

const ProductsRow = ({ title, category }) => {
  const API = `https://fakestoreapi.com/products/category/${category}?limit=6`;

  const products = useGetProducts(API);

  return (
    <>
      <h2 className="section-title">{title}</h2>
      <section>
        {console.log(products)}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default ProductsRow;
