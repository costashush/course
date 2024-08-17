



import React, { Component } from 'react';
import Board from './Board.js';
export default class App extends Component {
    render() {
        return (
        <div className="app">
            <h1 className="headline white-text">hello world with style!</h1>        
            <Board />
        </div>
        )
    }

}