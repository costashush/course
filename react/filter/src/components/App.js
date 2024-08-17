import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Card from './Card'; 
import TopBar from './TopBar'; 
import List from './List'; 
import Filter from './Filter'; 


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            originalList:[],
            displayedList:[]
        }
    }
    componentWillMount(){
		fetch('/static/data/MOCK_DATA.json')
            .then( response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then( data => {
                 this.setState({
                     originalList:data,
                     displayedList: data
                });
            })
            .catch( error => {
                console.error(`fetch operation failed: ${error.message}`);
            });
	}
    updateListState(displayedList){
        this.setState({
            displayedList
        })
    }
    render() {
        return (
        <div className="app">
            <TopBar>Filtering the list</TopBar>
            <div className="header">
                <h4 className="filter_title">{this.state.displayedList.length} items filtered</h4>
                <Filter className="filter" 
                        listData={this.state.originalList} 
                        onFilter={(fl)=> this.updateListState(fl)}/>
            </div>
            <List listData={this.state.displayedList}/>
        </div>
        )
    }
}