import React, { useState, useEffect, useRef } from "react";

import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  const { width } = props;
  const [barWidth, setBarWidth] = useState(0);
  let intervalId = useRef(); // Stored intervalId using Ref

  useEffect(() => {
    // Clear ongoing intervals before setting new one
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    if (barWidth < parseInt(width)) {
      intervalId.current = setInterval(() => {
        setBarWidth((previousWidth) => {
          return (previousWidth += 1);
        });
      }, 0);
    } else {
      clearInterval(intervalId.current);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [barWidth, width]);

  return (
    <div className={classes.ProgressBar}>
      <div className={classes.BarData}>
        <span className={classes.BarTitle}>{props.title}</span>
      </div>
      <div className={classes.BarLine}>
        <span
          style={{ width: barWidth + "%" }}
          className={classes.BarFill}
        ></span>
      </div>
    </div>
  );
};

export default ProgressBar;
