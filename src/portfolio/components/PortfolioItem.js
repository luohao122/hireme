import React from "react";

import classes from "./PortfolioItem.module.css";

const PortfolioItem = (props) => {
  const renderButton = () => {
    return (
      <React.Fragment>
        <button
          className={`${classes.PortfolioActionButton} ${classes.FaEyes}`}
          type="button"
        >
          <i className="fas fa-eye"></i>
        </button>
        {props.hasLink ? (
          <a
            href={props.url}
            className={`${classes.PortfolioActionButton} ${classes.FaLink}`}
            type="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link"></i>
          </a>
        ) : (
          <button
            className={`${classes.PortfolioActionButton} ${classes.FaLink}`}
            type="button"
          >
            <i className="fas fa-link"></i>
          </button>
        )}
      </React.Fragment>
    );
  };

  return (
    <div
      className={`${classes.PortfolioItem} ${classes.PortfolioItemBox} ${
        props.isHero ? classes.PortfolioHero : classes.PortfolioSideBox
      }`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={classes.PortfolioCTAGroup}>
        <h5>{props.title}</h5>
        <div>{renderButton()}</div>
      </div>
    </div>
  );
};

export default PortfolioItem;
