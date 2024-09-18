import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <h2>
        <span onClick={() => props.fetchPhotoByTopicDataId(props.value.id)}>
          {props.value.title}
        </span>
      </h2>
    </div>
  );
};

export default TopicListItem;
