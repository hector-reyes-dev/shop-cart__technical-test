import React from "react";
import "./GridImage.scss";

const GridImage = ({ title, image }) => {
  return (
    <article
      className="grid-image-container"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h3>{title}</h3>
    </article>
  );
};

export default GridImage;
