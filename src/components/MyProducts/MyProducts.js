import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardDeck, CardColumns, Row, Col, Button, Container } from 'react-bootstrap';
import './style.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      error: undefined,
      products: []
    };

    this.delete = this.delete.bind(this);
    this.sell = this.sell.bind(this);
  }

  componentDidMount() {
    const email = {
      email: window.sessionStorage.getItem('email'),
    };
    fetch('/api/myProducts',{
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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

  delete(id) {
    const product_id = {
      product_id: id,
    };

    fetch('/api/delete',{
      method: 'POST',
      body: JSON.stringify(product_id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(
        () => {
          const email = {
            email: window.sessionStorage.getItem('email'),
          };
          fetch('/api/myProducts',{
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
              'Content-Type': 'application/json'
            }
          })
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
        },
        (error)=>{
            this.setState({ error });
        }
    );
  }

  sell(id) {
    const product_id = {
      product_id: id,
    };

    fetch('/api/sell',{
      method: 'POST',
      body: JSON.stringify(product_id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => {
      const email = {
        email: window.sessionStorage.getItem('email'),
      };
      fetch('/api/myProducts',{
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
          'Content-Type': 'application/json'
        }
      })
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
    },
    (error)=>{
        this.setState({ error });
    });
  }

  render() {
    const imageStyle = { maxHeight: "50%", width: "100%" }
    const { error, products } = this.state;
    return(
      <div className = "base-container">
        <Container fluid>
          <Row>
            <Col xs={6}>
              <div className="pt-3 p-2 d-inline-flex">
              
              </div>
            </Col>
            <Col xs={6} className="justify-content-end d-inline-flex">
              <div className="p-2 d-inline-flex">
                {window.sessionStorage.getItem('isLoggedIn') === "true"
                  ? <button type = "button" className="btn pr-1" float="right"><NavLink className="link" to="/create-product">Create New Listing</NavLink></button>
                  : <></>
                }
              </div>
            </Col>
          </Row>
        </Container>
        <div className="header"> My Products </div>
        {error
          ? <p>{"Nothing Found."}</p>
          : <div className="pl-5 pr-0">
              <CardDeck>
                  <CardColumns>
                  {products.map(product => (
                      <Card key={product.product_id} border="dark" style={{ width: '18rem' }}>
                          <Card.Img variant="top" style={imageStyle} src={product.photo}/>
                          <Card.Body>
                              <Card.Title>{product.name}</Card.Title>
                              <Card.Subtitle>Price: ${product.price}</Card.Subtitle>
                              <Card.Text>
                                  {product.description}
                              </Card.Text>
                              {product.is_sold}
                              <Button className="mb-2" variant="primary" onClick={() => this.delete(product.product_id)}>Delete</Button>
                              <Button variant="primary" onClick={() => this.sell(product.product_id)}>Mark as sold</Button>
                          </Card.Body>
                      </Card>
                  ))}
                  </CardColumns>
              </CardDeck>
          </div>
        }
      </div>
    );
  }
}

export default HomePage;
