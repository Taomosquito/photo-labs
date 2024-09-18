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
      // Dispatch call to set photo data for the home page
      case "SET_PHOTO_DATA":
        return {
          ...state,
          photoData: action.payload,
        };
      //Dispatch call to set Topic data for the home page
      case "SET_TOPIC_DATA":
        return {
          ...state,
          topicData: action.payload,
        };
      // Dispatch to add photo to Favorites
      case "FAV_PHOTO_ADDED":
        return {
          ...state,
          photoFavorites: [...state.photoFavorites, action.id],
        };
      // Dispatch to remove photo from Favorites
      case "FAV_PHOTO_REMOVED":
        return {
          ...state,
          photoFavorites: state.photoFavorites.filter(
            (photoID) => photoID !== action.id
          ),
        };
      // Dispatch to select photo to enlarge and show in modal with similar photos
      case "OPEN_MODAL":
        return {
          ...state,
          modal: action.payload,
        };
      // Dispatch to close modal
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
      .then((data) => SET_PHOTO_DATA(data));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => SET_TOPIC_DATA(data));
  }, []);

  const updateFavPhotoData = function (favoriteID) {
    if (state.photoFavorites.includes(favoriteID)) {
      return dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id: favoriteID });
    }
    return dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id: favoriteID });
  };

  const SET_PHOTO_DATA = function (photoData) {
    return dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
  };
  const SET_TOPIC_DATA = function (topicData) {
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
    updateFavPhotoData,
    SET_PHOTO_DATA,
    SET_TOPIC_DATA,
    openSelectedModal,
    closeModal,
  };
};

export default useApplicationData;
