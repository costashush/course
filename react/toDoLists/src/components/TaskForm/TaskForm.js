import React, { Component } from 'react';
 
 export default class TaskForm extends Component {
     constructor(){
         super()
         this.state = {taskTitle:""}
         this.handleAddClick = this.handleAddClick.bind(this)

     }
 
     handleAddClick(){
         if(this.state.taskTitle!==''){

             this.props.onNewTask(this.state.taskTitle)
             let testReturn = this.state.taskTitle;
             this.setState({taskTitle:""})   
             return testReturn;
            }
            
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
 