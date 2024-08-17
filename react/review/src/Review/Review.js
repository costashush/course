import React, { Component } from 'react';
import Rating from '../Rating/Rating.js'
export default class Review extends Component{
    render(){
        return(
            <div>
               <h1> {this.props.review.name} </h1>
               <h3>{this.props.review.review}</h3>     
               <Rating rate={this.props.review.rate} />
            </div>         
        )
    }
}