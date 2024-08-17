import React, { Component } from 'react';
import MidNav from '../Home/MidNav/MidNav.js';
import HomeDisc from '../Home/HomeDisc/HomeDisc.js';
import Location from '../Home/Location/Location.js';
import ReviewForm from '../Home/Reviews/ReviewForm/ReviewForm.js';
import ReviewList from '../Home/Reviews/ReviewList/ReviewList.js';

import './Home.css';

export default class Home extends Component {
    constructor () {
        super()
        this.state = {reviewData:[]}
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    componentDidMount(){
        let data = this.props.data.reviews;
        this.setState({reviewData:data});
    }

    handleOnClick(data) {
        this.state.reviewData.push(data);
        this.setState({reviewData:this.state.reviewData});
    }        
    
    render() {
        return (
            <div className="home">
                <MidNav />
                <HomeDisc data={this.props.data}/>
                <ReviewList reviews = {this.state.reviewData}/>
                <ReviewForm  handeleOnClick = {this.handleOnClick} />
                <Location data={this.props.data.address}/>
            </div>
        )
    }
}
