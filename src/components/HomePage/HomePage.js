import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Card, CardDeck, CardColumns, Row, Col, Button, FormControl, InputGroup, Container } from 'react-bootstrap';
import './style.scss';
// import ProductDeck from './ProductDeck.js';
import SortFilter from './SortFilter.js'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      error: undefined,
      products: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
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

  handleChange({ target }) {
    this.setState({
        [target.name]: target.value
    });
  }

  search() {
    const search = {
      query: this.state.search
    }

    fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify(search),
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
      (error) => {
        this.setState({ error });
      }
    );
  }

  render() {
    const fontSize = {fontSize: "1rem"};
    const imageStyle = { maxHeight: "50%", width: "100%" }
    const { error, products } = this.state;
    return(
      <div className = "base-container">
        <Link className="btn" variant="primary" to="/purchase">Purchase</Link>
        <Container fluid>
          <Row>
            <Col xs={6}>
              <div className="pt-3 p-2 d-inline-flex">
                <SortFilter />
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
        <div className="header"> Search: </div>
        <InputGroup className="mb-3 pr-3 pl-3">
          <FormControl
            name="search"
            placeholder="Search..."
            aria-label="search"
            aria-describedby="basic-addon2"
            value={ this.state.search }
            onChange={ this.handleChange }
          />
          <InputGroup.Append>
            <Button
              style={fontSize}
              variant="outline-primary"
              type="submit"
              onClick={ this.search }>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {error
          ? <p>{"Nothing Found."}</p>
          : <div className="pl-5 pr-0">
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
                                  ? <Link className="btn" variant="primary" to="/purchase">Purchase</Link>
                                  : <Link className="btn" variant="primary" to="/register">Purchase</Link>
                              }
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
