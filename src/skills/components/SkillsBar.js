import React from "react";

import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";

const SkillsBar = (props) => {
  return (
    <IconList isTransparent>
      <IconListItem color="danger" iconClass="fab fa-3x fa-html5" />
      <IconListItem color="danger" iconClass="fab fa-3x fa-css3" />
      <IconListItem color="danger" iconClass="fab fa-3x fa-js" />
      <IconListItem color="danger" iconClass="fab fa-3x fa-sass" />
      <IconListItem color="danger" iconClass="fab fa-3x fa-node-js" />
      <IconListItem color="danger" iconClass="fab fa-3x fa-react" />
      <IconListItem color="danger" iconClass="fab fa-3x fa-bootstrap" />
    </IconList>
  );
};

export default SkillsBar;
