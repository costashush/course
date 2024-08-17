import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import LocationList from './LocationList';

class App extends Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this.addMarkerCallback = this.addMarkerCallback.bind(this);
    this.delMarkerCallback = this.delMarkerCallback.bind(this);
  }

  addMarkerCallback(marker){
    this.markers.push(marker);
    this.setState(this.markers);
  }

  delMarkerCallback(index){
    this.markers[index].setMap(null);
    this.markers.splice(index, 1);
    this.setState(this.markers);
  }

  render() {
    return (
      <div className="app">
        <GoogleMap onAddMarker={this.addMarkerCallback} />
        <LocationList markers={this.markers} onDelMarker={this.delMarkerCallback} />
      </div>
    );
  }
}

export default App;