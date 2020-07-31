import React from "react";
import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";

const ProfileSocialsBar = (props) => {
  return (
    <IconList>
      <IconListItem
        size="large"
        href="https://www.linkedin.com/in/jake-luong-b710ba153/"
        iconClass="fab fa-linkedin"
      />
      <IconListItem
        size="large"
        href="https://github.com/luohao122"
        iconClass="fab fa-github"
      />
      <IconListItem
        size="large"
        href="https://www.hackerrank.com/luohao937"
        iconClass="fab fa-hackerrank"
      />
      <IconListItem
        size="large"
        href="https://www.facebook.com/"
        iconClass="fab fa-facebook-f"
      />
    </IconList>
  );
};

export default ProfileSocialsBar;
