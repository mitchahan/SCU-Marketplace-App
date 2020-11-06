import React from "react";
import './style.scss';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="base-container">
          <div className="header">Login</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password"/>
              </div>
            </div>
          </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
