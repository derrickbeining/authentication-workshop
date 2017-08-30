import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addUser} from '../redux/users';
import history from '../history';

/* -----------------    COMPONENT     ------------------ */

class Signup extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-block btn-primary">Sign Up!</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>Signup with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

}

/* -----------------    CONTAINER     ------------------ */


const mapDispatch = (dispatch) => {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      const credentials = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      dispatch(addUser(credentials))
        .then(user => history.push(`/users/${user.id}`))
    }
  }
}

export default withRouter(connect(null, mapDispatch)(Signup));
