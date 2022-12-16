import React from "react";
import IconCard from "../IconCard";
import "./Categories.scss";

const icons = {
  verdurasIcon: "https://chedrauimx.vteximg.com.br/arquivos/Lacteos.svg",
  carnesIcon: "https://chedrauimx.vteximg.com.br/arquivos/Carnes.svg",
  mariscosIcon: "https://chedrauimx.vteximg.com.br/arquivos/Mariscos.svg",
  lacteosIcon: "https://chedrauimx.vteximg.com.br/arquivos/Lacteos.svg",
};

const Categories = () => {
  return (
    <section className="categories-container">
      <div className="categories-info">
        <h2 className="categories-title">
          Disfruta más productos con precios increíbles
        </h2>
        <button className="primary-btn">Ir al Supermercado</button>
      </div>
      <div className="categories-cards">
        <IconCard category="Frutas y Verduras" icon={icons.verdurasIcon} />
        <IconCard category="Carnes y aves" icon={icons.carnesIcon} />
        <IconCard category="Pescados y mariscos" icon={icons.mariscosIcon} />
        <IconCard category="Lácteos y huevo" icon={icons.lacteosIcon} />
      </div>
    </section>
  );
};

export default Categories;
