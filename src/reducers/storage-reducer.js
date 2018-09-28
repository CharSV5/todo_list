export const initialStorageReducer = {
  tempStorage: []
};

export const storageReducer = (state = initialStorageReducer, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return {
        ...state,
        tempStorage: [...state.arr, action.newTodo]
      };
  }
};
