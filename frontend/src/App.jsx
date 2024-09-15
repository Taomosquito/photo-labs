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
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <>
      <HomeRoute
        photoData={photos}
        topicData={topics}
        favorites={state.favorites}
        handleFavorites={updateToFavPhotoIds}
        handleModal={onPhotoSelect}
        onLoadTopic={onLoadTopic}
      />
      {state.modal && (
        <PhotoDetailsModal
          photoData={photos}
          topicData={topics}
          favorites={state.favorites}
          handleFavorites={updateToFavPhotoIds}
          handleModal={onPhotoSelect}
          value={state.modal}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      )}
    </>
  );
};

export default App;
