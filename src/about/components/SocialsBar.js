import React from "react";

import classes from "./SocialsBar.module.css";

const SocialsBar = (props) => {
  return (
    <div
      className={classes.SocialsBar}
      style={
        props.hasPositionAbsolute
          ? { position: "absolute", width: "100%", bottom: 0, left: 0 }
          : null
      }
    >
      <ul className="list-unstyled m-0">
        <li>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jake-luong-b710ba153/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/luohao122">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.google.com/">
            <i className="fab fa-google-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialsBar;
