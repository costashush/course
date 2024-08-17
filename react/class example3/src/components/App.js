import React, { Component } from 'react';
import Color from './Color.js';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={red:'',green:'',blue:''}
        this.update = this.update.bind(this);
    }
    
    
componentDidMount(){
    console.log("componentDidMount")
}
update(event){
    let obj ={};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
}
   
    render() {
        return (
        <div >
          <input name="red" className="inputer" type ='text' onChange={ this.update}/> 
         
          <input name="green"className="inputer"type = 'text' onChange={ this.update}/> 
      
          <input name="blue" className="inputer" type = 'text' onChange={ this.update}/> 
       
          <Color  red= {this.state.red} green ={this.state.green} blue = {this.state.blue} />
        </div>
       
        )
    }
}
 