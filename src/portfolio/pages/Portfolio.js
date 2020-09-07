import React, { useContext } from "react";

import classes from "./Portfolio.module.css";
import PortfolioItem from "../components/PortfolioItem";
import { ProjectContext } from "../../shared/context/project-context";

const Portfolio = (props) => {
  const { projects } = useContext(ProjectContext);

  const renderHeroBlock = () => {
    const heroItem = projects.filter((project) => project.isHero);

    return heroItem.map((item) => {
      return <PortfolioItem key={item.id} {...item} />;
    });
  };

  const renderProjectsBlock = () => {
    const projectsItem = projects.filter((project) => !project.isHero);

    return projectsItem.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <PortfolioItem {...item} hasLink={item.link} />
        </React.Fragment>
      );
    });
  };

  return (
    <div id="portfolio" className={classes.Portfolio}>
      <h5 className="section-heading">Portfolio</h5>
      <div className={classes.PortfolioGridContainer}>
        <div>{renderHeroBlock()}</div>
        <div>{renderProjectsBlock()}</div>
      </div>
    </div>
  );
};

export default Portfolio;
