import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/style.css";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Header from "./components/Header";
import Homepage from "./containers/Homepage";
import Projects from "./containers/Projects";
import UniqueProject from "./containers/UniqueProject";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/a-propos">
            <About></About>
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
        <footer></footer>
      </Router>
    </div>
  );
};

export default App;
