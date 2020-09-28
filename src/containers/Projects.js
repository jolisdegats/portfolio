import React from "react";
import _ from "lodash";
import data from "../json/portfolioData.json";
import todo from "../json/todoData.json";
import ListItemProject from "../components/ListItemProject";

const Projects = () => {
  let todoList = _.sortBy(todo, ["status", "date"]);

  return (
    <main className="projects">
      <div className="projectsBlock">
        <h1>Mes projets</h1>
        <div className="projectsList">
          {data.map((elem, index) => {
            return <ListItemProject elem={elem} key={index}></ListItemProject>;
          })}
        </div>
        <p>
          Voir tous mes projets sur mon{" "}
          <span
            onClick={() =>
              window.open("https://github.com/jolisdegats", "_blank")
            }
          >
            Github
          </span>
        </p>
      </div>
      <div className="todoListBlock">
        <h2>PROJETS EN COURS ET IDEES</h2>
        <ul className="todoList">
          {todoList.map((elem, index) => {
            return (
              <li
                key={index}
                className={elem.status === true ? "taskDone" : "taskTodo"}
              >
                <div className="taskTitle">
                  <span>{elem.title}</span>
                </div>
                <div>
                  <span style={{ fontStyle: "italic" }}>{elem.project}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
