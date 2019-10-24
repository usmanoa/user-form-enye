import {ADD_USER} from './../actions/actionTypes';

const initialSate = {
    users: []
}

export function rootReducer( state = initialSate, action){
    switch(action.type){
        case ADD_USER: {
            return{
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            }
        }
        default: {
            return state
        }
            
    }
}