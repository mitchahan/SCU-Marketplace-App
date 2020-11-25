import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './style.scss';


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
    const { error, products} = this.state;
    return(
      <div className = "base-container">
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
        <div className="top-right">
          {window.sessionStorage.getItem('isLoggedIn')
            ? <button type = "button" className="btn" float="right"><NavLink className="link" to="/create-product">Create New Listing</NavLink></button>
            : <></>
          }
        </div>
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
    );
  }
}

export default HomePage;
