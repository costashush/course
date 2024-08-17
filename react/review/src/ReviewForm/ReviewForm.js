import React, { Component } from 'react';
export default class ReviewForm extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            review: "",
            rate: ""
        };
        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    }
   
    handleChange(e) {
       
        this.setState({[e.target.name]:e.target.value})
    }
    handleAddClick() {
        // console.log(this.state)
        const {name, review, rate} = this.state 

        if (name && review && rate) {

            this.props.handeleOnClick(this.state)
            this.setState({
                            name: "",
                            review: "",
                            rate: ""
                        })
        }
        else {
            alert("some fields are empty")

        }
    }
   
    render() {

        return (

            <div className=" ">
                <h1>Place your review</h1>
                    name: <input type="text" name = "name" onChange={(e) => this.handleChange(e)} />
                    review:  <input type="text"  name="review"onChange={(e) => this.handleChange(e)} />
                    rate:    <input type="number" name="rate" onChange={(e) => this.handleChange(e)} />

              

                    <button onClick={this.handleAddClick}>Add</button>
            </div>

        )
    }
}