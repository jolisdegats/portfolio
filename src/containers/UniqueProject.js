import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import parse from "html-react-parser";
import { LazyGallery } from "../components/LoadImage";
import { getExternalItem } from "../functions/getExternalItem";

const UniqueProject = () => {
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [myGallery, setMyGallery] = useState([]);
  const [galleryItem, setGalleryItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState([]);

  const {
    title,
    category,
    duration,
    demo,
    soloOrTeam,
    stack,
    gallery,
    features,
    gif,
    githubFrontend,
    githubBackend,
    description,
    furtherDevelopment,
    noteStripe,
  } = item;

  const getRichText = (doc, title) => {
    return (
      <>
        <h2>{title}</h2>
        {parse(documentToHtmlString(doc))}
      </>
    );
  };

  const generateGitLink = (link, str) => {
    return (
      <button src={link} className="gitLink">
        <span>{str}</span>
      </button>
    );
  };

  useEffect(() => {
    const getItem = async (location) => {
      let response =
        location.state?.item || (await getExternalItem(location.pathname));
      setItem(response);
      return response;
    };
    getItem(location);
  }, [location]);

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      const initializeGallery = (gal) => {
        let arr = [];
        gif && gal.push(gif);

        gal.map(async (elem, index) => {
          arr.push(elem.fields.file.url);
        });

        return setMyGallery(arr);
      };
      initializeGallery(item.gallery);
      setIsLoading(false);
    }
  }, [gallery, gif, item]);

  return (
    <main className="unique-project-content">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="headerContentBlock">
            <button
              onClick={() => history.push("/projects")}
              className="backToProjects"
            >
              ◂ Retour aux projets
            </button>
            <br />
            <h1>{title}</h1>
            {isOpen && (
              <Lightbox
                mainSrc={myGallery[galleryItem]}
                nextSrc={myGallery[(galleryItem + 1) % myGallery.length]}
                prevSrc={
                  gallery[
                    (galleryItem + myGallery.length - 1) % myGallery.length
                  ]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setGalleryItem(
                    (galleryItem + myGallery.length - 1) % myGallery.length
                  )
                }
                onMoveNextRequest={() =>
                  setGalleryItem((galleryItem + 1) % myGallery.length)
                }
              />
            )}

            <LazyGallery
              className="backgroundImageGallery"
              myGallery={myGallery}
              galleryItem={galleryItem}
              setGalleryItem={setGalleryItem}
              onClick={() => setIsOpen(!isOpen)}
            ></LazyGallery>
          </div>

          <div className="projectContentBlock">
            <div className="projectInfos">
              <div>
                <h2>CATEGORIE</h2>
                <p>{category}</p>
              </div>
              <div>
                <h2>PROJET</h2>
                <p>
                  {soloOrTeam[0].toUpperCase() +
                    soloOrTeam.substring(1).toLowerCase()}
                </p>
              </div>
              <div>
                <h2>DUREE</h2>
                <p>{duration}</p>
              </div>
            </div>

            <div className="projectDescription">
              {getRichText(description)}

              <div className="demoLinkBlock">
                {demo.map((elem, index) => {
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
                          admin : {elem.login.admin} <br /> mdp :{" "}
                          {elem.login.mdp}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
              {features && getRichText(features, "Features :")}

              {noteStripe && (
                <p className="noteStripe">
                  NOTE : Stripe est en mode test dans cette application. Pour
                  valider un paiement, utilisez les informations suivantes :
                  <br />
                  Numéro de carte : 4242424242424242 / Date : 04/24 / CVC : 242
                  / Code Postal : 75000
                </p>
              )}
              {furtherDevelopment &&
                getRichText(furtherDevelopment, "Futurs développements :")}

              <h2>Stack :</h2>
              <p>{stack}</p>

              <h2>Code du projet :</h2>
              <div className="buttonsBlock">
                {generateGitLink(githubFrontend, "Frontend")}
                {generateGitLink(githubBackend, "Backend")}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default UniqueProject;
