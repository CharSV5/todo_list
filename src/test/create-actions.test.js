import * as createActions from "../actions/create-actions";

describe("create actions", () => {
  describe("open_New_Note", () => {
    it("should open up a new note cor creation", () => {
      const expectedAction = {
        type: createActions.OPEN_NEW_NOTE,
        creating: true,
        completed: false
      };
    });
  });
});
