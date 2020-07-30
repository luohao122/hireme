import React from "react";

import classes from "./TextBox.module.css";

const TextBox = (props) => {
  return <div className={classes.TextBox}>{props.children}</div>;
};

export default TextBox;
