import React from "react";
import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";

const ProfileSocialsBar = (props) => {
  return (
    <IconList>
      <IconListItem size="large">
        <a href="https://www.linkedin.com/in/jake-luong-b710ba153/">
          <i className="fab fa-linkedin"></i>
        </a>
      </IconListItem>
      <IconListItem size="large">
        <a href="https://github.com/luohao122">
          <i className="fab fa-github"></i>
        </a>
      </IconListItem>
      <IconListItem size="large">
        <a href="https://www.hackerrank.com/luohao937">
          <i className="fab fa-hackerrank"></i>
        </a>
      </IconListItem>
      <IconListItem size="large">
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </a>
      </IconListItem>
    </IconList>
  );
};

export default ProfileSocialsBar;
