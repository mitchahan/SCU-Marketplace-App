import React from 'react';
import ProductCard from './ProductCard.js'
import {CardDeck} from 'react-bootstrap';
import {CardColumns} from 'react-bootstrap';


class ProductDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          products: []
        }
      }
    render() {
        const { error, products} = this.state;
        if(error) {
            return (
              <div>
                  Error: {error.message}
                  JSON: {products}
              </div>
            )
          } else {
            return(
                <div>
                    <CardDeck>
                        <CardColumns>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </CardColumns>
                    </CardDeck>
                </div>
            );
        }
    }
}
    export default ProductDeck