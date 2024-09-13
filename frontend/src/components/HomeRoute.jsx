import React from "react";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = function (_) {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
