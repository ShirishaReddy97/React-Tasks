import React from "react";
class Practice extends React.Component {
    constructor(props) {
        super(props)
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.state = {
            details: { first_name: '', last_name: '' }
        }
    }
    onFirstNameChange(event) {

        const value = event.target.value;


        this.setState(function (state) {
            return {
                details: Object.assign({},
                    state.details, {
                    first_name: value
                })
            }
        })
    }

    onLastNameChange(event) {

        const value = event.target.value;

        this.setState(function (state) {
            return {
                details: Object.assign({},
                    state.details, {
                    last_name: value
                })
            }
        })
    }

    render() {
        return (
            <div>
                State:
                <pre>{JSON.stringify(this.state)}</pre>
                <input type="text" onChange={this.onFirstNameChange} value={this.state.details.first_name} />
                <input type="text" onChange={this.onLastNameChange} value={this.state.details.last_name} />
            </div>
        )
    }
}
export default Practice