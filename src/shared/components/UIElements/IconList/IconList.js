import React from "react";

import classes from "./IconList.module.css";

const IconList = (props) => {
  return (
    <div
      className={`${classes.IconList} ${
        props.isTransparent ? classes.IsTransparent : null
      } ${props.isCentered ? classes.isCentered : null}`}
      style={
        props.hasPositionAbsolute
          ? { position: "absolute", width: "100%", bottom: 0, left: 0 }
          : null
      }
    >
      <ul className="list-unstyled m-0">{props.children}</ul>
    </div>
  );
};

export default IconList;
