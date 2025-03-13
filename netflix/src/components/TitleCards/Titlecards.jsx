import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const Titlecards = () => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY * 2; // Improved scroll speed
  };

  useEffect(() => {
    const currentRef = cardsRef.current; // Correct reference definition
    currentRef.addEventListener("wheel", handleWheel);

    return () => currentRef.removeEventListener("wheel", handleWheel); // Cleanup
  }, []);

  return (
    <div className="Title-Cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Titlecards;
