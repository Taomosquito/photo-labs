import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const toggle = props.indicator;

  const handleToggleFav = () => {
    props.handleFavorites(toggle);
  };

  const favoritePhoto = props.favorites.includes(toggle);
  return (
    <div onClick={handleToggleFav} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favoritePhoto} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
