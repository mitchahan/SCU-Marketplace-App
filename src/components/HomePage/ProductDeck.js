import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {CardDeck} from 'react-bootstrap';
import {CardColumns} from 'react-bootstrap';


export default class ProductDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: props.error,
          products: props.products
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
        const imageStyle = { maxHeight: "50%", width: "100%" }
        if(error) {
            return (
              <div>
                  Error: {error.message}
                  JSON: {products}
              </div>
            )
          } else {
            return(
                <div className="pl-5 pr-0">
                    <CardDeck>
                        <CardColumns>
                        {products.map(product => (
                            <Card key={products.product_id} border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={imageStyle} src={product.photo}/>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Subtitle>Price: ${product.price}</Card.Subtitle>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    {window.sessionStorage.getItem('isLoggedIn') === "true"
                                        ? <Link className="btn" variant="primary" to="/Purchase">Purchase</Link>
                                        : <Link className="btn" variant="primary" to="/register">Purchase</Link>
                                    }
                                </Card.Body>
                            </Card>
                        ))}
                        </CardColumns>
                    </CardDeck>
                </div>
            );
        }
    }
}
