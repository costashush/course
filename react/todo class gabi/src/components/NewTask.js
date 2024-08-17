import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor(){
        super()
        this.state = {taskTitle:""}
        this.handleAddClick = this.handleAddClick.bind(this)

    }

    handleAddClick(){
        this.props.onNewTask(this.state.taskTitle)
        this.setState({taskTitle:""})        
    }

    handleTitleChange(e){
        var taskTitle  = e.target.value;
        this.setState({taskTitle})
    }

    render(){
        return (
            <div>
                <input id="inputTask" type="text" 
                    value={this.state.taskTitle}
                    onChange={(e)=>this.handleTitleChange(e)}/>
                <button onClick={this.handleAddClick}>Add</button>
            </div>
        )
    }
}
