import React, { Component } from 'react'
import axios from 'axios';

class AircraftList extends Component {
    constructor(props) {
        super(props)
    this.state = {
        aircrafts: [],
    }}

    componentDidMount(){
        axios.get(`/api/aircraft`).then(res => {
            // console.log(res);
            this.setState({ aircrafts: res.data }); 
            console.log(Object.keys(this.state.aircrafts[0]))
        })
        .catch(err => console.log(err))
    }

    renderTableData(){
    return this.state.aircrafts.map((aircraft, index) => {
    return(
    <tr key={aircraft._id}>
        <td>{index +1}</td>
        <td>{aircraft.model}</td>
        <td>{aircraft.year}</td>
        <td>{aircraft.tail_number}</td>
    </tr>
    )
    })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.aircrafts[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
        }


    render() {
        return (
           <div>
              <h1 id='title'>Aircraft List</h1>
              <table id='aircrafts'>
                 <tbody>
                    {/* <tr>{this.renderTableHeader()}</tr> */}
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}

export default AircraftList