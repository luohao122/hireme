import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <h1 className={`${classes.Logo} h4 text-center`}>
      <i className="fas fa-code mr-2"></i>
      <Link className="text-decoration-none" to="/">
        Jake Luong
      </Link>
      <p className="m-0">
        <small>#hireme - luohao937@gmail.com</small>
      </p>
    </h1>
  );
};

export default Logo;
