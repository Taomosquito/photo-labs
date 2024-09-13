import React from "react";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = function () {
  return (
    <>
      <TopNavigation />
      <PhotoList />
    </>
  );
};

export default HomeRoute;
