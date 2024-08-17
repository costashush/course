import React, { Component } from 'react';
import MidNav from '../Home/MidNav/MidNav.js';
import HomeDisc from '../Home/HomeDisc/HomeDisc.js';
import Location from '../Home/Location/Location.js';
import ReviewForm from '../Home/Reviews/ReviewForm/ReviewForm.js';
import ReviewList from '../Home/Reviews/ReviewList/ReviewList.js';
import MainImage from '../../MainTop/MainImage/MainImage.js';
import DateCheak from '../../MainMid/DateCheak/DateCheak.js';

import homeData from '../../homeData.json.js';

import './Home.css';

export default class Home extends Component {
    constructor({ match }) {
        super()
        this.state = { reviewData: [], home:null, id:match.params.id };
        this.handleOnClick = this.handleOnClick.bind(this);         
    }

    componentDidMount() {
 
        for (let home of homeData) {
            if (home.id == this.state.id) {
                let data = home.reviews;
                this.setState({ home:home ,reviewData: data});
                           break;                           
            }
            
        }
        
    }
    
    handleOnClick(data) {
        this.state.reviewData.push(data);
        this.setState({ reviewData: this.state.reviewData });
    }
    
    render() {
        return (
            <div>
                {this.state.home && <div className="home">
                    <MainImage data={this.state.home.imageUrl} />
                    <DateCheak data={this.state.home.price} />
                    <MidNav />
                    <HomeDisc data={this.state.home} />
                    <ReviewList reviews={this.state.reviewData} />
                    <ReviewForm handeleOnClick={this.handleOnClick} />
                    <Location data={this.state.home.address} />
                </div>}
            </div>
            
        )
    }
}
