import { React, useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const useApplicationData = function () {
  const reducer = function (state, action) {
    switch (action.type) {
      case "SET_PHOTO_DATA":
        return {
          ...state,
          photoData: action.payload,
        };
      case "SET_TOPIC_DATA":
        return {
          ...state,
          topicData: action.payload,
        };
      case "FAV_PHOTO_ADDED":
        return {
          ...state,
          photoFavorites: [...state.photoFavorites, action.id],
        };
      case "FAV_PHOTO_REMOVED":
        return {
          ...state,
          photoFavorites: state.photoFavorites.filter(
            (photoID) => photoID !== action.id
          ),
        };
      case "OPEN_MODAL":
        return {
          ...state,
          modal: action.payload,
        };
      case "CLOSE_MODAL":
        return {
          ...state,
          modal: null,
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  };
  const initialState = {
    photoFavorites: [],
    modal: null,
    photoData: [],
    topicData: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => setPhotoData(data));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => setTopicData(data));
  }, []);

  const fetchPhotoByTopicDataId = function (id) {
    fetch(`/api/topics/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPhotoData(data));
  };

  const updateFavPhotoData = function (favoriteID) {
    if (state.photoFavorites.includes(favoriteID)) {
      return dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id: favoriteID });
    }
    return dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id: favoriteID });
  };

  const setPhotoData = function (photoData) {
    return dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
  };
  const setTopicData = function (topicData) {
    return dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
  };
  const openSelectedModal = function (photoData) {
    return dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoData });
  };
  const closeModal = function () {
    return dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    fetchPhotoByTopicDataId,
    updateFavPhotoData,
    openSelectedModal,
    closeModal,
  };
};

export default useApplicationData;
