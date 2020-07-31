import React, { useState } from "react";

import MainHeader from "./MainHeader";
import Hero from "../../components/UIElements/Hero/Hero";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop/Backdrop";
import Logo from "../UIElements/Logo/Logo";
import Avatar from "../UIElements/Avatar/Avatar";
import IconList from "../UIElements/IconList/IconList";
import IconListItem from "../UIElements/IconList/IconListItem";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <button
          className={classes.SideDrawerCloseButton}
          onClick={closeDrawerHandler}
        >
          <i className="fal fa fa-times"></i>
        </button>
        <Avatar
          imageUrl="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/startuper-1.jpg"
          title="profile-avatar"
          alt="profile-avatar"
        />
        <Logo />
        <IconList isTransparent isCentered>
          <IconListItem
            color="primary"
            size="large"
            href="https://www.linkedin.com/in/jake-luong-b710ba153/"
            iconClass="fab fa-linkedin"
          />
          <IconListItem
            color="primary"
            size="large"
            href="https://github.com/luohao122"
            iconClass="fab fa-github"
          />
          <IconListItem
            color="primary"
            size="large"
            href="https://www.hackerrank.com/luohao937"
            iconClass="fab fa-hackerrank"
          />
        </IconList>
        <nav className={classes.MainHeaderDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <Hero />
        <div
          className={`${classes.MainNav} navbar navbar-dark bg-dark shadow-sm`}
        >
          <div className="container d-flex justify-content-between">
            <button
              className={classes.MainNavigationMenuButton}
              onClick={openDrawerHandler}
            >
              <span />
              <span />
              <span />
            </button>
            <Logo />
            <nav className={classes.MainNavigationHeaderNav}>
              <NavLinks />
            </nav>
          </div>
        </div>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
