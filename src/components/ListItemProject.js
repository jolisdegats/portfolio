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
              ? elem.gif
              : elem.thumbnail
            : elem.thumbnail
        }
        alt={elem.title}
      />
    </div>
  );
};

export default ListItemProject;
