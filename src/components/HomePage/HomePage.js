import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './style.scss';
import ProductDeck from './ProductDeck.js';
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
          {window.sessionStorage.getItem('isLoggedIn') === "true"
            ? <button type = "button" className="btn" float="right"><NavLink className="link" to="/create-product">Create New Listing</NavLink></button>
            : <></>
          }
        </div>
        <div className="top-right">
          <SortFilter />
        </div>
        <ProductDeck />
      </div>
    );
  }
}

export default HomePage;
