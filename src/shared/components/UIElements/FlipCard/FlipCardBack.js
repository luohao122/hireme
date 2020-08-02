import React from "react";

import classes from "./FlipCardBack.module.css";

const FlipCardBack = (props) => {
  return (
    <div className={classes.FlipCardBackContainer}>
      <div className={classes.FlipCardBackLeft}>
        <i className={props.brandIcon}></i>
        <p>{props.name}</p>
      </div>
      <div className={classes.FlipCardBackRight}>
        <div className={classes.InforSection}>
          <p className={classes.FlipCardName}>{props.name}</p>
          <i className={classes.FlipCardPosition}>{props.title}</i>
        </div>
        <div className={classes.ContactInfo}>
          <p>{props.location}</p>
          <p>{props.email}</p>
        </div>
        <p>
          <i className="fas fa-phone pr-2"></i>
          {props.phone}
        </p>
      </div>
    </div>
  );
};

export default FlipCardBack;
