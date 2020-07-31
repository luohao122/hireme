import React from "react";
import PropTypes from "prop-types";

import classes from "./IconListItem.module.css";

const IconListItem = (props) => {
  const renderItem = () => {
    if (props.href) {
      return (
        <a href={props.href}>
          <i className={props.iconClass}></i>
        </a>
      );
    }
    return <i className={props.iconClass}></i>;
  };

  return (
    <li
      className={`${classes.IconListItem} ${
        props.color === "danger" ? classes.TextDanger : null
      } ${props.color === "primary" ? classes.TextPrimary : null} ${
        props.size === "large" ? classes.IconLarge : null
      }`}
    >
      {renderItem()}
    </li>
  );
};

IconListItem.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  iconClass: PropTypes.string.isRequired,
};

export default IconListItem;
