import React from "react";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import topics from "./mocks/topics";
import photos from "./mocks/photos";

import useApplicationData from "./hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const {
    state,
    updateFavPhotoData,
    SET_PHOTO_DATA,
    SET_TOPIC_DATA,
    openSelectedModal,
    closeModal,
  } = useApplicationData();

  return (
    <>
      <HomeRoute
        photoData={photos}
        topicData={topics}
        updateFavPhotoData={updateFavPhotoData}
        openSelectedModal={openSelectedModal}
        closeModal={closeModal}
        photoFavorites={state.photoFavorites}
      />
      {state.modal && (
        <PhotoDetailsModal
          photoData={photos}
          topicData={topics}
          openSelectedModal={openSelectedModal}
          closeModal={closeModal}
          value={state.modal}
          photoFavorites={state.photoFavorites}
          updateFavPhotoData={updateFavPhotoData}
        />
      )}
    </>
  );
};

export default App;
