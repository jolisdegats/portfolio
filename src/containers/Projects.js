import React, { useEffect, useState, lazy } from "react";
import { client } from "../App";
import Loader from "../components/Loader";

// import ListItemProject from "../components/ListItemProject";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);
  const [todo, setTodo] = useState([]);

  const ListItemProject = lazy(() => import("../components/ListItemProject"));

  useEffect(() => {
    client
      .getEntries({
        content_type: "portfolioItem",
        order: "fields.order",
      })
      .then((response) => setPortfolio(response.items))
      .catch(console.error);

    client
      .getEntries({
        content_type: "toDo",
        order: "fields.order",
        include: 2,
      })
      .then((response) => setTodo(response.items))
      .catch(console.error);

    setIsLoading(false);
  }, []);

  return (
    <main className="projects">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="projectsBlock">
            <h1>Mes projets</h1>
            <div className="projectsList">
              {portfolio.map((elem, index) => {
                return (
                  <ListItemProject
                    elem={elem.fields}
                    key={index}
                  ></ListItemProject>
                );
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
              {todo.map((elem, index) => {
                const { project, status, title } = elem.fields;

                let projectTitle = project?.fields.title || "TBC";

                return (
                  <li key={index} className={status ? "taskDone" : "taskTodo"}>
                    <div className="taskTitle">
                      <span>{title}</span>
                    </div>
                    <div>
                      <span style={{ fontStyle: "italic" }}>
                        {projectTitle}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </main>
  );
};

export default Projects;
