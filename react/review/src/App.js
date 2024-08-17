import React, { Component } from 'react';
// import Rating from './Rating/Rating';
import ReviewForm from './ReviewForm/ReviewForm';
import ReviewList from './ReviewList/ReviewList';

import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {data:[]}
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(data) {
    this.state.data.push(data);
    this.setState({data:this.state.data});
  }


 render() {
   return (
     <div className="App">
       <ReviewForm  handeleOnClick = {this.handleOnClick} />
       <ReviewList reviews = {this.state.data}/>
     </div>
   );
 }
}

export default App;
