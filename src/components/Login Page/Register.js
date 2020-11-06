import React from "react";

export default class Register extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="base-container">
          <div className="header">Create Your Account</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="First Name">First Name</label>
                <input type="text" name="firstName" placeholder="First Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Password"/>
              </div>
              <div className="form-group">
                <label htmlFor="ConfirmPass">Confirm Password</label>
                <input type="text" name="password" placeholder="Password"/>
              </div>
            </div>
          </div>
        <div className="footer">
          <button type="button" className="btn">
            Create Account
          </button>
      </div>
      </div>
    );
  }
}
