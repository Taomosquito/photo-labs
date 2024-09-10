import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={props.imageSource}
        alt="image 1"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.profile}
          alt="profile 1"
        />
        <div className="photo-list__user-info">
          {props.username}
          <div className="photo-list__user-location">
            {props.city}, &nbsp; {props.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
