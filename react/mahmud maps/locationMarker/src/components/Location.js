import React, { Component } from 'react';

class Location extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let delLocation = this.props.onDelLocation;

        return (
            <div className="location">
                <div className="locationTitle">{this.props.title}</div>
                <div onClick={() => delLocation(this.props.index) } className="delLocation">X</div>
            </div>
        )
    }
}

export default Location;