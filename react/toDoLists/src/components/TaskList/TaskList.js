import React, { Component } from 'react';
import Task from '../Task/Task';

export default class TaskList extends Component {
    
    render() {
        let tasks = this.props.items.map((item,index)=> <Task key={index} item={item} />)

        return (
            <ul>{tasks}</ul>
        )
    }

}
