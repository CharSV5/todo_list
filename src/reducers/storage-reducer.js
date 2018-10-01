export const initialStorageReducer = {
  tempStorage: []
};

export const storageReducer = (state = initialStorageReducer, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return [...state, action.newTodo];
    case UPDATE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            title: action.UpdatedTitle,
            body: action.updatedBody
          };
        }
        return item;
      });
  }
};
