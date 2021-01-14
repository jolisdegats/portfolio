import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/style.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { createClient } from "contentful";
// import About from "./containers/About";
// import Contact from "./containers/Contact";
// import Homepage from "./containers/Homepage";
// import Projects from "./containers/Projects";
// import UniqueProject from "./containers/UniqueProject";

console.log(process.env.REACT_APP_CONTENTFUL_TOKEN);
export const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACEID,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const About = lazy(() => import("./containers/About"));
  const Contact = lazy(() => import("./containers/Contact"));
  const Homepage = lazy(() => import("./containers/Homepage"));
  const Projects = lazy(() => import("./containers/Projects"));
  const UniqueProject = lazy(() => import("./containers/UniqueProject"));

  // TEST LOADING
  document.body.classList.add("js-loading");
  window.addEventListener("load", showPage);
  function showPage() {
    document.body.classList.remove("js-loading");
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <Router>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <>
            <Header></Header>
            <Suspense fallback={<Loader></Loader>}>
              <Switch>
                <Route path="/a-propos">
                  <About></About>
                </Route>
                <Route path="/loader">
                  <Loader></Loader>
                </Route>
                <Route path="/projects/:idName">
                  <UniqueProject></UniqueProject>
                </Route>
                <Route path="/projects">
                  <Projects></Projects>
                </Route>
                <Route path="/contact">
                  <Contact></Contact>
                </Route>
                <Route path="/">
                  <Homepage></Homepage>
                </Route>
              </Switch>
            </Suspense>
            <footer></footer>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
