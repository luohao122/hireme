import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import About from "./about/pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main className="App">
        <div className="content">
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
