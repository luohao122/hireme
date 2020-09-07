import React from "react";

import classes from "./PortfolioItemDetail.module.css";

const PortfolioItemDetail = (props) => {
  return (
    <React.Fragment>
      <button
        onClick={props.onCloseDetail}
        className={classes.PortfolioCloseButton}
      >
        <i className="fal fa fa-times"></i>
      </button>
      <div className={classes.PortfolioDetailImgBox}>
        <img
          className={classes.PortfolioDetailImg}
          src={props.image}
          alt={props.name}
          title={props.name}
        />
      </div>
      <div className={classes.PortfolioDetailBox}>
        <div className={classes.PortfolioDetailHeading}>
          <h2>{props.name}</h2>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.PortfolioDetailContent}>
          <div className={classes.PortfolioProjectInfo}>
            <div className={classes.PortfolioProjectRow}>
              <span>Company name</span>
              <span>{props.company}</span>
            </div>
            <div className={classes.PortfolioProjectRow}>
              <span>Project name</span>
              <span>{props.name}</span>
            </div>
            <div className={classes.PortfolioProjectRow}>
              <span>URL</span>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.link ? props.link : "Not published yet"}
              </a>
            </div>
          </div>
          <div className={classes.PortfolioProjectDesc}>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioItemDetail;
