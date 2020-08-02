import React from "react";

import classes from "./FlipCardFront.module.css";

const FlipCardFront = (props) => {
  return (
    <div className={classes.FlipCardFrontContainer}>
      <i className={props.brandIcon}></i>
      <p>{props.name}</p>
    </div>
  );
};

export default FlipCardFront;
