import {
  SAVE_TODO,
  SHOW_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "../actions/storage-actions.js";
import { storageReducer } from "../reducers/storage-reducer";

const action1 = {
  type: SAVE_TODO,
  newTodo: {
    title: "Hello",
    body: "123",
    id: 1
  }
};

const action4 = {
  type: SAVE_TODO,
  newTodo: {
    title: "Hi",
    body: "456",
    id: 2
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
  it("should update the requested todo", () => {
    const action3 = {
      type: UPDATE_TODO,
      id: 1,
      updatedTitle: "Hi",
      updatedBody: "456"
    };
    const expectedState = [
      {
        title: "Hi",
        body: "456",
        id: 1
      }
    ];
    expect(
      storageReducer(undefined, action1),
      storageReducer(undefined, action3)
    ).toEqual(expectedState);
  });
  it("should delete the requested todo", () => {
    const action5 = {
      type: DELETE_TODO,
      id: 1
    };
    const expectedState = [
      {
        title: "Hi",
        body: "456",
        id: 2
      }
    ];
    expect(
      storageReducer(undefined, action1),
      storageReducer(undefined, action4),
      storageReducer(undefined, action5)
    ).toEqual(expectedState);
  });
  it("can add multiple todos", () => {
    const expectedState = [
      {
        title: "Hello",
        body: "123",
        id: 1
      },
      {
        title: "Hi",
        body: "456",
        id: 2
      }
    ];
    expect(
      storageReducer(undefined, action1),
      storageReducer(undefined, action4)
    ).toEqual(expectedState);
  });
});
