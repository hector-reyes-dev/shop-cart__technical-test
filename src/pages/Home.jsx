import React from "react";
import Hero from "@components/Hero";
import Counter from "@components/Counter";
import "@styles/Home.scss";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Counter />
      </main>
    </>
  );
};

export default Home;
