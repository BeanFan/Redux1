const visibilityFilter = (state = "SHOW_ALL", action) => {
  console.error("vis reducer");
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
