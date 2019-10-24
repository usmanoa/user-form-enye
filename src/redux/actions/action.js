import {ADD_USER} from './actionTypes'

let id = 0;


export function addUser(user){
    return {type: ADD_USER, user:{ ...user, key: ++id}}
}