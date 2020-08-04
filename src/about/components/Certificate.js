import React from "react";

import classes from "./Certificate.module.css";

const Certificate = (props) => {
  return (
    <div className={classes.CertificateCard}>
      <div className={classes.CertificateTimeLine}>
        <h6>{props.year}</h6>
        <i className="fas fa-award"></i>
      </div>
      <div className={classes.CertificateName}>{props.name}</div>
      <div className={classes.CertificateSource}>{props.academy}</div>
    </div>
  );
};

export default Certificate;
