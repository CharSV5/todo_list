import { CREATE_NEW } from "../actions/create-actions";

export const initialCreateState = {
  newItem: {}
};

export const createReducer = (state = initialCreateState, action) => {
  switch (action.type) {
    case CREATE_NEW: {
      return {
        ...state,
        newItem: {
          title: action.newTitle,
          body: action.newBody,
          id: action.Id
        }
      };
    }
    default:
      return state;
  }
};
