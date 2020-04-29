import React from 'react';
import API from '../api';

export default class AircraftInput extends React.Component {
    state = {
        id: '',
    };

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        // Promise is resolved and value is inside of the response const.
        const response = await API.delete(`users/${this.state.id}`);
        console.log(response);
        console.log(response.data);
    };

    render() {
        return <form onSubmit={this.handleSubmit}>
            Aircraft ID:
        <label>
                <input type="number" name="id" onChange={this.handleChange} />
            </label>
            <button type="submit">Delete</button>

        </form>
    }
}
