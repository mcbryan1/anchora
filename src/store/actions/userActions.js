import axios from 'axios'
import {url} from '../../api'


// Get All Users
export const getUsers = () =>{
    return(dispatch) =>{
        axios.post(`${url}/categories`)
        .then(data =>{
            dispatch({
                type: "GET_USERS",
                data
            })
        })
        .catch (error =>{
            console.log(error.response)
        })
    }
}

// Add A User
export const addUser = (data) =>{
    return(dispatch, getState) =>{
        axios.post(`${url}/categories`, data)
        .then(data =>{
            dispatch({
                type: "ADD_USER",
                data
            })
        })
        .catch (error =>{
            console.log(error.response)
        })
    }
}

