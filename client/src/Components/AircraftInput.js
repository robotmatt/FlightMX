import React from 'react';
import API from '../api';

export default class AircraftInput extends React.Component {
    state = {
        make: '',
    };

    handleChange = event => {
        this.setState({ make: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const aircraft = {
            make: this.state.make
        }
        const response = await API.post(`users`, { aircraft });
        console.log(response);
        console.log(response.data);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            Aircraft Make:
        <label>
                <input type="text" name="make" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>

        </form>
    }
}
