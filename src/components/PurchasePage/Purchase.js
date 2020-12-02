import React from "react"
import '../style.scss';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Recycle from "../About Page/recycle.png";


class Purchase extends React.Component {
  render(){
    return(
      <div className = "base-container">
        <Card border="dark" style={{ width: '30rem' }}>
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
      </div>
    );
  };
}

export default Purchase
