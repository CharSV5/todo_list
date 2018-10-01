import { OPEN_NEW_NOTE, CREATE_NEW } from "../actions/create-actions";

export const initialCreateState = {
  creating: false,
  title: "",
  body: "",
  completed: false,
  todo_id: 0
};

export const createReducer = (state = initialCreateState, action) => {
  switch (action.type) {
    case OPEN_NEW_NOTE: {
      return {
        ...state,
        creating: action.creating,
        completed: action.completed
      };
    }

    case CREATE_NEW: {
      return {
        ...state,
        title: action.newTitle,
        body: action.newBody,
        completed: action.completed,
        creating: action.creating,
        todo_id: action.Id
      };
    }
    default:
      return state;
  }
};
