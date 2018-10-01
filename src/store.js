import { combineReducers, createStore } from "redux";
import { createReducer, initialCreateState } from "./reducers/create-reducer";
import {
  storageReducer,
  initialStorageState
} from "./reducers/storage-reducer";

const rootReducer = combineReducers({
  createReducer
});

const initialState = {
  initialCreateState,
  initialStorageState
};

export default createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
