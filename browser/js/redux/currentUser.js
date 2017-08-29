import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

// const INITIALIZE = 'INITIALIZE_USER';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP'


/* ------------   ACTION CREATORS     ------------------ */

const login = currentUser => ({type: LOGIN, currentUser});
const logout = () => ({type: LOGOUT});



/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
    switch (action.type) {

        case LOGIN:
            return action.currentUser;

        case LOGOUT:
            return {};

        default:
            return currentUser;
    }
}


/* ------------   THUNK CREATORS     ------------------ */

export const loginUser = (credentials) => dispatch => {
    axios.post('/login', credentials)
        .then(res => res.data)
        .then(user => {
            dispatch(login(user))
        })
        .catch(err => {
            console.error(err);
        });
};

// optimistic
export const logoutUser = id => dispatch => {
    // dispatch(logout(id));

};

export const signup = (credentials) => dispatch => {
    axios.post('/signup', credentials)
        .then(res => res.data)
        .then(newUser => {
            dispatch(login(newUser))
        })
        .catch(err => console.error(err))
}

