import React from "react";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = function (props) {
  return (
    <div className="home-route">
      <TopNavigation
        topicData={props.topicData}
        favorites={props.favorites}
        onLoadTopic={props.onLoadTopic}
      />
      <PhotoList
        photoData={props.photoData}
        handleFavorites={props.handleFavorites}
        favorites={props.favorites}
        handleModal={props.handleModal}
      />
    </div>
  );
};

export default HomeRoute;
