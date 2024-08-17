import React, { Component } from 'react';
import Filter from '../HomePage/Filter/Filter.js';
import HomesGrid from '../HomePage/HomesGrid/HomesGrid.js';
import Location from '../MainMid/Home/Location/Location.js';


import homeData from '../homeData.json.js';
import './HomePage.css';

// console.log(HomeData)


class HomePage extends Component {
  render() {
    return (
       
      <div className="homePage">
        <Filter/>
        <HomesGrid data={homeData}/>
       {/* < Location data={HomeData.address}/> */}
      </div>
        
    );
  }
}

export default HomePage;
