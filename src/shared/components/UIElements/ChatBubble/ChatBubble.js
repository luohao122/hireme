import React from "react";
import PropTypes from "prop-types";

import classes from "./ChatBubble.module.css";

const ChatBubble = (props) => {
  return (
    <div className={classes.ChatBubble}>
      <span className={classes.Label}>{props.text}</span>
    </div>
  );
};

ChatBubble.defaultProps = {
  text: "Hello",
};

ChatBubble.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ChatBubble;
