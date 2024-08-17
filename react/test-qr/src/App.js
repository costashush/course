import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonForm from './PersonForm';
import QrCode from './QrCode';



class App extends Component {
  constructor() {
    super()
    this.state = { code: "" }
    this.handleNewCode = this.handleNewCode.bind(this);
}

handleNewCode(json) {
    this.setState({code:json});
}
  render() {
    return (
      <div className="App">       

      <PersonForm onNewCode={this.handleNewCode} />
      <QrCode code={this.state.code}/>
      </div>
    );
  }
}

export default App;
