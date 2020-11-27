import {
  GET_USERS,
  GET_USER_BY_ID,
  USERS_ERROR,
  ADD_NEW_POST,
  GET_POSTS,
  GET_POST_BY_ID,
  DELETE_POST,
  POSTS_ERROR,
  GET_COMMENTS
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
      `https://jsonplaceholder.typicode.com/users/${userID}/posts?id=${postID}`
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

export const deletePost = (postID) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postID}`, {withCredentials: true}
    );
    if (res.status === 200) {
      dispatch({
        type: DELETE_POST,
        payload: postID,
      });
    } else {
      console.log(res.data);
    }
  } catch (e) {
    dispatch({
      type: POSTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const addPost = (post, userID) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users/${userID}/posts`,
      post
    );
    if (res.status === 201) {
      dispatch({
        type: ADD_NEW_POST,
        payload: post,
      });
    } else {
      console.log(res.data);
    }
  } catch (e) {
    dispatch({
      type: POSTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getComments = (userID,postID) => async dispatch => {
  try{
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}/comments?postId=${postID}`
      )
      dispatch({
        type: GET_COMMENTS,
        payload: res.data,
      })
    } catch (e) {
    dispatch({
      type: POSTS_ERROR,
      payload: console.log(e),
  
    })
  }
}
