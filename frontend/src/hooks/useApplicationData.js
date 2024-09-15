import { React, useState } from "react";

const useApplicationData = function () {
  const [favorites, setFavorites] = useState([]);
  const [modal, setModal] = useState(null);

  const onPhotoSelect = function (photoId) {
    setModal(photoId);
  };
  const updateToFavPhotoIds = function (photoId) {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
      return;
    } else {
      setFavorites([...favorites, photoId]);
      return;
    }
  };
  const onLoadTopic = function () {
    return favorites.length > 0;
  };

  const onClosePhotoDetailsModal = function () {
    setModal(false);
  };

  return {
    state: { favorites, modal },
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
