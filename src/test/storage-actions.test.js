import * as storageActions from "../actions/storage-actions";
const newTodo = {
  title: "Hello",
  body: "testing123",
  id: 1
};

describe("storage actions", () => {
  describe("save_Todo", () => {
    it("should save a new todo to the tempStorage Array", () => {
      const expectedActions = {
        type: storageActions.SAVE_TODO,
        newTodo: newTodo
      };
      expect(storageActions.save_Todo(newTodo)).toEqual(expectedActions);
    });
  });
});
