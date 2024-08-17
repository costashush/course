import React, { Component } from 'react';


export default class Cell extends Component {
    render() {

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


        let listNumbers;

        listNumbers = numbers.map((number) => {

            var newNum = number * this.props.multiplaer
            return (
                <td key={number}>
                    {newNum}
                </td>
            );
        });
        return (

            <tr className="headline white-text" >
                {listNumbers}
            </tr>
        )
    }

}