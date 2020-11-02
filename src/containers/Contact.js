import React from "react";
import walkingGif from "../img/gif-anime-julie-marche.gif";
import { LoadImage } from "../components/LoadImage";
import sensCritiqueLogo from "../img/icons/sensCritiqueLogo.jpg";
import githubLogo from "../img/icons/githubLogo.png";
import linkedinLogo from "../img/icons/linkedinLogo.png";

const Contact = () => {
  return (
    <main className="contactContent">
      <LoadImage src={walkingGif} alt="walking-gif" />
      <div>
        <h1>Pour me joindre</h1>
        <br />
        <p>
          Envoyez-moi un email à : <span>szwarc.julie(at)gmail.com</span>
        </p>
        <h2>Ou retrouvez moi sur :</h2>
        <div className="contactSites">
          <img
            src={linkedinLogo}
            alt="Linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/julieszwarc", "_blank")
            }
          />
          <img
            src={githubLogo}
            alt="Github"
            onClick={() =>
              window.open("https://github.com/jolisdegats", "_blank")
            }
          />
          <img
            src={sensCritiqueLogo}
            alt="SensCritique"
            onClick={() =>
              window.open("https://www.senscritique.com/Jolisdegats", "_blank")
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
