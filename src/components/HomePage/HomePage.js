import React from 'react'
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar.js'
import './style.scss';
import ProductCard from './ProductCard.js'



const HomePage = () => {
  return(
    <div className = "base-container">
      <div className="header"> Search: </div>
      <SearchBar />

      <div className = "searchButton">
        <button type = "button" className="btn" float="right">searchButton</button>
      </div>

      <div className = "card-list">
          {'scu-marketplace'.products.filter(product => product.id_path).map(product => (
              <ProductCard product={product} key={product.id} />
              ))}
      </div>

      <div className="top-right">
        <button type = "button" className="btn" float="right"><NavLink className="link" to="/create-product">Create New Listing</NavLink></button>
      </div>

    </div>
  )
}

export default HomePage
