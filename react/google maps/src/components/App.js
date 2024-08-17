import React, { Component } from 'react';
import Map from './Map.js';
import LocList from './LocList.js';


export default class App extends Component {
    constructor() {
        super();
        this.markers = []
        this.handleClickGoogleMaps = this.handleClickGoogleMaps.bind(this);
        this.handeleClickDelete = this.handeleClickDelete.bind(this)

    }
     handleClickGoogleMaps(marker){
        this.markers.push(marker);
        this.setState(this.markers)
    }


    handeleClickDelete(index) {
        this.markers[index].setMap(null);
        this.markers.splice(index, 1);
        this.setState(this.markers)
    }

    render() {
      
        return (
            <div className="app">
                <Map handleClick={this.handleClickGoogleMaps} />
                <LocList locationsList={this.markers} handeleDel={this.handeleClickDelete} />

            </div>
        )
    }
}