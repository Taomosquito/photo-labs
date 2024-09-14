import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const [toggle, setToggle] = useState(false);

  const addFavIcon = function () {
    props.setFavorites((prev) => [...prev, props.indicator]);
  };

  const removeFavIcon = function () {
    props.setFavorites((prev) => prev.filter((fav) => fav !== props.indicator));
  };

  const toggleFavIcon = function () {
    setToggle((prev) => {
      const newToggle = !prev;
      if (newToggle) {
        addFavIcon();
      } else {
        removeFavIcon();
      }
      return newToggle;
    });
  };
  return (
    <div onClick={toggleFavIcon} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={toggle} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
