import React from 'react'
import {Grid} from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';
import './Card.scss';

const HomePage = () => {
  return(
    <div className = "base-container">
      <div className = "card-container">
        <div className="top-right">
          <button type = "button" className="btn"><NavLink className="link" to="/create-product">Create a Product</NavLink></button>
        </div>
        <div className = "card">
             <img className="card--image"
                src="Desktop/SCU-Marketplace-App/public/favicon.ico"
             />
             <div className="card--content">
                 <h3 className = "card--title"> Product Name </h3>
                 <p><small> $49.99 </small></p>
                 <p className="card--desc"> This is my chair, it's a great chair </p>
             </div>
        </div>
        <div className="card-footer">
          <button type="button" className="btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )

}

export default HomePage
