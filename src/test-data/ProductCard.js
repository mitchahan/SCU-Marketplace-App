/* @author Mitch Hansen
 * @lastModifiedBy Mitch Hansen
 * Description: This file is the test data for a couple of product items. Until we've
 * connected the DB, this will serve as data to populate.
 */

import React from 'react'

export default function ProductCard(props) {
    const product = props.product;
    return (
        <div>
            <img
                src = {product.photo}
                alt = {product.name + 'picture'}
            />
            <div>
                <h3>{product.name}</h3>
                <p> Price: ${product.price}</p>
                <p> Description: {product.description}</p>
            </div>
        </div>
    )
}
