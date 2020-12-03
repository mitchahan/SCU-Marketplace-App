import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Form, Card, CardDeck, CardColumns, Row, Col, Button, FormControl, InputGroup, Container } from 'react-bootstrap';
import './style.scss';
// import ProductDeck from './ProductDeck.js';
// import SortFilter from './SortFilter.js'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      error: undefined,
      products: [],
      value: 'default'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.search = this.search.bind(this);
    this.sort = this.sort.bind(this);
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

  handleKeypress(e) {
    // it triggers by pressing the enter key    
    if (e.keyCode === 13) {
      this.search();    
    }
  };  

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

  sort() {
    if (this.state.value === 'ascending') {
      const sortedProducts = this.state.products.sort((a, b) => {
        return a.price - b.price;
      });

      this.setState({
        products: sortedProducts
      });
    } else if (this.state.value === 'descending') {
      const sortedProducts = this.state.products.sort((a, b) => {
        return b.price - a.price;
      });

      this.setState({
        products: sortedProducts
      });
    }
  }

  render() {
    const fontSize = { fontSize: "1rem" };
    const imageStyle = { maxHeight: "50%", width: "100%", borderRadius: "9px 9px 0 0" };
    const { error, products } = this.state;
    return(
      <div className = "base-container">
        <Container fluid>
          <Row>
            <Col xs={6}>
              <div className="pt-3 p-2 d-inline-flex">
                <Form>
                  <Form.Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Control as="select" name="value" defaultValue="default" size="lg" onChange={this.handleChange}>
                        <option value="default">Sort: default</option>
                        <option value="ascending">Price: low to high</option>
                        <option value="descending">Price: high to low</option>
                      </Form.Control>
                    </Col>
                    <Col xs="auto">
                      <Button className="btn" onClick={this.sort}>
                        Submit
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </div>
            </Col>
            <Col xs={6} className="justify-content-end d-inline-flex">
              <div className="p-2 justify-content-end d-inline-flex">
                {window.sessionStorage.getItem('isLoggedIn') === "true"
                  ? <button type = "button" className="btn pr-1" float="right"><NavLink className="link" to="/create-product">Create New Product</NavLink></button>
                  : <></>
                }
              </div>
            </Col>
          </Row>
        </Container>
        <div className="header"> SCU Marketplace </div>
        <InputGroup className="mb-3 mr-3 pr-5 pl-5 pb-4 pt-3" onKeyPress={ this.handleKeypress }>
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
              onClick={ this.search }
            >
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
                                  ? <Link className="btn" variant="primary" to="/">Purchase</Link>
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
