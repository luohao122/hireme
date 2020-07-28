import React from "react";

import classes from "./ProfileTextBox.module.css";

const ProfileTextBox = (props) => {
  return (
    <div className={classes.ProfileTextBox}>
      <a href="/">Download Resume</a>
      <p>
        Hello! I'm Jake Luong. Mid Level Web Developer specializing in front end
        development. Experienced with all stages of the development cycle for
        dynamic web projects. Well-versed in Javascript, HTML5, CSS3, Bootstrap.
      </p>
    </div>
  );
};

export default ProfileTextBox;
