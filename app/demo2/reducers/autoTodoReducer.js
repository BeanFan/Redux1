const autoTodoReducer = (state = 0, action) => {

  switch (action.type) {
    case "ADD_ACTION":
      return state + action.number;
    case "SUB_ACTION":
      return state - action.number;
    default:
      return state;
  }
};

export default autoTodoReducer;
