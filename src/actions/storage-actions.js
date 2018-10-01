export const SAVE_TODO = "SAVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const save_Todo = newTodo => {
  return {
    type: SAVE_TODO,
    newTodo
  };
};

export const update_Todo = (id, updatedTitle, updatedBody) => {
  return {
    type: UPDATE_TODO,
    id,
    updatedTitle,
    updatedBody
  };
};

export const delete_Todo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};
