import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const UniqueProject = () => {
  const location = useLocation();
  const history = useHistory();
  const [galleryItem, setGalleryItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const item = location.state.item;

  useEffect(() => {
    item.gif !== "" && item.gallery.push(item.gif);
  }, [item.gallery, item.gif]);

  const parsing = (arr) => {
    let str = [];
    let title = "";
    let bal;
    if (arr === item.features) {
      title = "Features :";
    } else if (arr === item.furtherDev) {
      title = "Futurs développements :";
    }

    str.push(<h2 key={0}>{title}</h2>);
    arr.map((elem, index) => {
      if (elem.type === "paragraph") {
        bal = <p key={index + 1}>{elem.content}</p>;
      } else if (elem.type === "list") {
        bal = (
          <ul key={index + 1}>
            {elem.content.map((listItem, index) => {
              return <li key={index}>{listItem.content}</li>;
            })}
          </ul>
        );
      } else {
        bal = <br key={index + 1} />;
      }
      return str.push(bal);
    });

    return str;
  };

  return (
    <main className="unique-project-content">
      <div className="headerContentBlock">
        <button onClick={history.goBack} className="backToProjects">
          ◂ Retour aux projets
        </button>
        <br />
        <h1>{item.title}</h1>
        {isOpen && (
          <Lightbox
            mainSrc={item.gallery[galleryItem]}
            nextSrc={item.gallery[(galleryItem + 1) % item.gallery.length]}
            prevSrc={
              item.gallery[
                (galleryItem + item.gallery.length - 1) % item.gallery.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setGalleryItem(
                (galleryItem + item.gallery.length - 1) % item.gallery.length
              )
            }
            onMoveNextRequest={() =>
              setGalleryItem((galleryItem + 1) % item.gallery.length)
            }
          />
        )}
        <div
          className="backgroundImageGallery"
          style={{
            backgroundImage: `url(${item.gallery[galleryItem]})`,
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <button
              onClick={(event) => {
                event.stopPropagation();
                galleryItem === 0
                  ? setGalleryItem(item.gallery.length - 1)
                  : setGalleryItem(galleryItem - 1);
              }}
            >
              ⮜
            </button>
          </div>
          <div></div>
          <div>
            <button
              onClick={(event) => {
                event.stopPropagation();
                galleryItem === item.gallery.length - 1
                  ? setGalleryItem(0)
                  : setGalleryItem(galleryItem + 1);
              }}
            >
              ⮞
            </button>
          </div>
        </div>
      </div>

      <div className="projectContentBlock">
        <div className="projectInfos">
          <div>
            <h2>CATEGORIE</h2>
            <p>{item.category}</p>
          </div>
          <div>
            <h2>PROJET</h2>
            <p>
              {item.soloOrTeam[0].toUpperCase() +
                item.soloOrTeam.substring(1).toLowerCase()}
            </p>
          </div>
          <div>
            <h2>DUREE</h2>
            <p>{item.duration}</p>
          </div>
        </div>

        <div className="projectDescription">
          {item.description && parsing(item.description)}

          <div className="demoLinkBlock">
            {item.demo.map((elem, index) => {
              return (
                <div key={index}>
                  <button
                    className="demoLink"
                    onClick={() => window.open(elem.demoLink, "_blank")}
                  >
                    <span>{elem.text}</span>
                  </button>
                  {elem.login && (
                    <p>
                      admin : {elem.login.admin} <br /> mdp : {elem.login.mdp}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {item.features && parsing(item.features)}

          {item.furtherDev && parsing(item.furtherDev)}

          <h2>Stack :</h2>
          <p>
            {item.stack.map((elem, index) => {
              return <span key={index}>{elem}, </span>;
            })}
          </p>

          <h2>Code du projet :</h2>
          <div className="buttonsBlock">
            {item.github.map((elem, index) => {
              return (
                <button
                  key={index}
                  className="gitLink"
                  onClick={() => window.open(elem.link, "_blank")}
                >
                  <span>{elem.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UniqueProject;
