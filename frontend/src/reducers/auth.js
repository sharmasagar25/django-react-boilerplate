import { AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT, SIGNUP_USER} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token: null
}

export default function(state=initialState, action) {
    switch(action.type) {
        case AUTH_START:
            return state;
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
        case AUTH_LOGOUT:
            return initialState;
        case SIGNUP_USER:
            return initialState;
        default:
            return state;
    }
}