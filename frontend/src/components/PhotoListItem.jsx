import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.imageSource} alt="image 1" />
      <img src={props.profile} alt="profile 1" />
      <h2>{props.username}</h2>
      <p>
        <span>{props.city} </span>
        <span>{props.country} </span>
      </p>
    </div>
  );
};

export default PhotoListItem;
