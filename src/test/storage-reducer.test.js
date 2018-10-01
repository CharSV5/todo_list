import { SAVE_TODO, SHOW_TODO } from "../actions/storage-actions.js";
import { storageReducer } from "../reducers/storage-reducer";

const action1 = {
  type: SAVE_TODO,
  newTodo: {
    title: "Hello",
    body: "123",
    id: 1
  }
};

describe("storageReducer", () => {
  it("should save a todo in an array", () => {
    const expectedState = [
      {
        title: "Hello",
        body: "123",
        id: 1
      }
    ];

    expect(storageReducer(undefined, action1)).toEqual(expectedState);
  });
  it("should show the right todo", () => {
    const action2 = {
      type: SHOW_TODO,
      title: "Hello"
    };
    const expectedState = [
      {
        title: "Hello",
        body: "123",
        id: 1
      }
    ];
    expect(
      storageReducer(undefined, action1),
      storageReducer(undefined, action2)
    ).toEqual(expectedState);
  });
});
