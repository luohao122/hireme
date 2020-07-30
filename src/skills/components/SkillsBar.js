import React from "react";

import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";

const SkillsBar = (props) => {
  return (
    <IconList>
      <IconListItem>
        <i className="fab fa-3x fa-html5"></i>
      </IconListItem>
    </IconList>
  );
};

export default SkillsBar;
