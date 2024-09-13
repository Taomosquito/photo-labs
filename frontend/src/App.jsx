import React from "react";

import HomeRoute from "./routes/HomeRoute";
import topics from "./mocks/topics";
import photos from "./mocks/photos";

import "./App.scss";

const App = () => {
  return <HomeRoute photoData={photos} topicData={topics} />;
};

export default App;
