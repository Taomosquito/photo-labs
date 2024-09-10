import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={props.value.imageSource}
        alt="image 1"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.value.profile}
          alt="profile 1"
        />
        <div className="photo-list__user-info">
          {props.value.username}
          <div className="photo-list__user-location">
            {props.value.location.city}, &nbsp; {props.value.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
