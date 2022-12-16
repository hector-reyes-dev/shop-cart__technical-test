import React from "react";
import "./IconCard.scss";

const IconCard = ({ icon, category }) => {
  return (
    <div className="icon-card">
      <img src={icon} alt="Icono de categoría" />
      <p>{category}</p>
    </div>
  );
};

export default IconCard;
