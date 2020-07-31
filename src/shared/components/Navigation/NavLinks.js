import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={`${classes.NavLinks} d-flex list-unstyled`}>
      <li>
        <NavLink to="/" exact activeClassName={classes.NavLinkActive}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" exact activeClassName={classes.NavLinkActive}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" exact activeClassName={classes.NavLinkActive}>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact activeClassName={classes.NavLinkActive}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
