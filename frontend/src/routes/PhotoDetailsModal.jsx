import React from "react";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img
          src={closeSymbol}
          onClick={props.onClosePhotoDetailsModal}
          alt="close symbol"
        />
      </button>
      <PhotoFavButton
        indicator={props.indicator}
        handleFavorites={props.handleFavorites}
        favorites={props.favorites}
      />
      <img
        className="photo-details-modal__image"
        src={props.value.urls.regular}
        alt="selected photo"
      />
      <div className="photo-details-modal__header">
        <img
          className="photo-details-modal__photographer-profile"
          src={props.value.user.profile}
          alt={props.value.user.profile}
        />
        <div className="photo-details-modal__photographer-info">
          {props.value.user.name} <br />
        </div>
        <div className="photo-details-modal__photographer-location">
          {props.value.location.city}, &nbsp; {props.value.location.country}
        </div>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList
          photoData={props.photoData}
          handleFavorites={props.handleFavorites}
          favorites={props.favorites}
          handleModal={props.handleModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
