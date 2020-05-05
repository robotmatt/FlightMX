import React, { Component } from 'react'
import AircraftList from "./AircraftList"

export default class extends Component {
  state = {};
  
  render() {
    return (
      <AircraftList {...this.props} {...this.state} />
    );
  }
}