import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import Hero from "../../components/UIElements/Hero/Hero";
import NavLinks from "./NavLinks";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <Hero />
      <div
        className={`${classes.MainNav} navbar navbar-dark bg-dark shadow-sm`}
      >
        <div className="container d-flex justify-content-between">
          <h1 className="h4 text-white">
            <i className="fas fa-code mr-2"></i>
            <Link className="text-decoration-none text-white" to="/">
              Jake Luong
            </Link>
            <p className="m-0 text-center" style={{ fontSize: "16px" }}>
              <small>#hireme - luohao937@gmail.com</small>
            </p>
          </h1>
          <nav>
            <NavLinks />
          </nav>
        </div>
      </div>
    </MainHeader>
  );
};

export default MainNavigation;
