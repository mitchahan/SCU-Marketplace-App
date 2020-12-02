import React from "react";
import { withRouter } from "react-router";
import '../style.scss';
import {Card} from 'react-bootstrap';

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
      
      await fetch('/api/getProduct', {
          method: 'POST',
          body: JSON.stringify(product_id),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          name: res[0].name,
          description: res[0].description,
          price: res[0].price,
          photo: res[0].photo
        });
      });
    }

    componentDidMount() {
      this.getProduct();
    }

  render() {
    const imageStyle = { maxHeight: "40%", width: "100%" }
    return(
      <div className = "base-container">
        <Card border="dark" className="mt-4 w-50">
          <Card.Img variant="top" style={imageStyle} src={this.state.photo}/>
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Subtitle className="pt-2">Price: ${this.state.price}</Card.Subtitle>
            <Card.Text className="pt-2">
              {this.state.description}
            </Card.Text>
            {/* <p>Contact {this.getEmail().stringify()}</p> */}
          </Card.Body>
        </Card>
      </div>
    );
  };
}

export default withRouter(Purchase);
