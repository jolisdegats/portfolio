import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ListItemProject = ({ elem, index }) => {
  const [imageHover, setImageHover] = useState(false);
  const history = useHistory();

  return (
    <div
      key={index}
      className="projects-list-item"
      onClick={() => history.push(`/projects/${elem.idName}`, { item: elem })}
      onMouseEnter={() => setImageHover(true)}
      onMouseLeave={() => setImageHover(false)}
    >
      <img
        src={
          imageHover === true
            ? elem.gif !== ""
              ? elem.gallery[elem.gallery.length]
              : // ? `./assets/projets/${elem.gif}.gif`
                elem.gallery[0]
            : elem.gallery[0]
        }
        alt=""
      />
    </div>
  );
};

export default ListItemProject;
