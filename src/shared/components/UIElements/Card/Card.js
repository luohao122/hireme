import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <section id={props.id} className={classes.CardSection}>
      <div className={classes.Card}>{props.children}</div>
    </section>
  );
};

export default Card;
