import React, { Component } from 'react';
import Location from './Location';

class LocationList extends Component {
    constructor(props) {
        super(props);
        this.markers = this.props.markers;
        this.delLocationCallback = this.props.onDelMarker;
    }

    renderLocations() {
        let locationTitle, locationArr = [];
        locationArr.length = this.markers.length;

        for (let i = 0; i < this.markers.length; ++i) {
            locationTitle = this.getLocationTitleInfo(i, this.markers[i]);

            locationArr[i] = (
                <Location
                    key={i}
                    index={i}
                    onDelLocation={this.delLocationCallback}
                    title={locationTitle}
                />
            )
        }

        return locationArr;
    }

    getLocationTitleInfo(idx, marker) {
        let lat = marker.getPosition().lat().toFixed(2);
        let lng = marker.getPosition().lng().toFixed(2);

        return `Location${idx + 1} (${lat}, ${lng}))`;
    }

    render() {
        return (
            <div className="locationList">
                <h1>Locations</h1>

                {this.renderLocations()}
            </div>
        )
    }
}

export default LocationList;