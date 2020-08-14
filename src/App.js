import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ProfileResume from "./about/components/ProfileResume";
import ProfileEducation from "./about/components/ProfileEducation";
import Portfolio from "./portfolio/pages/Portfolio";
import About from "./about/pages/About";
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
          <About />
          <ProfileResume />
          <Skills />
          <Portfolio />
          <Timeline />
          <ProfileEducation />
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
