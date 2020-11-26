import {
  GET_USERS,
  GET_USER_BY_ID,
  USERS_ERROR,
  ADD_NEW_POST,
  GET_POSTS,
  GET_POST_BY_ID,
  DELETE_POST,
  POSTS_ERROR,
} from "../types";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getUserByID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: GET_USER_BY_ID,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getPosts = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}/posts`
    );
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POSTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getPostByID = (userID, postID) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}/posts`
    );
    dispatch({
      type: GET_POST_BY_ID,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POSTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const deletePost = (userID,postID) => async dispatch => {
    try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/users/${userID}/posts/${postID}`
        );
        dispatch({
          type: DELETE_POST,
          payload: postID,
        });
      } catch (e) {
        dispatch({
          type: POSTS_ERROR,
          payload: console.log(e),
        });
      }
}

export const addPost = (post, userID) => async dispatch => {
    try {
        await axios.post(
          `https://jsonplaceholder.typicode.com/users/${userID}/posts`
        );
        dispatch({
          type: ADD_NEW_POST,
          payload: post,
        });
      } catch (e) {
        dispatch({
          type: POSTS_ERROR,
          payload: console.log(e),
        });
      }
}