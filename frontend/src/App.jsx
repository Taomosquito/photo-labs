import { React, useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import topics from "./mocks/topics";
import photos from "./mocks/photos";

import "./App.scss";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [modal, setModal] = useState(null);

  const handleFavorites = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
      return;
    } else {
      setFavorites([...favorites, photoId]);
      return;
    }
  };

  const handleModal = {
    createModal: function (photoId) {
      setModal(photoId);
    },
    closeModal: function () {
      setModal(false);
    },
  };
  return (
    <>
      <HomeRoute
        photoData={photos}
        topicData={topics}
        favorites={favorites}
        handleFavorites={handleFavorites}
        handleModal={handleModal}
      />
      {modal && (
        <PhotoDetailsModal
          photoData={photos}
          topicData={topics}
          favorites={favorites}
          handleFavorites={handleFavorites}
          handleModal={handleModal}
          value={modal}
        />
      )}
    </>
  );
};

export default App;
