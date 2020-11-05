/* @author Paul Mason
 * @lastModifiedBy Mitch Hansen
 * Description: Navigation bar found at the top of website 
 */

import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="menu">
            <div clasName = "table">
                <ul className = "hor_lst">
                    <li><NavLink to="/"  exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/user">User Profile</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation