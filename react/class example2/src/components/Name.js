import React, { Component } from 'react';

export default class Name extends Component {
    constructor(){
        super()
        this.state = {name : "ENTER YOUR NAME" }
    }
    update(event){
        // let name = this.state.name
        
        this.setState({name : event.target.value});
        // console.log(event.target.value)
    }
   
    render() {
        let name= this.state
        return (
        <div className="app" className="center">
          <input type = "text" className="app" onChange={ (event) => this.update(event)}/> 
          <div >{this.state.name} </div>
        </div>
        )
    }
 
 }