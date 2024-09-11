import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [toggle, setToggle] = useState(false);
  const toggleFavIcon = function () {
    setToggle((prev) => !prev);
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
