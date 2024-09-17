import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const toggle = props.itemID;

  const handleToggleFav = () => {
    props.updateFavPhotoData(toggle);
  };

  const favoritePhoto = props.photoFavorites.includes(toggle);
  return (
    <div onClick={handleToggleFav} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favoritePhoto} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
