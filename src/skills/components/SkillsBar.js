import React from "react";

import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";

const SkillsBar = (props) => {
  return (
    <IconList isTransparent>
      <IconListItem color="danger">
        <i className="fab fa-3x fa-html5"></i>
      </IconListItem>
      <IconListItem color="danger">
        <i className="fab fa-3x fa-css3"></i>
      </IconListItem>
      <IconListItem color="danger">
        <i className="fab fa-3x fa-js"></i>
      </IconListItem>
      <IconListItem color="danger">
        <i className="fab fa-3x fa-sass"></i>
      </IconListItem>
      <IconListItem color="danger">
        <i className="fab fa-3x fa-node-js"></i>
      </IconListItem>
      <IconListItem color="danger">
        <i className="fab fa-3x fa-react"></i>
      </IconListItem>
      <IconListItem color="danger">
        <i className="fab fa-3x fa-bootstrap"></i>
      </IconListItem>
    </IconList>
  );
};

export default SkillsBar;
