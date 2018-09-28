export const SAVE_TODO = "SAVE_TODO";

export const save_Todo = newTodo => {
  return {
    type: SAVE_TODO,
    newTodo
  };
};
