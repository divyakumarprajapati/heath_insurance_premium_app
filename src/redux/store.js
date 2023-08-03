import { configureStore } from "@reduxjs/toolkit";
import premiumReducer from "./premiumReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  premiumReducer,
});

const store = configureStore({ reducer });

export default store;
