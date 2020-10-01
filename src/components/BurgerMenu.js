import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Burger = ({ burgerMenu, setBurgerMenu }) => {
  return (
    <div className="burger">
      <nav
        className={
          burgerMenu === true
            ? "shown"
            : burgerMenu === false
            ? "hidden"
            : "onLoad"
        }
      >
        <Link onClick={() => isMobile && setBurgerMenu(false)} to="/">
          Hi !
        </Link>
        <Link onClick={() => isMobile && setBurgerMenu(false)} to="/a-propos">
          A propos
        </Link>
        <Link onClick={() => isMobile && setBurgerMenu(false)} to="/projects">
          Projets
        </Link>
        <Link onClick={() => isMobile && setBurgerMenu(false)} to="/contact">
          Contact
        </Link>
      </nav>
      <div className="icon">
        <div
          className={burgerMenu === true ? "nav-icon4 open" : "nav-icon4"}
          onClick={() =>
            burgerMenu === true || burgerMenu === false
              ? setBurgerMenu(!burgerMenu)
              : setBurgerMenu(true)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Burger;
