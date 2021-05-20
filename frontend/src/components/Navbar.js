import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/game">Game</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default Navbar;
