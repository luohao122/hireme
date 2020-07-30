import React from "react";

import classes from "./IconListItem.module.css";

const IconListItem = (props) => {
  return (
    <li
      className={`${classes.IconListItem} ${
        props.color === "danger" ? classes.TextDanger : null
      } ${props.size === "large" ? classes.IconLarge : null}`}
    >
      {props.children}
    </li>
  );
};

export default IconListItem;
