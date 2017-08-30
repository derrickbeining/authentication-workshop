import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

// const INITIALIZE = 'INITIALIZE_USER';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';
const CHECK_SESSION = 'CHECK_SESSION';


/* ------------   ACTION CREATORS     ------------------ */

export const login = currentUser => ({type: LOGIN, currentUser});
export const logout = () => ({type: LOGOUT});
// export const checkSession = (user) => ({type: CHECK_SESSION, user})



/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case LOGIN:
      return action.currentUser;

    case LOGOUT:
      return {};

    case CHECK_SESSION:
      return action.user

    default:
      return currentUser;
  }
}


/* ------------   THUNK CREATORS     ------------------ */

export const loginUser = (credentials) => dispatch => {
  return axios.post('/login', credentials)
    .then(res => res.data)
    .then(user => {
      dispatch(login(user))
      return user
    })
    .catch(err => {
      console.error(err);
    });
};

// optimistic
export const logoutUser = () => dispatch => {
  axios.post('/logout')
    .then(res => {
      console.log('you are logout!', res);
      dispatch(logout());
    })
    .catch(err => {
      console.error(err);
    });
};

export const addUser = (credentials) => dispatch => {
  return axios.post('/signup', credentials)
    .then(res => res.data)
    .then(newUser => {
      dispatch(login(newUser))
      return newUser
    })
    .catch(err => console.error(err))
}

export const checkSession = () => dispatch => {
  return axios.get('/api/auth/me')
    .then(res => res.data)
    .then(user => {
      dispatch(login(user))
      return user
    })
}

