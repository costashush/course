import React, { Component } from 'react';
import moment from 'moment';
import './ReviewForm.css'

export default class ReviewForm extends Component {
    constructor() {
        super()

        this.state = {
            // name: "",
            // review: "",
            // rate: ""
        };
        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value })
        this.setState({ date : moment(new Date()).format("DD/MM/YYYY") })
        // console.log( e.target.value)
    }
    handleAddClick() {
        const { name, title, content, userImageUrl, rating } = this.state
        if (name && title && content && userImageUrl && rating) {

            this.props.handeleOnClick(this.state)
            this.setState({
                name: "",
                title: "",
                content : "",
                userImageUrl:"",
                rating: "",
                date:""
            })
        }
        else {
            alert("some fields are empty")

        }
    }

    render() {

        return (

            <div className="reviewForm">
                <h1>Place your review</h1>
                name: <input type="text" name="name" onChange={(e) => this.handleChange(e)} />
                title:  <input type="text" name="title" onChange={(e) => this.handleChange(e)} />
                content:  <input type="text" name="content" onChange={(e) => this.handleChange(e)} />
                user image: <input type="text" name="userImageUrl" onChange={(e) => this.handleChange(e)} />
                rate:    <input type="number" name="rating" onChange={(e) => this.handleChange(e)} />

                <button onClick={this.handleAddClick}>Add</button>
            </div>

        )
    }
}