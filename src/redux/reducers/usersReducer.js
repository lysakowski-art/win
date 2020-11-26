import { GET_USERS, GET_USER_BY_ID } from "../types";

const initialState = {
  user: {},
  users: []
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};
export default usersReducer;
