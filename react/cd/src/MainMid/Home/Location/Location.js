/*global google*/
import React, { Component } from 'react';

import './Location.css';

export default class Location extends Component {

    
    constructor(google){
        super();
       
    }


componentDidMount() {
    this.map = new google.maps.Map(this.$map, {
        center: {lat:parseInt(this.props.data.lat), lng:parseInt(this.props.data.lng)},
        zoom: 7
    });
    this.map.addListener('click', event => {
        // this.addMarkerToMap(event.latLng);
    });
    
    
}

addMarkerToMap(myLatlng){
    let marker =new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        
    });
    // this.props.handleClick(marker);
   
}
 render() {
    return (
        <div className="maps" ref={(el) => { this.$map = el; }}   >
        </div >

        )
    }

}
