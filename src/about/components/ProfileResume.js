import React from "react";

import Button from "../../shared/components/UIElements/Button/Button";
import classes from "./ProfileResume.module.css";

const ProfileResume = (props) => {
  return (
    <div className={classes.ProfileResume}>
      <p className="mb-4">
        <Button href="https://drive.google.com/file/d/1GvufqbntjMFzsXDocWBsooQYtWKc44Fk/view?usp=sharing">
          Download Resume
        </Button>
      </p>
      <p>
        Hello! I'm Jake Luong. Mid Level Web Developer specializing in front end
        development. Experienced with all stages of the development cycle for
        dynamic web projects. Well-versed in Javascript, HTML5, CSS3, Bootstrap.
      </p>
    </div>
  );
};

export default ProfileResume;
