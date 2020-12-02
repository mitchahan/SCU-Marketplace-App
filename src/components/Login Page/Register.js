/* @authors Griffin Langsdorf and Cooper Smith
 * @lastModifiedBy Griffin Langsdorf
 * Description: Create a register page.
 */
import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.scss';

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      isLoggedIn: false,
      first_name: undefined,
      last_name: undefined,
      confirm_password: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  register() {
    console.log('password:', this.state.password);
    console.log('confirm_password:', this.state.confirm_password);
    console.log('email:', this.state.email);
    if (this.state.password.localeCompare(this.state.confirm_password)) {
      alert('Password Mismatch');
    } else if (!this.state.email.toString().includes("@scu.edu")){
      alert('You must register with an SCU email');
    } else {
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
        alert('Error creating account please try again');
      });
    }
  }

  handleChange({ target }) {
    this.setState({
        [target.name]: target.value
    });
  }

  render() {
    return (
      <div className="form-base-container">
        <div className="header">Create Your Account</div>
          <div className="content">
            <Form>
              <Form.Group>
                <Form.Label htmlFor="First Name">First Name</Form.Label>
                <Form.Control type="text" name="first_name" placeholder="Enter First Name" value={ this.state.first_name } onChange={ this.handleChange }/>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="Last Name">Last Name</Form.Label>
                <Form.Control type="text" name="last_name" placeholder="Enter Last Name" value={ this.state.last_name } onChange={ this.handleChange }/>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="Email">Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="Enter Email" value={ this.state.email } onChange={ this.handleChange }/>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter Password" value={ this.state.password } onChange={ this.handleChange }/>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="ConfirmPass">Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm_password" placeholder="Re-enter Password" value={ this.state.confirm_password } onChange={ this.handleChange }/>
              </Form.Group>
            </Form>
          
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

export default Register;
