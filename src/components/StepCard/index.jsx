import React from "react";
import "./StepCard.scss";

const StepCard = ({ id, title, image, color }) => {
  return (
    <article className={`card-container ${color}`}>
      <span className="card-number">{id}</span>
      <img src={image} alt="Producto Destacado" />
      <h3 className="card-title">{title}</h3>
    </article>
  );
};

export default StepCard;
