import * as storageActions from "../actions/storage-actions";
const newTodo = {
  title: "Hello",
  body: "testing123",
  id: 1
};
const id = 2;
const updatedTitle = "Hi";
const updatedBody = "testing456";
const title = "12345";

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
  describe("show_Todo", () => {
    it("should provide a title which to search by", () => {
      const expectedActions = {
        type: storageActions.SHOW_TODO,
        title: title
      };
      expect(storageActions.show_Todo(title)).toEqual(expectedActions);
    });
  });
  describe("update_Todo", () => {
    it("should provide info for updating the todo", () => {
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
  describe("delete_Todo", () => {
    it("should ofer the right id for deletion", () => {
      const expectedActions = {
        type: storageActions.DELETE_TODO,
        id: id
      };
      expect(storageActions.delete_Todo(id)).toEqual(expectedActions);
    });
  });
});
