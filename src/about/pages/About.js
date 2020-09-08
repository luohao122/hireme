import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import Card from "../../shared/components/UIElements/Card/Card";
import ProfileInfo from "../components/ProfileInfo";
import ProfileList from "../components/ProfileList";
import ProfileSocialsBar from "../components/ProfileSocialsBar";
import Avatar from "../../shared/components/UIElements/Avatar/Avatar";
import classes from "./About.module.css";
import ProfileImg from "../../assets/images/jake.jpg";

const About = (props) => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    setShowAbout(true);
    return () => {
      setShowAbout(false);
    };
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
              <div className="col-md-5">
                <Avatar
                  imageUrl={ProfileImg}
                  title="profile-avatar"
                  alt="profile-avatar"
                />
              </div>
              <div className="col-md-7">
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
