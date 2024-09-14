import { React, useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics";
import photos from "./mocks/photos";

import "./App.scss";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId));
      return;
    } else {
      setFavorites([...favorites, photoId]);
      return;
    }
  };

  return (
    <HomeRoute
      photoData={photos}
      topicData={topics}
      favorites={favorites}
      handleFavorites={handleFavorites}
    />
  );
};

export default App;
