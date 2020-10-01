import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import logo from "../img/logo.png";
import { isMobile } from "react-device-detect";

const Header = () => {
  const history = useHistory();
  let menuOpened;
  isMobile ? (menuOpened = "load") : (menuOpened = true);
  const [burgerMenu, setBurgerMenu] = useState(menuOpened);

  useEffect(() => {
    if (isMobile === true && burgerMenu === false) {
      setTimeout(() => {
        setBurgerMenu("load");
      }, 100);
    }
  }, [setBurgerMenu, burgerMenu]);

  return (
    <header>
      <img src={logo} alt="logo" onClick={() => history.push("/")} />
      <BurgerMenu
        burgerMenu={burgerMenu}
        setBurgerMenu={setBurgerMenu}
      ></BurgerMenu>
    </header>
  );
};

export default Header;
