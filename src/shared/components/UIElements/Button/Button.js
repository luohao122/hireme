import React from "react";
import { Link } from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        className={`${classes.Button} ${props.large && classes.ButtonLarge} ${
          props.small && classes.ButtonSmall
        } ${props.danger && classes.ButtonDanger} ${
          props.primary && classes.ButtonPrimary
        }`}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${classes.Button} ${props.size || "default"} ${
          props.danger && classes.ButtonDanger
        } ${props.primary && classes.ButtonPrimary}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${classes.Button} ${props.size || "default"} ${
        props.danger && classes.ButtonDanger
      } ${props.primary && classes.ButtonPrimary}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
