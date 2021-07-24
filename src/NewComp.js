import React, { Component } from 'react';
import {connect} from 'react-redux';

export class NewComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"Subscribe to Mr.Fahad",
             button: "Subscribe"
        }
    }
    
    styles={
        fontStyle: "italic",
        color: "purple",
    };

    ButtonChange=()=>{
        this.setState({
            message: "thank you for subscribing!",
            button: "Subscribed"
        })  
    }

    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.button}</button>
            </div>
        )
    }
}

export default NewComp;
