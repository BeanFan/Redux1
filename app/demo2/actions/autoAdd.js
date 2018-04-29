export const addAction = number => {
  return {
    type: ADD_ACTION,
    number: number
  };
};

export const subAction = number => {
  return {
    type: SUB_ACTION,
    number: number
  };
};

const ADD_ACTION = "ADD_ACTION";
const SUB_ACTION = "SUB_ACTION";
