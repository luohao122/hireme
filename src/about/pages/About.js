import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import Card from "../../shared/components/UIElements/Card/Card";
import ProfileInfo from "../components/ProfileInfo";
import ProfileList from "../components/ProfileList";
import ProfileSocialsBar from "../components/ProfileSocialsBar";
import Avatar from "../../shared/components/UIElements/Avatar/Avatar";
import classes from "./About.module.css";

const About = (props) => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    setShowAbout(true);
  }, []);

  return (
    <React.Fragment>
      <CSSTransition
        in={showAbout}
        timeout={600}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
      >
        <Card id="about">
          <div className={classes.AboutBox}>
            <div className="row">
              <div className="col-sm-5">
                <Avatar
                  imageUrl="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/startuper-1.jpg"
                  title="profile-avatar"
                  alt="profile-avatar"
                />
              </div>
              <div className="col-sm-7">
                <ProfileInfo />
                <ProfileList />
              </div>
            </div>
          </div>
          <ProfileSocialsBar />
        </Card>
      </CSSTransition>
    </React.Fragment>
  );
};

export default About;
