import React, { Component } from 'react';
import './Rating.css'

export default class Rating extends Component {
 
   render() {
    //    let star = <i className="fa fa-star" key= {i} aria-hidden="true"></i>
    //    let starEmpty = <i className="fa fa-star-o"key= {i} aria-hidden="true"></i>
       var stars = []
       var i = 0;
       while (i < 5) {

        console.log(this.props.rate)
           if (i < this.props.rate) {
               stars.push(<i className="fa fa-star"  key= {i} aria-hidden="true"></i>)
           } else {
               stars.push( <i className="fa fa-star-o"key= {i} aria-hidden="true"></i>)
           }
           i++;
       }
       return (
           <div>
               {stars}
           </div>
       )

   }
}