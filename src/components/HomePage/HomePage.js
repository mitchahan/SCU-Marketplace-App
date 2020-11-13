import React from 'react'
<<<<<<< Updated upstream:src/components/HomePage.js

const HomePage = () => {
  return(
    <div>
      <h1> SCU MARKETPLACE </h1>
=======
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar'
import './style.scss';

const HomePage = () => {
  return(
    <div className = "base-container">

    <SearchBar />
      <div className="top-right">
        <button type = "button" className="btn"><NavLink className="link" to="/create-product">Create a Product</NavLink></button>
      </div>
>>>>>>> Stashed changes:src/components/HomePage/HomePage.js
    </div>
  )
}

export default HomePage
