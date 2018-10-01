import * as storageActions from "../actions/storage-actions";
const newTodo = {
  title: "Hello",
  body: "testing123",
  id: 1
};
const id = 2;
const updatedTitle = "Hi";
const updatedBody = "testing456";

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
  describe("update_Todo", () => {
    it("should update the right todo", () => {
      const expectedActions = {
        type: storageActions.UPDATE_TODO,
        id: id,
        updatedTitle: updatedTitle,
        updatedBody: updatedBody
      };
      expect(storageActions.update_Todo(id, updatedTitle, updatedBody)).toEqual(
        expectedActions
      );
    });
  });
});
