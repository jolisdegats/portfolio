import React, { useEffect, useState } from "react";
import loadable from "loadable-components";
import Loader from "../components/Loader";
// import Skills from "../components/Skills";
import HobbiesMasonry from "../components/HobbiesMasonry";
import { isMobile } from "react-device-detect";
import { client } from "../App";

import { LoadImageBackground } from "../components/LoadImage";
import { getLink } from "../functions/getLink";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifs, setGifs] = useState([]);
  const [skills, setSkills] = useState([]);

  const Skills = loadable(() => import("../components/Skills"));

  useEffect(() => {
    client
      .getEntries({
        content_type: "lifestyle",
        order: "fields.order",
      })
      .then((response) => setGifs(response.items))
      .catch(console.error);

    client
      .getEntries({
        content_type: "skills",
        order: "fields.order",
      })
      .then((response) => setSkills(response.items))
      .catch(console.error);

    setIsLoading(false);
  }, []);

  let col = 0;
  isMobile ? (col = 1) : (col = 3);

  return (
    <main className="about">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="description">
            <hr />
            <p className="status">
              Je cherche un stage/poste de développeur web JS,
              Fullstack/Frontend/Backend <br />
              <span>(mais si tu as lu la homepage tu le sais déjà)</span>.
            </p>
            <hr />
            <div>
              <p>
                A 4 ans, j’ai reçu mon premier ordinateur. Je l'adorais et je
                l’emmenais partout où j'allais. Et je crois que cette idée ne
                m’a jamais vraiment quittée puisque 25 ans plus tard, je
                reprenais une formation de développeur web pour en faire mon
                nouveau métier...
              </p>
              <p>
                Avant d'en arriver là, j'ai travaillé plusieurs années en
                PME/startup à des postes de Marketing et Stratégie. C'était
                chouette, mais j'en étais arrivée à un moment de ma carrière où
                j'avais besoin de vibrer à nouveau dans mon métier. C'est là que
                le code s'est imposé !
              </p>

              <p className="linkToProfile">
                Envie d'en savoir un peu plus ? On se retrouve sur{" "}
                <span
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/julieszwarc",
                      "_blank"
                    )
                  }
                >
                  Linkedin
                </span>
              </p>
            </div>
          </div>
          <Skills skills={skills} fallback={<Loader></Loader>}></Skills>

          <HobbiesMasonry columns={col} gap={25} hobbies={gifs}>
            {gifs.map((elem, index) => {
              return (
                <LoadImageBackground
                  className="itemHobbies"
                  key={index}
                  src={getLink(elem.fields.image)}
                  databefore={elem.fields.title}
                ></LoadImageBackground>
              );
            })}
          </HobbiesMasonry>
        </>
      )}
    </main>
  );
};

export default About;
