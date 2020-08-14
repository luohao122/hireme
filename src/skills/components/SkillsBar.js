import React from "react";

import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";
import { iconList } from "../../shared/data/iconList";

const SkillsBar = (props) => {
  const renderIconListItem = () => {
    return iconList.map((icon) => {
      return (
        <IconListItem key={icon.id} color="danger" iconClass={icon.iconName} />
      );
    });
  };

  return <IconList isTransparent>{renderIconListItem()}</IconList>;
};

export default SkillsBar;
