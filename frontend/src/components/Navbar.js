import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/home">Strona główna</Link>
      </li>
      <li>
        <Link to="/game">Gra</Link>
      </li>
      <li>
        <Link to="/scoreboard">Najlepsze wyniki</Link>
      </li>
    </ul>
  );
};

export default Navbar;
