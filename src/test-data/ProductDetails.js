/* @author Mitch Hansen
 * @lastModifiedBy Mitch Hansen
 * Description: This file is the test data for a couple of product items. Until we've
 * connected the DB, this will serve as data to populate.
 */

import React from 'react'
import PropTypes from 'prop-types'

const testProducts = [
	{
        product_id: 1,
        name: 'Textbook',
        price: 49.99,
        description: `This is a used textbook for school. Now here's some lorem ipsum to make it adequete:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Cursus euismod quis viverra nibh cras. Nulla facilisi cras fermentum odio eu feugiat. 
                    Accumsan tortor posuere ac ut consequat semper viverra nam. Quis risus sed vulputate odio ut enim blandit volutpat. 
                    Commodo sed egestas egestas fringilla phasellus faucibus. Tempus imperdiet nulla malesuada pellentesque. 
                    Blandit turpis cursus in hac habitasse platea. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eget 
                    dolor morbi non arcu risus quis varius quam. Dictum sit amet justo donec. Dui faucibus in ornare quam viverra orci 
                    sagittis. Sit amet volutpat consequat mauris nunc.`,
        photo: 'Null'
    },
    {
        product_id: 2,
        name: 'Couch',
        price: 20.00,
        description: `This is a used Couch to sit on. Now here's some lorem ipsum to make it adequete:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Cursus euismod quis viverra nibh cras. Nulla facilisi cras fermentum odio eu feugiat. 
                    Accumsan tortor posuere ac ut consequat semper viverra nam. Quis risus sed vulputate odio ut enim blandit volutpat. 
                    Commodo sed egestas egestas fringilla phasellus faucibus. Tempus imperdiet nulla malesuada pellentesque. 
                    Blandit turpis cursus in hac habitasse platea. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eget 
                    dolor morbi non arcu risus quis varius quam. Dictum sit amet justo donec. Dui faucibus in ornare quam viverra orci 
                    sagittis. Sit amet volutpat consequat mauris nunc.`,
        photo: 'Null'
    }
];

const Product = props => {
	return (
		<div>
			<p>Product Id: {props.product_id}</p>
			<p>Name: {props.name}</p>
			<p>Price: {props.price}</p>
			<p>Description: {props.description}</p>
			<p>Photo: {props.photo}</p>
		</div>
	);
};

Product.propTypes = {
	product_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired
};

const ProductDetails = props => {
	return(
		<div>
            <Product 
                product_id = {testProducts[0].product_id} 
                name = {testProducts[0].name} 
                price = {testProducts[0].price} 
                description = {testProducts[0].description} 
                photo = {testProducts[0].photo} 
            />
            <Product 
                product_id = {testProducts[1].product_id} 
                name = {testProducts[1].name} 
                price = {testProducts[1].price} 
                description = {testProducts[1].description} 
                photo = {testProducts[1].photo} 
            />
		</div>
	);
};

export default ProductDetails;
