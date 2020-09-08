import React, { useEffect, useLayoutEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const { show, onResize } = props;
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes.SideDrawer} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  // Hide SideDrawer when screen size is above or equal to 768px
  const handleResize = useCallback(() => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (width >= 768) {
      onResize();
    }
  }, [onResize]);

  // Add/Remove noscroll class to prevent background scrolling
  // when SideDrawer is open (show)
  useEffect(() => {
    if (show) {
      document.querySelector("body").classList.add("noscroll");
    }
    return () => {
      document.querySelector("body").classList.remove("noscroll");
    };
  }, [show]);

  // Add/Remove resize listener to fix responsive issue
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
