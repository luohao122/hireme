import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={`${classes.NavLinks} d-flex list-unstyled`}>
      <li>
        <NavLink className="text-white" to="/" exact>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-white" to="/" exact>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink className="text-white" to="/" exact>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink className="text-white" to="/" exact>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
