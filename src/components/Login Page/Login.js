/* @authors Griffin Langsdorf and Cooper Smith
 * @lastModifiedBy Griffin Langsdorf
 * Description: Create a login page.
 */
import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
        window.sessionStorage.setItem('email', this.state.email);
        window.sessionStorage.setItem('password', this.state.password);
        window.sessionStorage.setItem('isLoggedIn', true);

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
        <div className="form-base-container">
          <div className="header">Login</div>
          <div className="content">
            <Form>
              <Form.Group>
                <Form.Label htmlFor="Email">Email</Form.Label>
                <Form.Control type="email" name="email" value={ this.state.email } placeholder="Enter Email" onChange={ this.handleChange }/>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter Password" value={ this.state.password } onChange={ this.handleChange }/>
              </Form.Group>
            </Form>
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
