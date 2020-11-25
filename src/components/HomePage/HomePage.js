import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.js';
import './style.scss';
import ProductDeck from './ProductDeck.js';
import Button from 'react-bootstrap/Button';
import SortFilter from './SortFilter.js'

class HomePage extends React.Component {
  render() {
    return(
      <div className = "base-container">
        <div className="header"> Search: </div>
        <SearchBar />
        <div className="top-right">
          {window.sessionStorage.getItem('isLoggedIn') === "true"
            ? <button type = "button" className="btn" float="right"><NavLink className="link" to="/create-product">Create New Listing</NavLink></button>
            : <></>
          }
        </div>
        <div className="top-right">
          <SortFilter />
        </div>
        <ProductDeck />
      </div>
    );
  }
}

export default HomePage;
