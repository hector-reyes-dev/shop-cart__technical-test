import React from "react";
import Hero from "@components/Hero";
import Counter from "@components/Counter";
import InfoCard from "@components/InfoCard";
import GridImage from "@components/GridImage";
import Categories from "@components/Categories";
import StepperCards from "@components/StepperCards";
import ProductsRow from "@components/ProductsRow";
import "@styles/Home.scss";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Counter />
        <section className="highlight-row">
          <div className="info-card">
            <InfoCard
              title="Disfruta del Martimiércoles de Chedraui"
              description="Cada martes y miércoles creamos los mejores precios en frutas y verduras para ti y tu familia."
            />
          </div>
          <GridImage
            title="Manzana roja mediana"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Manzana-Roja-0002-E.jpg"
          />
          <GridImage
            title="Mango Ataulfo"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI%20FRESCOS-Mango-Ataulfo-0147-Ec.jpg"
          />
        </section>
        <section className="highlight-row">
          <GridImage
            title="Lechuga romana"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Lechuga-Italiana-0006-E.jpg"
          />
          <GridImage
            title="Papa blanca"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS%20Papa-Blanca-0210-E.jpg"
          />
          <div className="info-card-reverse">
            <InfoCard
              title="Encuentra las mejores frutas y verduras"
              description="Sabemos lo importante que es tener una alimentación balanceada y con alimentos nutritivos."
            />
          </div>
        </section>
        <section className="highlight-row">
          <GridImage
            title="Piña miel"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI%20FRESCOS-Pina-Miel-0021-E.jpg"
          />
          <GridImage
            title="Zanahoria"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Zanahoria-0001-E.jpg"
          />
          <GridImage
            title="Platano Chiapas"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Platano-Chiapas-0067-E.jpg"
          />
          <GridImage
            title="Pepino verde"
            image="https://chedrauimx.vteximg.com.br/arquivos/CHEDRAUI-FRESCOS-Pepino-Verde-0066-E.jpg"
          />
        </section>
        <Categories />
        <h2>4 pasos para mejorar una alimentación saludable</h2>
        <StepperCards />
        <ProductsRow
          title="Descubre lo mejor en frescura"
          category="electronics"
        />
        <ProductsRow
          title="Descubre los mejores productos"
          category="women's clothing"
        />
      </main>
    </>
  );
};

export default Home;
