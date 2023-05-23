import React, { useEffect, useState } from "react";
import data from "./data";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

 /*  console.log(index); */
  return (
    <div className="section">
      <div className="title">
        <span>نظرات مشتریان</span>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, qoute } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="qoute">{qoute}</p>
            </article>
          );
        })}
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaAngleRight />
        </button>
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaAngleLeft />
        </button>
      </div>
    </div>
  );
}

export default App;
