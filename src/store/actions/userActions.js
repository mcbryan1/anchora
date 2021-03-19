import axios from 'axios'
import {url} from '../../api'

export const addUser = (user) =>{
    return(dispatch, getState) =>{
        axios.post(`${url}/items`, user)
        .then(user =>{
            dispatch({
                type: "ADD_USER",
                user
            })
        })
        .catch (error =>{
            console.log(error.response)
        })
    }
}