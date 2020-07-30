import React from "react";
import IconList from "../../shared/components/UIElements/IconList/IconList";
import IconListItem from "../../shared/components/UIElements/IconList/IconListItem";

const ProfileSocialsBar = (props) => {
  return (
    <IconList>
      <IconListItem>
        <a href="https://twitter.com/">
          <i className="fab fa-twitter"></i>
        </a>
      </IconListItem>
      <IconListItem>
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </a>
      </IconListItem>
      <IconListItem>
        <a href="https://www.linkedin.com/in/jake-luong-b710ba153/">
          <i className="fab fa-linkedin"></i>
        </a>
      </IconListItem>
      <IconListItem>
        <a href="https://github.com/luohao122">
          <i className="fab fa-github"></i>
        </a>
      </IconListItem>
      <IconListItem>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </a>
      </IconListItem>
      <IconListItem>
        <a href="https://www.google.com/">
          <i className="fab fa-google-plus"></i>
        </a>
      </IconListItem>
    </IconList>
  );
};

export default ProfileSocialsBar;
