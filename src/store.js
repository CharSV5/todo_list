import { combineReducers, createStore } from "redux";
import { createReducer } from "./reducers/create-reducer";

const rootReducer = combineReducers({
  createReducer
});

const initialState = {
  initialCreateState
};

export default createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
