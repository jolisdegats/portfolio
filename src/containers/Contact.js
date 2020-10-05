import React from "react";
import walkingGif from "../img/gif-anime-julie-marche.gif";
import { LoadImage } from "../components/LoadImage";

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
          <LoadImage
            src="https://www.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
            alt="Linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/julieszwarc", "_blank")
            }
          />
          <LoadImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
            alt="Github"
            onClick={() =>
              window.open("https://github.com/jolisdegats", "_blank")
            }
          />
          <LoadImage
            src="https://pbs.twimg.com/profile_images/905010874729066496/lJgq0y4u.jpg"
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
