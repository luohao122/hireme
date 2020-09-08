import React from "react";

import classes from "./Hero.module.css";
import HeroBackgroundImg from "../../../../assets/images/header-bg.jpg";

const Hero = (props) => {
  return (
    <div
      className={classes.Hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${HeroBackgroundImg}")`,
      }}
    ></div>
  );
};

export default Hero;
