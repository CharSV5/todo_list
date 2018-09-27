export const initialCreateState = {
  creating: false,
  title: "",
  body: "",
  completed: false
};

export const createReducer = (state = initialCreateState, action) => {
  switch (action.type) {
    case OPEN_NEW_NOTE: {
      return [
        ...state,
        {
          creating: true,
          completed: false
        }
      ];
    }

    case CREATE_NEW: {
      return [
        ...state,
        {
          title: action.newTitle,
          body: action.newBody,
          completed: true,
          creating: false
        }
      ];
    }
    default:
      return state;
  }
};
