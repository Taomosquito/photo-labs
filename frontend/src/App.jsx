import { React, useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics";
import photos from "./mocks/photos";

import "./App.scss";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  return (
    <HomeRoute
      photoData={photos}
      topicData={topics}
      setFavorites={setFavorites}
    />
  );
};

export default App;
