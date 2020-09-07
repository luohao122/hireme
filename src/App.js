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
import { ProfileContext } from "./shared/context/profile-context";
import { CertificateContext } from "./shared/context/certificate-context";
import { ProjectContext } from "./shared/context/project-context";
import { socialInfo } from "./shared/models/socialInfo";
import { certificateData } from "./shared/models/certificate";
import { projects } from "./shared/models/projects";
import "./App.css";

const App = () => {
  return (
    <Router>
      <ProfileContext.Provider value={{ profile: socialInfo }}>
        <MainNavigation />
        <main className="App">
          <div className="container">
            <About />
            <ProfileResume />
            <Skills />
            <ProjectContext.Provider value={{ projects: projects }}>
              <Portfolio />
            </ProjectContext.Provider>
            <Timeline />
            <CertificateContext.Provider
              value={{ certificates: certificateData }}
            >
              <ProfileEducation />
            </CertificateContext.Provider>
          </div>
        </main>
        <Footer />
      </ProfileContext.Provider>
    </Router>
  );
};

export default App;
