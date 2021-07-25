import React, { Component } from 'react';
import './App.css';
import NewComp from './NewComp';
import Layout from './Components/layout';


class App extends Component{

  
  styles={
    fontStyle: 'bold',
    color: 'teal'
  }
  render(){
    return(
    <Layout />
    )
  };

}

export default App;
