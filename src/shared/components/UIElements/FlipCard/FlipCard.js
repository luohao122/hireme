import React from "react";

import classes from "./FlipCard.module.css";

import FlipCardFront from "./FlipCardFront";
import FlipCardBack from "./FlipCardBack";

const FlipCard = (props) => {
  return (
    <div className={classes.FlipCard}>
      <div className={classes.FlipCardInner}>
        <div
          className={classes.FlipCardFront}
          style={{
            backgroundColor: props.frontColor ? props.frontColor : null,
          }}
        >
          <FlipCardFront brandIcon={props.brandIcon} name={props.name} />
        </div>
        <div
          className={classes.FlipCardBack}
          style={{
            backgroundColor: props.backColor ? props.backColor : null,
          }}
        >
          <FlipCardBack
            location={props.location}
            title={props.title}
            brandIcon={props.brandIcon}
            name={props.name}
            email={props.email}
            phone={props.phone}
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
