import React from "react";
import skills from "../json/skillsData.json";
import HobbiesMasonry from "../components/HobbiesMasonry";

const About = () => {
  const hobbies = [
    {
      link:
        "https://mediatheques.villeurbanne.fr/wp-content/upload/2017/01/thumbs-up.gif",
      title: "Mon gif favori, ever !",
    },
    {
      link:
        "https://res.cloudinary.com/dqp905mfv/image/upload/v1601277902/portfolio/About-hobbies-pictures/120330529_344897666861355_6503512824693837000_n_pnv7dm.jpg",
      title: "Camargue",
    },
    {
      link:
        "https://media1.tenor.com/images/031ad7a8c9f59f91d408700f55d16175/tenor.gif?itemid=15044388",
      title: "Quand je tente de convaincre mes copains de regarder un Anime",
    },
    {
      link:
        "https://res.cloudinary.com/dqp905mfv/image/upload/v1601277902/portfolio/About-hobbies-pictures/120285692_324584665280287_6763674525695652168_n_prrudz.jpg",
      title: "Tenerife",
    },
    {
      link:
        "https://media3.giphy.com/media/9G3wg7lH5DpxC/giphy-downsized-large.gif",
      title: "Quand je dis que je suis geek... et qu'on ne me croit pas !",
    },
    {
      link:
        "https://res.cloudinary.com/dqp905mfv/image/upload/v1601277902/portfolio/About-hobbies-pictures/120284155_2722970374650806_1379749601176669398_n_zabe8k.jpg",
      // "https://res.cloudinary.com/dqp905mfv/image/upload/v1601277902/portfolio/About-hobbies-pictures/120344995_417976972530351_1109769379929694802_n_suhvu7.jpg",
      title: "Lanzarote",
    },
    {
      link: "https://zeldaenfrancais.files.wordpress.com/2018/04/ieqwxbv.gif",
      title: "Quand j'essaie de cuisiner des légumes",
    },

    {
      link:
        "https://res.cloudinary.com/dqp905mfv/image/upload/v1601278147/portfolio/About-hobbies-pictures/120198818_345706810106213_7572347602928500460_n_kpo67k.jpg",
      title: "Thailande",
    },

    {
      link: "http://ekladata.com/oOQ1GjB-fMPFVJjRrezye-uijaE@400x219.gif",
      title: "Moi, tentant d'optimiser mon temps de vie",
    },
  ];

  return (
    <main className="about">
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
            l’emmenais partout où j'allais. Et je crois que cette idée ne m’a
            jamais vraiment quittée puisque 25 ans plus tard, je reprenais une
            formation de développeur web pour en faire mon nouveau métier...
          </p>
          <p>
            Avant d'en arriver là, j'ai travaillé plusieurs années en
            PME/startup à des postes de Marketing et Stratégie. C'était
            chouette, mais j'en étais arrivée à un moment de ma carrière où
            j'avais besoin de vibrer à nouveau dans mon métier. C'est là que le
            code s'est imposé !
          </p>

          <p className="linkToProfile">
            Envie d'en savoir un peu plus ? On se retrouve sur{" "}
            <span
              onClick={() =>
                window.open("https://www.linkedin.com/in/julieszwarc", "_blank")
              }
            >
              Linkedin
            </span>
          </p>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div>
          {skills.map((elem, index) => {
            return (
              <div key={index}>
                <div>
                  <img src={elem.img} alt={elem.title} />
                </div>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hobbies">
        <h2>Hobbies</h2>
        <div className="masonry">
          <HobbiesMasonry columns={3} gap={25} hobbies={hobbies}>
            {hobbies.map((elem, key) => {
              const height = 200 + Math.ceil(Math.random() * 200);

              return (
                <div
                  className="itemHobbies"
                  key={key}
                  style={{
                    height: `${height}px`,
                    backgroundImage: `url(${elem.link})`,
                  }}
                  data-before={elem.title}
                ></div>
              );
            })}
          </HobbiesMasonry>
        </div>
      </div>
    </main>
  );
};

export default About;
