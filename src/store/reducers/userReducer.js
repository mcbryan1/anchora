const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [action.data.user, ...state];
    default:
      return state;
  }
};

export default userReducer;
