import React from "react";
import { useHistory, Link } from "react-router-dom";

const Burger = ({ burgerMenu }) => {
  const history = useHistory();
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
