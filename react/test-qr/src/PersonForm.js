import React, { Component } from 'react';
export default class PersonForm extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            age: "",
            email: ""
        };
        this.handleAddClick = this.handleAddClick.bind(this)
    }


    handleAddClick() {
        if (this.state.name !== '' && this.state.age !== '' && this.state.email !== '') {

            var json = JSON.stringify(this.state);
            console.log(json)
            this.props.onNewCode(json)


            this.setState({
                name: "",
                age: "",
                email: ""
            })

        }

    }
    handleNameChange(e) {
        var name = e.target.value;
        this.setState({ name })
    }
    handleAgeChange(e) {
        var age = e.target.value;
        this.setState({ age })
    }
    handleEmailChange(e) {
        var email = e.target.value;
        this.setState({ email })
    }


    render() {

        return (

            <div className=" ">
                <h1>THIS IS FORM</h1>
                <form>
                    name: <input id="inputTask" type="text" value={this.state.name} onChange={(e) => this.handleNameChange(e)} />
                    age:    <input id="inputTask" type="number" value={this.state.age} onChange={(e) => this.handleAgeChange(e)} />
                    email:    <input id="inputTask" type="text" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />

                    <button onClick={this.handleAddClick}>Add</button>
                </form>
            </div>

        )
    }
}