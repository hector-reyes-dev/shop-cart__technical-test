import React from "react";
import Hero from "@components/Hero";
import Counter from "@components/Counter";
import InfoCard from "@components/InfoCard";
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
        </section>
      </main>
    </>
  );
};

export default Home;
