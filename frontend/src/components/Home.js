import "./Home.css";
import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <p className="description">
        Zmierz swój czas reakcji na pojawiające się obrazki! Czy uda Ci się
        pobić rekord?
      </p>

      <Link to="/game">
        <button className="button">Przejdź do gry</button>
      </Link>
    </React.Fragment>
  );
};

export default Home;
