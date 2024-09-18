import React from "react";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import useApplicationData from "./hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const {
    state,
    updateFavPhotoData,
    openSelectedModal,
    closeModal,
    fetchPhotoByTopicDataId,
  } = useApplicationData();

  return (
    <>
      <HomeRoute
        photoData={state.photoData}
        topicData={state.topicData}
        updateFavPhotoData={updateFavPhotoData}
        openSelectedModal={openSelectedModal}
        closeModal={closeModal}
        photoFavorites={state.photoFavorites}
        fetchPhotoByTopicDataId={fetchPhotoByTopicDataId}
      />
      {state.modal && (
        <PhotoDetailsModal
          photoData={state.photoData}
          topicData={state.topicData}
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
