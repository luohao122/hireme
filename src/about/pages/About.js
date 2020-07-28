import React from "react";

import Card from "../../shared/components/UIElements/Card/Card";
import ProfileInfo from "../components/ProfileInfo";
import ProfileList from "../components/ProfileList";
import ProfileTextBox from "../components/ProfileTextBox";
import SocialsBar from "../components/SocialsBar";
import Avatar from "../../shared/components/UIElements/Avatar/Avatar";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <React.Fragment>
      <section id="about" className={classes.About}>
        <Card>
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
          <SocialsBar />
        </Card>
        <ProfileTextBox />
      </section>
    </React.Fragment>
  );
};

export default About;
