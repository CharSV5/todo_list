import * as createActions from "../actions/create-actions";

const newTitle = "Hello";
const newBody = "testing123";

describe("create actions", () => {
  describe("open_New_Note", () => {
    it("should open up a new note for creation", () => {
      const expectedAction = {
        type: createActions.OPEN_NEW_NOTE,
        creating: true,
        completed: false
      };
      expect(createActions.open_New_Note()).toEqual(expectedAction);
    });
  });

  describe("create_New", () => {
    it("should save a new note", () => {
      const expectedAction = {
        type: createActions.CREATE_NEW,
        title: newTitle,
        body: newBody,
        completed: true,
        creating: false
      };
      expect(createActions.create_New(newTitle, newBody)).toEqual(
        expectedAction
      );
    });
  });
});
