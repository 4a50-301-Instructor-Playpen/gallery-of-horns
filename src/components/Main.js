import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'


class Main extends React.Component{
    constructor(props){
        super(props);
         this.state = {}
    }
    getBeasts = ((title = "") => {
        let beasts = this.props.modalBeast(title);        
        return beasts;
    })    
    
    render() 
    {
        
        return(
        <>
         <Form>
            <Form.Group className="mb-3">
                <Form.Label>Filter By Horns </Form.Label>   
                <br/>          
                <Form.Control as="select" onChange={this.props.filterHorns} custom>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>      
                </Form.Control>
            </Form.Group>
        </Form>
        
        {this.props.appdata.map((e) => {
            return <HornedBeast 
            key={e.title}
            title={e.title} 
            description={e.description} 
            image_url={e.image_url} 
            openModal={this.props.openModal}
            horns={e.horns}/>
            
        })}    
        </>
        );
    }
}

export default Main;