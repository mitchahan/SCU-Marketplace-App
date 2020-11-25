import React from 'react';
import './style.scss'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: []
    }
  }
  // componentDidMount() {
  //   fetch('/api/products')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           products: result
  //         });
  //       },
  //       (error)=>{
  //         this.setState({ error });
  //       }
  //     );
  // }
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
          <Card border="dark" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.ikea.com/us/en/images/products/martin-chair-black-black__0729761_PE737128_S5.JPG"/>
            <Card.Body>
              <Card.Title>Chair</Card.Title>
              <Card.Subtitle>Price: $12.00</Card.Subtitle>
              <Card.Text>
                It's a sturdy chair worth the price
              </Card.Text>
              <Button variant="primary">Link to the user page</Button>
            </Card.Body>
          </Card>
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
