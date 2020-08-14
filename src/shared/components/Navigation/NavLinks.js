import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";
import { smoothScroll } from "../../../helpers/util";

const NavLinks = (props) => {
  return (
    <ul className={`${classes.NavLinks} d-flex list-unstyled`}>
      <li>
        <NavLink
          to="/"
          exact
          activeClassName={classes.NavLinkActive}
          onClick={() => smoothScroll("#about")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          exact
          activeClassName={classes.NavLinkActive}
          onClick={() => smoothScroll("#skills")}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          exact
          activeClassName={classes.NavLinkActive}
          onClick={() => smoothScroll("#portfolio")}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/career"
          exact
          activeClassName={classes.NavLinkActive}
          onClick={() => smoothScroll("#career")}
        >
          My Career
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/certificates"
          exact
          activeClassName={classes.NavLinkActive}
          onClick={() => smoothScroll("#certificates")}
        >
          Certificates
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
