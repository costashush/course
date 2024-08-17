import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

    constructor(props) {
        super(props);
    }
    updateList(event) {
        const { listData , onFilter } = this.props;
        let txt = event.target.value;

        let filteredList = listData.filter( item =>
            item.firstName.toLowerCase().includes(txt.toLowerCase()))

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


