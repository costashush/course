import React, { Component } from 'react';

import Location from './Location.js';

export default class LocList extends Component {
    constructor(props) {
        super(props);
       this.delLocation = this.props.handeleDel
    }

    renderLocations() {
        let locations = this.props.locationsList;
        let locationsArray = []
        let title;
        for (let i = 0; i < locations.length; ++i) {
            
           let locTitle = `location no ${i+1} lat: ${locations[i].getPosition().lat()} lng: ${locations[i].getPosition().lng()} ` ;
            locationsArray[i] = (<Location
                key={i}
                index={i}
                onDelLocation={this.delLocation}
                title={locTitle}
            />)
        }
        return locationsArray;
    }

    render() {
        return (
            <div >
               <h1> this is loclist</h1>
               {this.renderLocations()}
            </div>
        )
    }
}

