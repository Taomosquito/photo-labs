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

  const handleModal = (photoId) => {
    console.log(photoId);
    setModal(photoId);
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
      {modal && <PhotoDetailsModal value={modal} />}
    </>
  );
};

export default App;
