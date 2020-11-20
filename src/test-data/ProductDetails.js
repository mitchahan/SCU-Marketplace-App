import React from 'react';

class ProductList extends React.Component {
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
        (error) => {
          this.setState({ error });
        }
      )
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
          {products.map(product => (
            <tr key={product.product_id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.photo}</td>
            </tr>
            ))}
        </div>
      )
    }
  }
}

export default ProductList;
