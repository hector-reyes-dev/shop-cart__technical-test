import React from "react";
import "./InfoCard.scss";

const InfoCard = ({ title, description }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default InfoCard;
