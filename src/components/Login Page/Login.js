/* @authors Griffin Langsdorf and Cooper Smith
 * @lastModifiedBy Griffin Langsdorf
 * Description: Create a login page.
 */
import React from "react";
import { NavLink } from "react-router-dom";
import UserSession from "../UserSession";
import './style.scss';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      isLoggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange({ target }) {
    this.setState({
        [target.name]: target.value
    });
  }

  login() {
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        UserSession.setEmail(this.state.email);
        UserSession.setPass(this.state.password);
        UserSession.setIsLoggedIn(true);
        this.setState({
          email: UserSession.getEmail(),
          password: UserSession.getPass(),
          isLoggedIn: UserSession.getIsLoggedIn()
        });
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
        <div className="base-container">
          <div className="header">Login</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" value={ this.state.email } placeholder="Enter Email" onChange={ this.handleChange }/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter Password" value={ this.state.password } onChange={ this.handleChange }/>
              </div>
            </div>
          </div>
        <div className="footer">
          <button type="submit" className="btn" onClick={this.login}>
            Login
          </button>
          <p>Don't have an account? <NavLink className="link" to="/register" exact>Register</NavLink></p>
        </div>
      </div>
    );
  }
}

export default Login;
