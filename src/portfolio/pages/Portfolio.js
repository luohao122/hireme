import React from "react";

import classes from "./Portfolio.module.css";
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = (props) => {
  return (
    <div id="portfolio" className={classes.Portfolio}>
      <h5 className="section-heading">Portfolio</h5>
      <div className={classes.PortfolioGridContainer}>
        <div>
          <PortfolioItem title="ImageStore" image="/stayjapan.png" isHero />
        </div>
        <div>
          <PortfolioItem
            title="StayJapan"
            image="/stayjapan.png"
            hasLink
            url="https://stayjapan.com/"
          />
          <PortfolioItem
            title="My First Freelance Project"
            image="/annie.png"
            hasLink
            url="https://learnvietnamesewithannie.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
