import React from 'react'
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar.js';
import './style.scss';
import ProductCard from './ProductCard.js';


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
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    );
  }
}

export default HomePage;
