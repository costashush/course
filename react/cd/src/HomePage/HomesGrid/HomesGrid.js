import React, { Component } from 'react';
import Container from '../Container/Container.js'

import './HomesGrid.css';


export default class HomesGrid extends Component {

    render() {
        // let tasks = this.props.homes.map((item,index)=> <Task key={index} item={item} />)
        
        let homes = this.props.data.map((data,index)=> <Container key={index} data={data} />)
        return (
            <div className="homesGrid">
                {homes}
            </div>
        )
    }
}   





