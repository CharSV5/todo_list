export const OPEN_NEW_NOTE = "OPEN_NEW_NOTE";
export const CREATE_NEW = "CREATE_NEW";

export const open_New_Note = () => {
  return {
    type: OPEN_NEW_NOTE,
    creating: true,
    completed: false
  };
};

export const create_New = (newTitle, newBody) => {
  return {
    type: CREATE_NEW,
    title: newTitle,
    body: newBody,
    completed: true,
    creating: false
  };
};
