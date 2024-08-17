import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Container.css';

export default class Container extends Component {

    render() {
        return (

            <Link to={'home/'+ this.props.data.id}>

            <div className="container" style={{ backgroundImage: `url(${this.props.data.imageUrl})`}}>
         
            </div>
           </Link>
        )
    }
}   