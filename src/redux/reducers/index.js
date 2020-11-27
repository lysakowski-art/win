import { combineReducers } from "redux";
import usersReducer from "./usersReducer"
import postsReducer from "./postsReducer"
import commentsReducer from "./commentsReducer"
export default combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
});
