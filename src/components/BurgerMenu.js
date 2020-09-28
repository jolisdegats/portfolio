import React from "react";
import { useHistory } from "react-router-dom";

const Burger = ({ burgerMenu }) => {
  const history = useHistory();
  return (
    <div className={burgerMenu ? "burger shown" : "burger hidden"}>
      <nav>
        <div onClick={() => history.push("/")}>Hi !</div>
        <div onClick={() => history.push("/a-propos")}>A propos</div>
        <div onClick={() => history.push("/projects")}>Projets</div>
        <div onClick={() => history.push("/contact")}>Contact</div>
      </nav>
    </div>
  );
};

export default Burger;
