import React, { Component } from 'react';

export default class Rating extends Component {
 
   render() {
    //    let star = <i className="fa fa-star" key= {i} aria-hidden="true"></i>
    //    let starEmpty = <i className="fa fa-star-o"key= {i} aria-hidden="true"></i>
       var stars = []
       var i = 0;
       while (i < 5) {
           if (i < this.rate) {
               stars.push(<i className="fa fa-star" key= {i} aria-hidden="true"></i>)
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