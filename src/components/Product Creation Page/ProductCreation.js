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
export default class ProductCreation extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <div className="base-container">
            <div className="header">Create a Product</div>
              <div className="content">
                <div className="form">
                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                  <input type="text" name="Name" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Price">Price</label>
                  <input type="number" name="price" placeholder="Price"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Description">Description</label>
                  <input type="hidden"/>
                  <textarea name="Text1" cols="40" rows="5" placeholder="Write a description about the product here"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="Image URL">ImageURL</label>
                  <input type="url" name="image" placeholder="Image URL"/>
                </div>
              </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Create Product</button>
          </div>
        </div>
      );
    }
  }            