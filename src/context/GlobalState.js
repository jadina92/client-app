import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favouriteList: localStorage.getItem("favouriteList")
    ? JSON.parse(localStorage.getItem("favouriteList"))
    : [],
  favouriteed: localStorage.getItem("favouriteed")
    ? JSON.parse(localStorage.getItem("favouriteed"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favouriteList", JSON.stringify(state.favouriteList));
    localStorage.setItem("favouriteed", JSON.stringify(state.favouriteed));
  }, [state]);

  // actions
  const addrecetteTofavouriteList = (recette) => {
    dispatch({ type: "ADD_recette_TO_favouriteList", payload: recette });
  };

  const removerecetteFromfavouriteList = (id) => {
    dispatch({ type: "REMOVE_recette_FROM_favouriteList", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favouriteList: state.favouriteList,
        addrecetteTofavouriteList,
        removerecetteFromfavouriteList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};