import React from "react";

import classes from "./IconListItem.module.css";

const IconListItem = (props) => {
  return <li className={classes.IconListItem}>{props.children}</li>;
};

export default IconListItem;
