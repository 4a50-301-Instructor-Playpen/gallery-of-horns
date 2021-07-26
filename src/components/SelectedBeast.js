import React from 'react';
import Modal from 'react-bootstrap/Modal';

//import HornedBeast from './HornedBeast';

class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        
    }
    render() {
        return (
            <>
               <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <img src={this.props.selectedBeast.image_url} className="img-fluid" alt={this.props.selectedBeast.title}/>   
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        
        <Modal.Body>
          <p>{this.props.selectedBeast.description}</p>
          <p>Number of Horns: {this.props.selectedBeast.horns}</p>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
            </>
        )
    }
}
export default SelectedBeast
