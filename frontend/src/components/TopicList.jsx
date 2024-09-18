import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const newArr = props.topicData.map((item) => {
    return (
      <TopicListItem
        value={item}
        key={item.id}
        fetchPhotoByTopicDataId={props.fetchPhotoByTopicDataId}
      />
    );
  });
  return <div className="top-nav-bar__topic-list">{newArr}</div>;
};

export default TopicList;
