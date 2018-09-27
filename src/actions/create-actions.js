export const OPEN_NEW_NOTE = "OPEN_NEW_NOTE";

export const open_New_Note = () => {
  return {
    type: OPEN_NEW_NOTE,
    creating: true,
    completed: false
  };
};
