/* @author Paul Mason
 * @lastModifiedBy Mitch Hansen
 * Description: Navigation bar found at the top of website
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import UserSession from "../UserSession";
import './Navigation.css';
import Logo from "../../siteLogo.svg";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: UserSession.getEmail(),
          password: UserSession.getPass(),
          isLoggedIn: UserSession.getIsLoggedIn()
        };
    
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.setState({
            email: UserSession.getEmail(),
            password: UserSession.getPass(),
            isLoggedIn: UserSession.getIsLoggedIn()
        });
        console.log('navigation', this.state);
    }

    logout() {
        UserSession.setEmail(undefined);
        UserSession.setPass(undefined);
        UserSession.setIsLoggedIn(false);
        this.setState({
            email: UserSession.getEmail(),
            password: UserSession.getPass(),
            isLoggedIn: UserSession.getIsLoggedIn()
        });
        // this.props.history.push('/');
    }

    render() {
        return (
            <div className="nav-menu">
                <div className="nav-logo">
                    <img src={Logo} alt="SCU" />
                    <h1>SCU Marketplace</h1>
                </div>
                {UserSession.getIsLoggedIn()
                    ? <ul className = "nav-items">
                        <li><NavLink className="link" to="/" exact>Home</NavLink></li>
                        <li><NavLink className="link" to="/about">About</NavLink></li>
                        <li><NavLink className="link" to="/user">User Profile</NavLink></li>
                        <li><NavLink className="link" to="/products">Products</NavLink></li>
                        <li><NavLink className="link" to="/" onClick={this.logout()}>Logout</NavLink></li>
                      </ul>
                    : <ul className = "nav-items">
                        <li><NavLink className="link" to="/" exact>Home</NavLink></li>
                        <li><NavLink className="link" to="/about">About</NavLink></li>
                        <li><NavLink className="link" to="/user">User Profile</NavLink></li>
                        <li><NavLink className="link" to="/products">Products</NavLink></li>
                        <li><NavLink className="link" to="/login">Login</NavLink></li>
                        <li><NavLink className="link" to="/register">Register</NavLink></li>
                      </ul>
                    }
            </div>
        );
    }
}

export default Navigation;
