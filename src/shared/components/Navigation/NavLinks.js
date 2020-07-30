import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={`${classes.NavLinks} d-flex list-unstyled`}>
      <li>
        <NavLink
          className="text-white"
          to="/"
          exact
          activeClassName={classes.NavLinkActive}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-white"
          to="/skills"
          exact
          activeClassName={classes.NavLinkActive}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-white"
          to="/portfolio"
          exact
          activeClassName={classes.NavLinkActive}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-white"
          to="/contact"
          exact
          activeClassName={classes.NavLinkActive}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
