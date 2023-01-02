import React from "react";
import Countdown from "react-countdown";
import "./Counter.scss";

const Counter = () => {
  const date = new Date(2023, 0, 3);
  const CompletionComponent = () => (
    <span className="countdown">¡Las ofertas han comenzado!</span>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return <CompletionComponent />;

    return (
      <span className="countdown">
        {days} días. {hours} h. {minutes} m. {seconds} s.
      </span>
    );
  };

  return (
    <section className="counter-container">
      <h2 className="counter-title">Descubre nuevas ofertas en</h2>
      <Countdown date={date} renderer={renderer} />
    </section>
  );
};

export default Counter;
