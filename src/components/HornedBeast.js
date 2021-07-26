
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state = {timesClicked: 0}
    }
    favBeast = () => {
        this.setState(({timesClicked: this.state.timesClicked + 1}));
        console.log('clicky');
    }
    modal  = ()=>{
        console.log('modal Run');
        this.props.openModal({title: this.props.title, 
            description: this.props.description, 
            image_url: this.props.image_url,
            horns: this.props.horns});
    }
    render() 
    {
        return(
        <>
       
        {/* <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select> */}
        <Card style={{ width: '18rem' }}
        className="m-3">
            <Card.Img variant="top" src={this.props.image_url} onClick={this.modal} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>Number of Horns: {this.props.horns}</Card.Text>
                <Card.Text>{this.props.description}</Card.Text>
                <ListGroup className="list-group-flush">
                <ListGroupItem><FontAwesomeIcon icon={faHeart} onClick={this.favBeast} /> {this.state.timesClicked}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
        
        
        </>
        );
    }
}

export default HornedBeast;