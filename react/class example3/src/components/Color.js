import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Color (props) {
    let { red, green, blue ,title } = props



    return (

        <div>

            <h1>{title}</h1>

            <div className= "display">red:{red}</div>
            <div className= "display">green:{green}</div>
            <div className= "display">blue:{blue}</div>

            <div style = {{width:100 ,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}>  </div>
        </div>

    )

}
Color.propTypes = {
 
red: PropTypes.number,
green: PropTypes.number,
blue: PropTypes.number
}
Color.defaultProps = {
    title:'view color'

}