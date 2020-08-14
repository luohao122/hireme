import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import Card from "../../shared/components/UIElements/Card/Card";
import FlipCard from "../../shared/components/UIElements/FlipCard/FlipCard";
import ChatBubble from "../../shared/components/UIElements/ChatBubble/ChatBubble";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    setShowContact(true);

    return () => {
      setShowContact(false);
    };
  }, []);

  return (
    <CSSTransition
      in={showContact}
      timeout={600}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <Card id="contact">
        <div className={classes.ContactBox}>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="mb-3">My Contact Card</h2>
              <p>Please reach me via my personal contact card below</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`${classes.ContactBoxDesktop} mt-5 position-relative`}
              >
                <FlipCard
                  frontColor="#e6653b"
                  backColor="#fff"
                  name="Jake Luong"
                  title="Mid Level Front End Developer"
                  brandIcon="fas fa-code fa-4x"
                  location="Ho Chi Minh, Vietnam"
                  email="luohao937@gmail.com"
                  phone="(+84) 77 279 7387"
                />
                <div className={classes.ContactBubbleBox}>
                  <ChatBubble text="Hover on me" />
                </div>
              </div>
              <div className={classes.ContactBoxMobile}>
                <div className={classes.ContactBoxInner}>
                  <div className={classes.ContactBoxCardMobile}>
                    <div className={classes.ContactInfo}>
                      <i className="fas fa-code fa-4x"></i>
                      <p>Jake Luong</p>
                    </div>
                    <div className="text-left">
                      <div className={classes.ContactJobSection}>
                        <p>Jake Luong</p>
                        <i>Mid Level Front End Developer</i>
                      </div>
                      <div>
                        <p className="m-0">Ho Chi Minh, Vietnam</p>
                        <p>luohao937@gmail.com</p>
                      </div>
                      <p>
                        <i className="fas fa-phone pr-2"></i>(+84) 77 279 7387
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </CSSTransition>
  );
};

export default Contact;
