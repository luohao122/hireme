import React, { useState, useContext } from "react";

import MainHeader from "./MainHeader";
import Hero from "../../components/UIElements/Hero/Hero";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop/Backdrop";
import Logo from "../UIElements/Logo/Logo";
import Avatar from "../UIElements/Avatar/Avatar";
import IconList from "../UIElements/IconList/IconList";
import IconListItem from "../UIElements/IconList/IconListItem";
import { ProfileContext } from "../../context/profile-context";
import ProfileImg from "../../../assets/images/jake.jpg";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { profile } = useContext(ProfileContext);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const renderSocialInfo = () => {
    return profile.map((info) => {
      return (
        <IconListItem
          key={info.id}
          color="primary"
          size="large"
          href={info.link}
          iconClass={info.icon}
        />
      );
    });
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer
        show={drawerIsOpen}
        onClick={closeDrawerHandler}
        onResize={closeDrawerHandler}
      >
        <button
          className={classes.SideDrawerCloseButton}
          onClick={closeDrawerHandler}
        >
          <i className="fal fa fa-times"></i>
        </button>
        <Avatar
          imageUrl={ProfileImg}
          title="profile-avatar"
          alt="profile-avatar"
        />
        <Logo />
        <IconList isTransparent isCentered>
          {renderSocialInfo()}
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
