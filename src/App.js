import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ProfileResume from "./about/components/ProfileResume";
import ProfileEducation from "./about/components/ProfileEducation";
import Portfolio from "./portfolio/pages/Portfolio";
import About from "./about/pages/About";
import Contact from "./contact/pages/Contact";
import Skills from "./skills/pages/Skils";
import Footer from "./shared/components/UIElements/Footer/Footer";
import Timeline from "./shared/components/UIElements/Timeline/Timeline";
import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main className="App">
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/portfolio" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
          <ProfileResume />
          <Portfolio />
          <ProfileEducation />
        </div>
        <Timeline />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
