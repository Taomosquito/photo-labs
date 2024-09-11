import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <>
      <div className="photo-list__item">
        <PhotoFavButton />
        <img
          className="photo-list__image"
          src={props.value.urls.full}
          alt={props.value.urls.regular}
        />
        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={props.value.user.profile}
            alt="profile 1"
          />
          <div className="photo-list__user-info">
            {props.value.user.name}
            {/*props.value.user.username*/}
            <div className="photo-list__user-location">
              {props.value.location.city}, &nbsp; {props.value.location.country}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoListItem;
