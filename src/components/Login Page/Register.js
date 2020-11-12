import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss';

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      first_name: undefined,
      last_name: undefined,
      password: undefined,
      confirm_password: undefined
    };

    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  register() {
    // if (this.state.password == this.state.confirmPassword) {
      const user = {
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password
      }

      fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error creating account please try again');
      });
    // } else {
    //   alert('Password Mismatch');
    // }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    }, () => {
      console.log(target);
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Create Your Account</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="First Name">First Name</label>
                <input type="text" name="first_name" placeholder="Enter First Name" value={ this.state.first_name } onChange={ this.handleChange }/>
              </div>
              <div className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" name="last_name" placeholder="Enter Last Name" value={ this.state.last_name } onChange={ this.handleChange }/>
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" placeholder="Enter Email" value={ this.state.email } onChange={ this.handleChange }/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter Password" value={ this.state.password } onChange={ this.handleChange }/>
              </div>
              <div className="form-group">
                <label htmlFor="ConfirmPass">Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="Re-enter Password" value={ this.state.confirmPassword } onChange={ this.handleChange }/>
              </div>
            </div>
          
          <div className="footer">
            <button type="submit" className="btn" onClick={ this.register }>
              Create Account
            </button>
            <p>Already have an account? <NavLink className="link" to="/login" exact>Login</NavLink></p>
          </div>
        </div>
      </div>
    );
  }
}
