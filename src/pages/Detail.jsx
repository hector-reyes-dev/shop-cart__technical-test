import React from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

const Detail = () => {
  let { id } = useParams();
  const API = `https://fakestoreapi.com/products/${id}`;

  const product = useGetProducts(API);

  return (
    <h1>
      Detail Works! {id} {console.log(product)}
    </h1>
  );
};

export default Detail;
