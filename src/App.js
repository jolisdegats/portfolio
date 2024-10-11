import React from "react";
import "./styles/style.css";
import avatar from "./img/avatar.png";

const App = () => {
  return (
    <div className="App">
      <div className="coming-soon">
        <img
          src={avatar}
          alt="Anime-style avatar"
          className="coming-soon__background"
        />
        <h1 className="coming-soon__text">Will be back soon...</h1>
        <div className="coming-soon__glitch-effect"></div>
      </div>
    </div>
  );
};

export default App;
