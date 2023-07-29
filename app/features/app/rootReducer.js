import { combineReducers } from "@reduxjs/toolkit";
import ApiBase from "./ApiBase";

const rootReducer = combineReducers({
  [ApiBase.reducerPath]: ApiBase.reducer,
});

export default rootReducer;
