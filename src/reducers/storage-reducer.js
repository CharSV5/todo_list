import { SAVE_TODO, SHOW_TODO } from "../actions/storage-actions.js";

export const initialStorageState = {
  tempStorage: []
};

export const storageReducer = (state = initialStorageState, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return [...state.tempStorage, action.newTodo];

    case SHOW_TODO:
      return state.tempStorage.map(item => {
        if (item.title === action.title) {
          return item;
        }
      });

    case UPDATE_TODO:
      return state.tempStorage.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            title: action.UpdatedTitle,
            body: action.updatedBody
          };
        }
        return item;
      });
    case DELETE_TODO:
      return state.tempStorage.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            title: "",
            body: "",
            id: ""
          };
        }
        return item;
      });
  }
};
