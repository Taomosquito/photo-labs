import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  console.log(props);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={props.topicData} />
      <FavBadge isFavPhotoExist={props.onLoadTopic()} />
    </div>
  );
};

export default TopNavigation;
