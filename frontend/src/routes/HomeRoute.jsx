import React from "react";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = function (props) {
  const isFavPhotoExist = props.photoFavorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigation
        topicData={props.topicData}
        isFavPhotoExist={isFavPhotoExist}
      />
      <PhotoList
        photoData={props.photoData}
        updateFavPhotoData={props.updateFavPhotoData}
        openSelectedModal={props.openSelectedModal}
        photoFavorites={props.photoFavorites}
      />
    </div>
  );
};

export default HomeRoute;
