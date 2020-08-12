import React from "react";

import classes from "./ProfileEducation.module.css";
import Certificate from "./Certificate";

const ProfileEducation = (props) => {
  return (
    <div className={classes.ProfileEducation}>
      <h5 className="section-heading">Certificates</h5>
      <div className={classes.ProfileCertificate}>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="July 27, 2020"
              name="Flutter & Dart - The Complete Guide"
              academy="Udemy"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="June 17, 2020"
              name="React - The Complete Guide (inc Hooks, Redux, React Router)"
              academy="Udemy"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="July 14, 2020"
              name="MongoDB - The Complete Guide 2020"
              academy="Udemy"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="July 7, 2020"
              name="The MERN Fullstack Guide"
              academy="Udemy"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="June 30, 2020"
              name="NodeJS - The Complete Guide (REST APIS, GraphQL, Deno)"
              academy="Udemy"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="April 19, 2020"
              name="Advanced React and Redux"
              academy="Udemy"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="April 10, 2020"
              name="Modern React with Redux"
              academy="Udemy"
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Certificate
              year="April 1, 2020"
              name="The modern Javascript Bootcamp"
              academy="Udemy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEducation;
