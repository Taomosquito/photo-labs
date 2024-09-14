import React from "react";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = function (props) {
  return (
    <div className="home-route">
      <TopNavigation topicData={props.topicData} />
      <PhotoList
        photoData={props.photoData}
        setFavorites={props.setFavorites}
      />
    </div>
  );
};

export default HomeRoute;
