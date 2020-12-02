import React from "react";
import { withRouter } from "react-router";
import '../style.scss';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class Purchase extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          name: "",
          description: "",
          price: "",
          photo: ""
        };

        this.getProduct = this.getProduct.bind(this);
    }

    async getProduct() {
      const product_id = {
        product_id: this.props.match.params.id,
      }
      
      return await fetch('/api/getProduct', {
          method: 'POST',
          body: JSON.stringify(product_id),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      .then(res => res.json());
    }

    componentWillMount() {
      this.getProduct().then(res =>
        this.setState({
          name: res.name,
          description: res.description,
          price: res.price,
          photo: res.photo
        })
      );
    }

  render() {
    console.log(this.state)
    return(
      <div className = "base-container">
        <Card border="dark" style={{ width: '30rem' }}>
          <Card.Img variant="top" src={this.state.photo}/>
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Subtitle>Price: ${this.state.price}</Card.Subtitle>
            <Card.Text>
              {this.state.description}
            </Card.Text>
            <p>Contact {this.getEmail().stringify()}</p>
          </Card.Body>
        </Card>
      </div>
    );
  };
}

export default withRouter(Purchase);
