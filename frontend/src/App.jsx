import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = new Array(3);
const newArr = [...photos].map((_, index) => {
  return <PhotoListItem key={index} value={sampleDataForPhotoListItem} />;
});

console.log("newArr is", newArr);
// Note: Rendering a single component to build components in isolation
const App = () => {
  return <div className="App">{newArr}</div>;
};

export default App;
