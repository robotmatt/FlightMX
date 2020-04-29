import React from 'react';
import axios from 'axios';

export default class AircraftList extends React.Component {
    state = {
        planes: [],
    }
    componentDidMount() {
        // axios.get(`http://localhost:3000/aircraft/5ea8e794fdbaf331ce968bf2/delete`).then(res => {
        // axios.get(`http://localhost:3000/aircraft/OMOOAFM1281/tail`).then(res => {
        // axios.get(`http://localhost:3000/aircraft/5ea8e794fdbaf331ce968bf2/id`).then(res => {
        axios.get(`http://localhost:3000/aircraft/`).then(res => {
            // axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            if (res.data) {
                this.setState({ planes: res.data });
            }
        })
    }

    render() {
        return <ul>
            {this.state.planes.map(aircraft => <li key={aircraft._id}>{aircraft.model}</li>)}
        </ul>
    }
}