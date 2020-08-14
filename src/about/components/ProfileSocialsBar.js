import React from "react";
import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";
import { socialInfo } from "../../shared/data/socialInfo";

const ProfileSocialsBar = (props) => {
  const renderSocialInfo = () => {
    return socialInfo.map((info) => {
      return (
        <IconListItem
          key={info.id}
          size="large"
          href={info.link}
          iconClass={info.icon}
        />
      );
    });
  };

  return <IconList>{renderSocialInfo()}</IconList>;
};

export default ProfileSocialsBar;
