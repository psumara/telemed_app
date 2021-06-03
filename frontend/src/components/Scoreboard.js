import { useState, useEffect } from "react";
import "./Scoreboard.css";

const Scoreboard = () => {
  const [bestResult, setBestResult] = useState([0]);

  useEffect(() => {
    fetch("best_results")
      .then((res) => res.json())
      .then((data) => {
        setBestResult(data);
      });
  }, []);
  return (
    <div className="scoreboard">
      Najlepsze wyniki:
      {bestResult.map((score, index) => (
        <p className="scores" key={index}>
          {index + 1}: {score.Score}
        </p>
      ))}
      <a href="/home">
        <button className="home_button">Home</button>
      </a>
    </div>
  );
};

export default Scoreboard;
