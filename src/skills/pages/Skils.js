import React from "react";

import Card from "../../shared/components/UIElements/Card/Card";
import ProgressBar from "../../shared/components/UIElements/ProgressBar/ProgressBar";
import SkillsBar from "../components/SkillsBar";
import classes from "./Skills.module.css";

const Skills = (props) => {
  return (
    <Card id="skills">
      <div className={classes.SkillsBox}>
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mb-3">Professional Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ProgressBar title="HTML" width="90" />
          </div>
          <div className="col-sm-6">
            <ProgressBar title="CSS" width="90" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ProgressBar title="Javascript" width="75" />
          </div>
          <div className="col-sm-6">
            <ProgressBar title="Responsive Website" width="80" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ProgressBar title="Git & SVN" width="70" />
          </div>
          <div className="col-sm-6">
            <ProgressBar title="CSS" width="90" />
          </div>
        </div>
      </div>
      <SkillsBar />
    </Card>
  );
};

export default Skills;
