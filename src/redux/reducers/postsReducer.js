import { ADD_NEW_POST, GET_POSTS, DELETE_POST, GET_POST_BY_ID } from "../types";

const initialState = {
  post: {},
  posts: [],
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        post: action.payload,
      };
    case DELETE_POST:
        console.log(action.payload)
      return {
        ...state,
        posts: state.posts.filter((post) => {
          if (post.id !== action.payload) return post;
        }),
      };
    default:
      return state;
  }
};
export default postsReducer;
