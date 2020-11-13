import React from 'react'
import {NavLink} from 'react-router-dom';
import UserSession from "./UserSession";
import './style.scss';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: UserSession.getEmail(),
      password: UserSession.getPass(),
      isLoggedIn: UserSession.getIsLoggedIn()
    };
  }

  componentDidMount() {
    this.setState({
      email: UserSession.getEmail(),
      password: UserSession.getPass(),
      isLoggedIn: UserSession.getIsLoggedIn()
    });
  }

  render() {
    return(
      <div className = "base-container">
        <div className="header"></div>
        <div className="top-right">
          <button type = "button" className="btn"><NavLink className="link" to="/create-product">Create a Product</NavLink></button>
        </div>
      </div>
    );
  }
}
