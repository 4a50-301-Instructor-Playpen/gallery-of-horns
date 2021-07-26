//import logo from './logo.svg';
import './App.css';
//import { Dropdown } from 'react-bootstrap';

import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Data from './data/data.json';
import SelectedBeast from './components/SelectedBeast';
//import HornedBeast from './components/HornedBeast';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {    
    showModal: false,
    data: Data,  
    rawData: Data,     
    selectedBeast: {title: "", description: "", image_url: "", horns: ""}
    }
  }
  
  closeModal = () => {this.setState({showModal: false})}
  openModal = (beasty) => {this.setState({showModal: true, 
    selectedBeast: beasty
  })
console.log(`beasty: ${this.state.selectedBeast.title}`)
}
filterHorns = (ev) => {  
  let filteredData = this.state.rawData;    
  ev = parseInt(ev.target.value);    
  if (ev){filteredData = Data.filter( e => e.horns === ev); }  
  this.setState({data: filteredData});  
}
  modalBeast = (filtParam = "") => {
   // console.log("filterParam: " + filtParam);
    if (filtParam === "") {
    return Data;
  }
    else{
      return Data.filter((e) => {
        e.title = filtParam;
        return e;
      })      
    }   
    
  }
   
  
  render() {
    return (
    <>
    <Header/>      
    <SelectedBeast 
    showModal={this.state.showModal} 
    openModal={this.openModal} 
    closeModal={this.closeModal}
    selectedBeast={this.state.selectedBeast}/>
    <Main
    modalBeast={this.modalBeast}
    openModal={this.openModal}
    filterHorns={this.filterHorns}    
    appdata={this.state.data}        
    />
    
    
    
    <Footer />
    </>
    );
  }
}
export default App;
