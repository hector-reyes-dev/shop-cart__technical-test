import React from "react";
import StepCard from "../StepCard";
import "./StepperCards.scss";

const cards = [
  {
    id: 1,
    title: "Fija un estilo para comer",
    image: "https://chedrauimx.vteximg.com.br/arquivos/img-Paso%201.png",
    color: "red",
  },
  {
    id: 2,
    title: "Incluye macro nutrientes",
    image: "https://chedrauimx.vteximg.com.br/arquivos/img-Paso%202.png",
    color: "green",
  },
  {
    id: 3,
    title: "Haz 5 comidas al día",
    image: "https://chedrauimx.vteximg.com.br/arquivos/img-Paso%204.png",
    color: "orange",
  },
  {
    id: 4,
    title: "Toma 2 litros de agua",
    image: "https://chedrauimx.vteximg.com.br/arquivos/img-Paso%203.png",
    color: "white",
  },
];

const StepperCards = () => {
  return (
    <section>
      {cards.map(({ id, title, image, color }) => (
        <StepCard id={id} title={title} image={image} color={color} />
      ))}
    </section>
  );
};

export default StepperCards;
