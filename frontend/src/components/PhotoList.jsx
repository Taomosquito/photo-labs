import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const newArr = props.photoData.map((item) => {
    return (
      <PhotoListItem
        value={item}
        key={item.id}
        indicator={item.id}
        handleFavorites={props.handleFavorites}
        favorites={props.favorites}
        handleModal={props.handleModal}
      />
    );
  });

  return <ul className="photo-list">{newArr}</ul>;
};

export default PhotoList;
