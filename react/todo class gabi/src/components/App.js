import React, { Component } from 'react';
import TaskList from './TaskList';
import NewTask from './NewTask';

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

                <NewTask onNewTask={this.handleNewTask} />
                <TaskList items={this.state.items} />
            </div>
        )
    }

}