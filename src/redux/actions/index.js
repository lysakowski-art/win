import {GET_USERS,GET_USER_BY_ID, USERS_ERROR} from "../types"
import axios from "axios"

export const getUsers = () =>  async dispatch => {

    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getUserByID = (id) =>  async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: GET_USER_BY_ID,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}