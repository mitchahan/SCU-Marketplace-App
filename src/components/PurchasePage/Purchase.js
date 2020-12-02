import React from "react"
import '../style.scss';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Recycle from "../About Page/recycle.png";


class Purchase extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: undefined,
          name: undefined,
          description: undefined,
          price: undefined,
          photo: undefined
        };
    }

    componentDidMount() {
        let { product_id } = useParams();
        fetch('/api/getProduct', {
            method: 'POST',
            body: JSON.stringify(product_id),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    name: result.name,
                    description: result.description,
                    price: result.price,
                    photo: result.photo
                });
            },
            (error) => {
                this.setState({ error });
            }
        );
    }

  render(){
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
            <Button variant="primary">Link to the user page</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };
}

export default Purchase
