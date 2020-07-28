import React from "react";

import classes from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <div className={classes.Avatar}>
      <img
        className="img-fluid"
        src={props.imageUrl}
        alt={props.alt}
        title={props.title}
      />
    </div>
  );
};

export default Avatar;
