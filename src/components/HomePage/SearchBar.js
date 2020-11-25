/* @author Beau Burnight
 * @lastModifiedBy Mitch Hansen
 * Description: This the homepage. Expected functionality includes the nav bar, a search par for producs, and a button to create a new listing.
 */

import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
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
    return(
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
    );
  }
}

// const SearchBar = ({input:keyword,onChange:setKeyword}) => {
//   const BarStyling = {width:"40rem", backround:"#F2F1F9", border:"solid", padding:".5rem", float:"left"};
//   return(
//     <input style={BarStyling}
//     key="random1"
//     value= {keyword}
//     placeholder={"Search Product"}
//     onChange={(e) => setKeyword(e.target.value)}
//     />

//   )
// }

// export default SearchBar
