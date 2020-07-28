import React from "react";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={`${classes.ProfileInfo} text-left`}>
      <div className="mb-3">
        <div className="profile-bubble">
          <span
            className={`${classes.Label} text-uppercase position-relative d-inline-block`}
          >
            Hello
          </span>
        </div>
      </div>
      <h1>
        <span className="pr-2">I'm</span>
        Jake Luong
      </h1>
      <h2 className={classes.ProfileTitle}>Mid Level - Front End Developer</h2>
    </div>
  );
};

export default ProfileInfo;
