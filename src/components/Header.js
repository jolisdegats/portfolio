import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import logo from "../img/logo.png";

const Header = () => {
  const history = useHistory();
  const [burgerMenu, setBurgerMenu] = useState(true);
  return (
    <header>
      <img src={logo} alt="logo" onClick={() => history.push("/")} />
      <BurgerMenu burgerMenu={burgerMenu}></BurgerMenu>
      <div
        className={burgerMenu ? "nav-icon4 open" : "nav-icon4"}
        onClick={() => setBurgerMenu(!burgerMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
