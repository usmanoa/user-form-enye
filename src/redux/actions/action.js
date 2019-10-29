import {FETCH_USERS, UPDATE_USERS} from './actionTypes'

export function fetchUsers(){
    return {type: FETCH_USERS}
}

export function updateUsers(users){
    return {type: UPDATE_USERS, users}
}

