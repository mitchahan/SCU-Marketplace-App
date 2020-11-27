/* @author Paul Mason
 * @lastModifiedBy Mitch Hansen
 * Description: Navigation bar found at the top of website
 */

import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from "../../siteLogo.svg";
import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" className="pt-3 pb-3">
                <Navbar.Brand>
                    <NavLink className="link" to="/">
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="SCU"
                        />{' '}
                        SCU Marketplace
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    {window.sessionStorage.getItem('isLoggedIn') === "true"
                        ? <>
                            <NavLink className="link" to="/about">About</NavLink>
                            <NavLink className="link" to="/products">My Products</NavLink>
                            <NavLink className="link" to="/user">Account</NavLink>
                            <NavLink className="link" to="/" onClick={ () => { window.sessionStorage.setItem('isLoggedIn', false) } }>Logout</NavLink>
                          </>
                        : <>
                            <NavLink className="link" to="/about">About</NavLink>
                            <NavLink className="link" to="/products">Products</NavLink>
                            <NavLink className="link" to="/login">Login</NavLink>
                            <NavLink className="link" to="/register">Register</NavLink>
                          </>
                    }
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
