import React from "react";
import { Link } from "react-router-dom";

const Burger = ({ burgerMenu }) => {
  return (
    <div className={burgerMenu ? "burger shown" : "burger hidden"}>
      <nav>
        <Link to="/">Hi !</Link>
        <Link to="/a-propos">A propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Burger;
