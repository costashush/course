import React, { Component } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';

export default class App extends Component {

    constructor() {
        super()
        this.state = { items: [] }
        this.handleNewTask = this.handleNewTask.bind(this);
    }

    handleNewTask(itemName) {
        this.state.items.push(itemName);
        this.setState({items:this.state.items});
    }
 
    render() {
        return (
            <div className="app" >
                <h1>TaskList</h1>

                <TaskForm onNewTask={this.handleNewTask} />
                <TaskList items={this.state.items} />
            </div>
        )
    }

}
    
