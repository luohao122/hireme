import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import TextBox from "./shared/components/UIElements/TextBox/TextBox";
import Button from "./shared/components/UIElements/Button/Button";
import About from "./about/pages/About";
import Skills from "./skills/pages/Skils";
import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main className="App">
        <div className="content">
          <div className="container">
            {/* <About /> */}
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/skills" exact>
                <Skills />
              </Route>
              <Route path="/portfolio" exact>
                <Skills />
              </Route>
              <Route path="/contact" exact>
                <Skills />
              </Route>
            </Switch>
            {/* <Skills /> */}
            <TextBox>
              <p className="mb-4">
                <Button href="/">Download Resume</Button>
              </p>
              <p>
                Hello! I'm Jake Luong. Mid Level Web Developer specializing in
                front end development. Experienced with all stages of the
                development cycle for dynamic web projects. Well-versed in
                Javascript, HTML5, CSS3, Bootstrap.
              </p>
            </TextBox>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
