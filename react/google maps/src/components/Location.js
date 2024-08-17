import React, { Component } from 'react';

export default class Location extends Component {

    render() {
        let onDelLocation = this.props.onDelLocation
        return (
            <div>
            <div className="locationTitle">{this.props.title}</div>
                <div onClick={() => onDelLocation(this.props.index) } className="delLocation">X</div>      
        </div>
        )
    }

}