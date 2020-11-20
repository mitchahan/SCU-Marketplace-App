/* @authors Griffin Langsdorf
 * @lastModifiedBy Griffin Langsdorf
 * Description: Create a product creation page.
 */

 /*
 Name: (string)
 Price: (double)
 Description: (string)
 Photo: (string url?)
 */

import React from "react";
import './style.scss';
import {v4 as uuid} from "uuid";
class ProductCreation extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
          email: window.sessionStorage.getItem('email'),
          product_id: undefined,
          name: undefined,
          price: undefined,
          description: undefined,
          photo: undefined
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }
    
    createProduct() {
        const product = {
          email: this.state.email,
          product_id: uuid(),
          name: this.state.name,
          price: this.state.price,
          description: this.state.description,
          photo: this.state.photo
        }
        
        fetch('/api/createProduct', {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
              'Content-Type': 'application/json'
          }
        })
        .then(res => {
            if(res.status === 200) {
              this.props.history.push('/');
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error creating product please try again');
        });
    }
    
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    
    render() {
        return (
          <div className="base-container">
            <div className="header">Create a Product</div>
              <div className="content">
                <div className="form">
                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                <input type="text" name="Name" placeholder="Name" value = {this.state.name} onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="Price">Price</label>
                <input type="number" name="price" placeholder="Price" value = {this.state.price} onChange={this.handleChange} step=".01"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Description">Description</label>
                  <input type="hidden"/>
                <textarea name="Text1" cols="40" rows="5" placeholder="Write a description about the product here" value = {this.state.description} onChange={this.handleChange}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="Image URL">ImageURL</label>
                <input type="text" name="image" placeholder="Image URL" value = {this.state.photo} onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={this.createProduct}>Create Product</button>
          </div>
        </div>
      );
    }
  }

export default ProductCreation;
