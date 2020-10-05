import React from "react";
import { LoadImageWithLoader } from "../components/LoadImage";
import { getLink } from "../functions/getLink";

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div>
        {skills.map((elem, index) => {
          return (
            <div key={index}>
              <div>
                <LoadImageWithLoader
                  src={getLink(elem.fields.image)}
                  alt={elem.fields.title}
                />
              </div>
              <p>{elem.fields.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
