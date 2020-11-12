import React from 'react'
import {NavLink} from 'react-router-dom';
import './style.scss';

const HomePage = () => {
  return(
    <div className = "base-container">
      <div className="header">SCU Marketplace</div>
      <div className="top-right">
        <button type = "button" className="btn"><NavLink className="link" to="/create-product">Create a Product</NavLink></button>
      </div>
    </div>
  )
}

export default HomePage
