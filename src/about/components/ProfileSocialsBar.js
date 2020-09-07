import React, { useContext } from "react";
import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";
import { ProfileContext } from "../../shared/context/profile-context";

const ProfileSocialsBar = (props) => {
  const { profile } = useContext(ProfileContext);
  const renderSocialInfo = () => {
    return profile.map((info) => {
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
