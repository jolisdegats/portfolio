import React, { useState, useEffect } from "react";
import "react-lazy-load-image-component/src/effects/opacity.css";

const loader = "https://www.actualitte.com/styles/gfx/spinner.gif";

export const LoadImage = (image) => {
  const [isLoading, setIsLoading] = useState(true);
  const [source, setSource] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => setSource(image.src) & setIsLoading(false);
  }, [image]);

  // return isLoading ? (
  //   <img src={loader} alt={image.alt} className="imgLoaded" />
  // ) : (
  return (
    !isLoading && <img src={source} alt={image.alt} className="imgLoaded" />
  );
};

export const LoadImageWithLoader = (image) => {
  const [isLoading, setIsLoading] = useState(true);
  const [source, setSource] = useState(loader);

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => setSource(image.src) & setIsLoading(false);
  }, [image]);

  return isLoading ? (
    <img src={loader} alt={image.alt} className="imgLoaded" />
  ) : (
    <img src={source} alt={image.alt} className="imgLoaded" />
  );
};

export const LoadImageBackground = (image) => {
  const [isLoading, setIsLoading] = useState(true);
  const [source, setSource] = useState(loader);

  const height = 230 + Math.ceil(Math.random() * 200);

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => setSource(image.src) & setIsLoading(false);
  }, [image]);

  // return ( isLoading  ? (
  //   <div
  //     className={image.className}
  //     style={{ backgroundImage: `url(${loader})`, height: `${height}px` }}
  //   ></div>
  // ) : (
  return (
    !isLoading && (
      <div
        databefore={image.databefore}
        className={image.className + " imgLoaded"}
        style={{ backgroundImage: `url(${source})`, height: `${height}px` }}
      ></div>
    )
  );
};

export const LazyGallery = ({
  className,
  myGallery,
  galleryItem,
  setGalleryItem,
  onClick,
}) => {
  const [source, setSource] = useState(loader);
  useEffect(() => {
    const img = new Image();
    img.src = myGallery[galleryItem];
    img.onload = () => setSource(myGallery[galleryItem]);
  }, [galleryItem, myGallery, setGalleryItem]);

  return (
    <div
      onClick={onClick}
      className={className + " imgLoaded"}
      style={{ backgroundImage: `url(${source})` }}
    >
      <div>
        <button
          onClick={(event) => {
            return (
              event.stopPropagation(),
              galleryItem !== 0
                ? setGalleryItem(galleryItem - 1)
                : setGalleryItem(myGallery.length - 1)
            );
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
            galleryItem === myGallery.length - 1
              ? setGalleryItem(0)
              : setGalleryItem(galleryItem + 1);
          }}
        >
          ⮞
        </button>
      </div>
    </div>
  );
};
