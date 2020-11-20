import React from 'react'
import './style.scss';

export default function ProductCard(props) {
  const product = props.product;
  return(
    <div class="card" style="width: 18rem;">
      <img className="card-image"
         src={product.photo}
         alt={product.name}
      />
        <div className="card-content">
          <h3 className = "card-title">{product.name}</h3>
          <p><small>Price: {product.price}</small></p>
          <p className="card-desc">{product.description}</p>
        </div>
    </div>
  )
}
