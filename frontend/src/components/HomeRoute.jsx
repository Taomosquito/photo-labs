import React from "react";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = function () {
  return (
    <div>
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
