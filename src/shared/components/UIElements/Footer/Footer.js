import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm text-right">
            <a className="mr-3" href="mailto:luohao937@gmail.com">
              <i className="fas fa-at"></i>
              luohao937@gmail.com
            </a>
            <a href="tel:+84-77-279-7387" className="text-white">
              <i className="fas fa-phone pr-2"></i>
              0772797387
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
