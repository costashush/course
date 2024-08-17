import React, { Component } from 'react';
import Name from './Name.js';

export default class App extends Component {
    constructor(){
        super()
        this.state = {amount : 0}
    }
    plus(){
        let amount = this.state.amount +1;
        this.setState({amount : amount});
    }
    minus(){
        let amount = this.state.amount -1;
        this.setState({amount : amount});
    }
    render() {
    
        return (

        <div className="app" className="center">
<Name />
          <button className="app"onClick={ () => this.plus()}>  + </button>
          <span className="app headline"  >{this.state.amount} </span>
          <button className="app"onClick={ () => this.minus()}> - </button>
        </div>
        )
    }
 
    
 }