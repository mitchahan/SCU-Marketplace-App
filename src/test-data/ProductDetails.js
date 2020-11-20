/* @author Mitch Hansen
 * @lastModifiedBy Mitch Hansen
 * Description: This file is the test data for a couple of product items. Until we've
 * connected the DB, this will serve as data to populate.
 */

import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard';
//const testProducts = [
//	{
//        product_id: 1,
//        name: 'Textbook',
//        price: 49.99,
//        description: `This is a used textbook for school. Now here's some lorem ipsum to make it adequete:
//                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                    dolore magna aliqua. Cursus euismod quis viverra nibh cras. Nulla facilisi cras fermentum odio eu feugiat.
//                    Accumsan tortor posuere ac ut consequat semper viverra nam. Quis risus sed vulputate odio ut enim blandit volutpat.
//                    Commodo sed egestas egestas fringilla phasellus faucibus. Tempus imperdiet nulla malesuada pellentesque.
//                    Blandit turpis cursus in hac habitasse platea. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eget
//                    dolor morbi non arcu risus quis varius quam. Dictum sit amet justo donec. Dui faucibus in ornare quam viverra orci
//                    sagittis. Sit amet volutpat consequat mauris nunc.`,
//        photo: 'https://www.bookbaby.com/Images/textbook-thumb-largeportrait.png'
//    },
//    {
//        product_id: 2,
//        name: 'Couch',
//        price: 20.00,
//        description: `This is a used Couch to sit on. Now here's some lorem ipsum to make it adequete:
//                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                    dolore magna aliqua. Cursus euismod quis viverra nibh cras. Nulla facilisi cras fermentum odio eu feugiat.
//                    Accumsan tortor posuere ac ut consequat semper viverra nam. Quis risus sed vulputate odio ut enim blandit volutpat.
//                    Commodo sed egestas egestas fringilla phasellus faucibus. Tempus imperdiet nulla malesuada pellentesque.
//                    Blandit turpis cursus in hac habitasse platea. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eget
//                    dolor morbi non arcu risus quis varius quam. Dictum sit amet justo donec. Dui faucibus in ornare quam viverra orci
//                    sagittis. Sit amet volutpat consequat mauris nunc.`,
//        photo: 'https://images-na.ssl-images-amazon.com/images/I/91CeJYT8uaL._AC_SX522_.jpg'
//    },
//    {
//        product_id: 3,
//        name: 'Table',
//        price: 15.00,
//        description: `This is a Table to put stuff on. Now here's some lorem ipsum to make it adequete:
//                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                    dolore magna aliqua. Cursus euismod quis viverra nibh cras. Nulla facilisi cras fermentum odio eu feugiat.
//                    Accumsan tortor posuere ac ut consequat semper viverra nam. Quis risus sed vulputate odio ut enim blandit volutpat.
//                    Commodo sed egestas egestas fringilla phasellus faucibus. Tempus imperdiet nulla malesuada pellentesque.
//                    Blandit turpis cursus in hac habitasse platea. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eget
//                    dolor morbi non arcu risus quis varius quam. Dictum sit amet justo donec. Dui faucibus in ornare quam viverra orci
//                    sagittis. Sit amet volutpat consequat mauris nunc.`,
//        photo: 'https://www.ikea.com/us/en/images/products/ingo-table-pine__0737092_PE740877_S5.JPG'
//    }
//];
//
//const Product = props => {
//	return (
//		<div>
//			<p>Product Id: {props.product_id}</p>
//			<p>Name: {props.name}</p>
//			<p>Price: ${props.price}</p>
//			<p>Description: {props.description}</p>
//            <img src={props.photo} height="200px" width="200px" alt={props.name} />
//		</div>
//	);
//};
//
//Product.propTypes = {
//	product_id: PropTypes.string.isRequired,
//	name: PropTypes.string.isRequired,
//	price: PropTypes.string.isRequired,
//	description: PropTypes.string.isRequired,
//	photo: PropTypes.string.isRequired
//};

export default function ProductDetails(){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const url = '/api/products';
            try {
                const res =  fetch(url);
                const data =  res.json();
        
        //THE DATA IS CONVERTED INTO JSON AND APPENDED TO PRODUCTS
                setProducts(data.results);
            }catch(err){
                console.error(err);
            }
    }, products)
    
    
	return(
		<div>
            <h2>Products For Sale </h2>
           <div>
           {products.filter(product => product.name).map(product => (
                <ProductCard product={product} key={product.product_id} />
            ))}
           </div>
		</div>
	);
};


