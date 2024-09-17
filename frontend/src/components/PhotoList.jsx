import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const newArr = props.photoData.map((item) => {
    return (
      <PhotoListItem
        value={item}
        key={item.id}
        itemID={item.id}
        updateFavPhotoData={props.updateFavPhotoData}
        photoFavorites={props.photoFavorites}
        openSelectedModal={props.openSelectedModal}
      />
    );
  });

  return <ul className="photo-list">{newArr}</ul>;
};

export default PhotoList;
