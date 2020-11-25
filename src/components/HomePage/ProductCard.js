import React from 'react';
import './style.scss'

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: []
    }
  }
  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            products: result
          });
        },
        (error)=>{
          this.setState({ error });
        }
      );
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
          <h2>Products</h2>
            <div className="card-content">
                <h3 className = "card-title"></h3>
                <p><small>Product name: </small> Chair </p>
                <p> Price: <small>$56.99</small></p>
                <p className="card-desc">This chair is my favorite chair, I have had it since I was 2 years old.</p>
             </div>
           {/*products.map(product => (
             <tr key={product.product_id}>
                 <td>{product.name}</td>
                 <td>{product.price}</td>
                 <td>{product.description}</td>
                 <td>{product.photo}</td>
             </tr>
           ))*/}
        </div>
      )
    }
  }
}

export default ProductCard;
