export const CREATE_NEW = "CREATE_NEW";
export const COMPLETED = "COMPLETED";
let nextToDoID = 0;

export const create_New = (newTitle, newBody) => {
  return {
    type: CREATE_NEW,
    newTitle,
    newBody,
    id: (nextToDoID += 1)
  };
};

export const completed = () => {
  return {
    type: COMPLETED
  };
};
