import React, { Component } from 'react';
import Cell from './Cell.js';
export default class Board extends Component {

    render() {

        const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((muliplier) => {

            return (


                <tbody key={muliplier}>
                    <Cell multiplaer={muliplier} />

                </tbody>

            )


        });

        return (
            <div className="app">
                <h1 className="headline white-text">my fucking board</h1>
                <table>
                    {results}
                </table>
            </div>
        )
    }

}