import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';


/* ------------   ACTION CREATORS     ------------------ */

const login  = currentUser => ({ type: LOGIN, currentUser });
const logout = ()    => ({ type: LOGOUT });


/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}  , action) {
    switch (action.type) {

        case LOGIN:
            return action.user;

        case LOGOUT:
            return {};

        default:
            return currentUser;
    }
}


/* ------------   THUNK CREATORS     ------------------ */

export const loginUser = (user) => dispatch => {
    axios.post('/login', {user})
        .then(res => {
            console.log('session or cookies?',res.data)
            // dispatch(init(res.data))
        })
        .catch(err=>{
            console.error(err);
        });
};

// optimistic
export const logoutUser = id => dispatch => {
    // dispatch(logout(id));

};

