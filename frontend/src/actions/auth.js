import axios from 'axios';

import { AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT, SIGNUP_USER } from './types';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// LOGIN USER
export const authStart = () => dispatch => {
    dispatch({
        type: AUTH_START,
        payload: null
    })
}

export const loginUser = (username, password, callback) => dispatch => {
    axios.post('/auth/login/', {
        username: username,
        password: password
    })
    .then(res => {
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data.key
        });
        callback();
    })
    .catch(err => console.log(err))
}

export const logoutUser = () => dispatch => {
    dispatch({
        type: AUTH_LOGOUT,
        payload: null
    })
}

export const registerUser = (username, email, password1, password2) => dispatch => {
    axios.post('/auth/registration/', {
        username: username,
        email: email,
        password1: password1,
        password2: password2
    })
    .then(res => {
        dispatch({
            type: SIGNUP_USER,
            payload: null
        })
    })
    .catch(err => console.log(err))
}