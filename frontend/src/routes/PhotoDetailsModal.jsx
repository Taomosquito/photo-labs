import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = (props) => {
  console.log(props);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img
          src={closeSymbol}
          onClick={props.handleModal.closeModal}
          alt="close symbol"
        />
      </button>
      <img src={props.value.urls.full} alt={props.value.urls.regular} />
    </div>
  );
};

export default PhotoDetailsModal;
