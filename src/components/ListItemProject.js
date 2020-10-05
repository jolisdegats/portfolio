import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getLink } from "../functions/getLink";
import { LoadImage } from "./LoadImage";

const ListItemProject = ({ elem, index }) => {
  const history = useHistory();
  const [imageHover, setImageHover] = useState(false);
  const { idName, gif, thumbnail, title } = elem;

  return (
    <div
      key={index}
      className="projects-list-item"
      onClick={() => history.push(`/projects/${idName}`, { item: elem })}
    >
      <div
        className="imgLoaded"
        style={
          imageHover
            ? { backgroundImage: `url(${getLink(gif)}` }
            : { opacity: 0 }
        }
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
      ></div>
      <LoadImage src={getLink(thumbnail)} alt={title} />
    </div>
  );
};

export default ListItemProject;
