import React, { Component } from 'react';

class GoogleMap extends Component {
    constructor(props){
        super(props);
        this.addMarkerCallback = this.props.onAddMarker;
    }

    componentDidMount() {
        const israelCoords = {
            lat: 31.0461,
            lng: 34.8516
        };

        let map = new window.google.maps.Map(this.refs.map, {
            center: israelCoords,
            zoom: 8
        });

        map.addListener('click', (e) => {
            this.placeMarkerAndPanTo(e.latLng, map);
        });
    }

    placeMarkerAndPanTo(latLng, map) {
        let marker = new window.google.maps.Marker({
            position: latLng,
            map: map
        });

        map.panTo(latLng);
        this.addMarkerCallback(marker);
    }

    render() {
        return (
            <div ref="map" className="map">Map Appears Here!</div>
        );
    }
}

export default GoogleMap;