import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            str:'',
            filteredList:[],
            originalList:[]
        }
    }
    componentWillReceiveProps(nextProps){
		console.log('component Will Receive Props');
        if(this.state.originalList.length === 0){
            this.setState(Object.assign(this.state,{        
                filteredList : nextProps.listData,
                originalList : nextProps.listData
            }))
        }
	}
    updateList(event) {
        const { listData , onFilter } = this.props;
        let txt = event.target.value;

        let origin = txt.length > this.state.str.length ? this.state.filteredList : this.state.originalList;

        console.log('origin.length',origin.length)
        let filteredList = origin.filter( item =>
            item.firstName.toLowerCase().includes(txt.toLowerCase()) 
        )
        this.setState(Object.assign(this.state,{  
            str:txt,      
            filteredList : filteredList,
        }))
        onFilter(filteredList)
    }
    render() {
        return <input type="text" className="filter" onChange={(e) => this.updateList(e)} />
    }

}
Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    listData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    })).isRequired
}


