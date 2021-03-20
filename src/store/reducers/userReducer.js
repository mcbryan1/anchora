const userReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.data
    case "ADD_USER":
      return [action.data, ...state];
    default:
      return state;
  }
};

export default userReducer;
