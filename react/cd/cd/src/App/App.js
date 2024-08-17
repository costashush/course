import React, { Component } from 'react';
import Search from '../MainTop/Search/Search.js';
import TopNav from '../MainTop/TopNav/TopNav.js';
import MainImage from '../MainTop/MainImage/MainImage.js';
import Home from '../MainMid/Home/Home.js';
import DateCheak from '../MainMid/DateCheak/DateCheak.js';
import HomeData from '../HomeData.json.js'
import './App.css';

console.log(HomeData)


class App extends Component {
  render() {
    return (
      <div className="App">          
        <TopNav />
        <Search />
        <MainImage data = {HomeData.imageUrl}/>
        <DateCheak data = {HomeData.price}/>
        <Home data={HomeData} />
      </div>
    );
  }
}

export default App;
