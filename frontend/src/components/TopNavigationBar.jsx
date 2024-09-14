import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  let isFavPhotoExist = null;
  if (props.favorites.length > 0) {
    isFavPhotoExist = true;
  } else {
    isFavPhotoExist = false;
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={props.topicData} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
