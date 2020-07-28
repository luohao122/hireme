import React from "react";

import classes from "./ProfileList.module.css";

const ProfileList = (props) => {
  return (
    <ul className={`${classes.ProfileList} text-left list-unstyled`}>
      <li>
        <strong className={`${classes.ProfileListTitle} pr-2`}>Age</strong>
        <span className={`${classes.ProfileListContent}`}>28</span>
      </li>
      <li>
        <strong className={`${classes.ProfileListTitle} pr-2`}>Address</strong>
        <span className={`${classes.ProfileListContent}`}>
          489/7/4B Ma Lo St, Ho Chi Minh, Vietnam
        </span>
      </li>
      <li>
        <strong className={`${classes.ProfileListTitle} pr-2`}>Email</strong>
        <span className={`${classes.ProfileListContent}`}>
          luohao937@gmail.com
        </span>
      </li>
      <li>
        <strong className={`${classes.ProfileListTitle} pr-2`}>Phone</strong>
        <span className={`${classes.ProfileListContent}`}>+84 77 279 7387</span>
      </li>
      <li>
        <strong className={`${classes.ProfileListTitle} pr-2`}>
          Job Types
        </strong>
        <span className={`${classes.ProfileListContent}`}>
          <i className="fas fa-briefcase pr-2"></i>
          Full-Time
        </span>
      </li>
      <li>
        <strong className={`${classes.ProfileListTitle} pr-2`}>
          <span className={classes.Tag}>Availability</span>
        </strong>
        <span className={`${classes.ProfileListContent}`}>
          <i className="fas fa-check-circle pr-2"></i>
          Open to opportunities
        </span>
      </li>
    </ul>
  );
};

export default ProfileList;
