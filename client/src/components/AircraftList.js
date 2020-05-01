import React from 'react';
import axios from 'axios';

export default class AircraftList extends React.Component {
    state = {
        aircrafts: [],
    }
    componentDidMount() {

        axios.get(`http://localhost:3000/aircraft`).then(res => {
            console.log(res);
            this.setState({ aircrafts: res.data });
        })
    }

    render() {
        return <ul>
            {this.state.aircrafts.map(aircraft => <li key={aircraft.id}>{aircraft.model}</li>)}
        </ul>
    }
}