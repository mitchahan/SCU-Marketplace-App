/* @author Paul Mason
 * @lastModifiedBy Mitch Hansen
 * Description: Navigation bar found at the top of website
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import Logo from "../../logo.svg";

const Navigation = () => {
    return (
        <div className="nav-menu">
            <div className="nav-logo">
                <img src={Logo} alt="SCU" />
                <h1>SCU Marketplace</h1>
            </div>
            <ul className = "nav-items">
                <li><NavLink className="link" to="/" exact>Home</NavLink></li>
                <li><NavLink className="link" to="/about">About</NavLink></li>
                <li><NavLink className="link" to="/user">User Profile</NavLink></li>
                <li><NavLink className="link" to="/products">Products</NavLink></li>
                <li><NavLink className="link" to="/login">Login</NavLink></li>
                <li><NavLink className="link" to="/register">Register</NavLink></li>
            </ul>
        </div>
    );
}

export default Navigation;
