import { FETCH_USERS, UPDATE_USERS} from './../actions/actionTypes';

const initialState = {
    users: []
}

export function rootReducer( state = initialState, action){
    switch(action.type){
        case UPDATE_USERS: 
            return{
                ...state,
                users: [
                    ...action.users
                ]
            };
        case FETCH_USERS:
            break;
        default: {
            return state
        }
        
            
    }
}

